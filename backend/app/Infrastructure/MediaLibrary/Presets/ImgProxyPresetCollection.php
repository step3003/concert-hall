<?php

namespace App\Infrastructure\MediaLibrary\Presets;

use App\Persistence\Models\Media;
use Exception;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Database\Eloquent\Relations\Relation;
use App\Infrastructure\MediaLibrary\Contracts\HasImgProxyPresets;

class ImgProxyPresetCollection extends Collection
{
    protected Media $media;

    public static function createForMedia(Media $media): ImgProxyPresetCollection
    {
        return (new static())->setMedia($media);
    }

    /**
     * @param Media $media
     *
     * @return $this
     * @throws
     */
    public function setMedia(Media $media): static
    {
        $this->media = $media;

        $this->items = [];

        $this->addPresetsFromRelatedModel($media);

        return $this;
    }

    protected function addPresetsFromRelatedModel(Media $media)
    {
        $modelName = Arr::get(Relation::morphMap(), $media->model_type, $media->model_type);

        /** @var HasImgProxyPresets $model */
        $model = new $modelName();

        if (!$model instanceof HasImgProxyPresets) {
            $this->items = [];

            return;
        }

        $model->registerImgProxyPresets();

        $this->items = $model->getImgProxyPresets();
    }

    /**
     *  Get a preset by it's name.
     *
     * @param string $name
     *
     * @return ImgProxyPreset
     *
     * @throws
     */
    public function getByName(string $name): ImgProxyPreset
    {
        $preset = $this->first(function (ImgProxyPreset $preset) use ($name) {
            return $preset->getName() === $name;
        });

        if (!$preset) {
            throw new Exception('Invalid preset');
        }

        return $preset;
    }

    public function getPresets(string $collectionName = ''): self
    {
        if ($collectionName === '') {
            return $this;
        }

        return $this->filter(function (ImgProxyPreset $preset) use ($collectionName) {
            return $preset->shouldBePerformedOn($collectionName);
        });
    }

}
