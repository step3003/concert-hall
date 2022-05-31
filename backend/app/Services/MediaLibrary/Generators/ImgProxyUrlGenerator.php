<?php

namespace App\Services\MediaLibrary\Generators;

use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Config;
use App\Services\Imgproxy\URLSigner;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use App\Services\MediaLibrary\Presets\ImgProxyPreset;
use Illuminate\Contracts\Config\Repository as ConfigRepository;
use Spatie\MediaLibrary\Support\UrlGenerator\DefaultUrlGenerator;
use App\Services\MediaLibrary\Presets\ImgProxyPresetCollection;

class ImgProxyUrlGenerator extends DefaultUrlGenerator
{
    public const PREVIEW_SM = 'smallPreview';
    public const PREVIEW_MD = 'mediumPreview';
    public const PREVIEW_LG = 'largePreview';

    protected ?Media $media;
    protected ImgProxyPresetCollection $presets;
    protected URLSigner $imageProxySigner;
    private bool $wrapped = false;

    public function __construct(ConfigRepository $config)
    {
        parent::__construct($config);
        $this->imageProxySigner = resolve(URLSigner::class);
    }

    public function setMedia(Media $media): static
    {
        $this->presets = ImgProxyPresetCollection::createForMedia($media)
            ->getPresets($media->collection_name);
        parent::setMedia($media);

        return $this;
    }

    public function filterPresets(string $needle): static
    {
        if ($needle === '*') {
            return $this;
        }

        $this->presets = $this->presets->filter(fn ($preset) => Str::startsWith($preset->getName(), $needle));

        return $this;
    }

    public function wrapped(): static
    {
        $this->wrapped = true;

        return $this;
    }

    public function getImageProxyUrls(bool $withOriginal = false): array
    {
        $urls = [];

        foreach ($this->presets as $preset) {
            $url = $this->imageProxySigner->sign(
                $this->getPath(),
                $preset->toString(),
                $preset->getExtension(),
                $this->media->disk,
            );

            if ($this->wrapped) {
                $urls[$preset->getName()] = $url;
            } else {
                $urls[] = $url;
            }
        }

        if ($withOriginal) {
            $urls['original'] = $this->getUrlWithoutPreset();
        }

        return $urls;
    }

    public function getUrlWithoutPreset(): string
    {
        return $this->imageProxySigner->sign($this->getPath(), disk: $this->media->disk);
    }

    public function getImageProxyPreviewUrls(): array
    {
        $urls = [];

        foreach ($this->registerPreviewPresets() as $preset) {
            $urls[$preset->getName()] = $this->imageProxySigner->sign($this->getPath(), $preset->toString(), disk: $this->media->disk);
        }

        $urls['original'] = $this->getUrlWithoutPreset();

        return $urls;
    }

    protected function registerPreviewPresets(): array
    {
        return [
            ImgProxyPreset::create(static::PREVIEW_SM)
                ->height('120')
                ->width('120'),

            ImgProxyPreset::create(static::PREVIEW_MD)
                ->height('400')
                ->width('400'),

            ImgProxyPreset::create(static::PREVIEW_LG)
                ->height('900')
                ->width('900'),
        ];

    }

    public function getImageProxyPreviewUrl(string $presetName): ?string
    {
        $preset = Arr::first($this->registerPreviewPresets(), function (ImgProxyPreset $preset) use ($presetName) {
            return $preset->getName() == $presetName;
        });

        if (!$preset) {
            return null;
        }

        return $this->imageProxySigner->sign($this->getPath(), $preset->toString(), disk: $this->media->disk);
    }

    public function getImageProxyUrl(string $presetName): string
    {
        $preset = $this->presets->getByName($presetName);

        return $this->imageProxySigner->sign($this->getPath(), $preset->toString(), $preset->getExtension(), $this->media->disk);
    }
}
