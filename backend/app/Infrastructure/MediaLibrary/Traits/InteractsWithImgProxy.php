<?php

namespace App\Infrastructure\MediaLibrary\Traits;
use App\Infrastructure\MediaLibrary\Presets\ImgProxyPreset;

trait InteractsWithImgProxy
{
    public array $imgProxyPresets = [];

    /**
     * Register presets
     */
    public function registerImgProxyPresets(): void
    {
    }

    public function addImgProxyPreset(string $name): ImgProxyPreset
    {
        $preset = ImgProxyPreset::create($name);

        $this->imgProxyPresets[] = $preset;

        return $preset;
    }

    public function getImgProxyPresets(): array
    {
        return $this->imgProxyPresets;
    }
}
