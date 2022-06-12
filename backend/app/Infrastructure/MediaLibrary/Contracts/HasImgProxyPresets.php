<?php

namespace App\Infrastructure\MediaLibrary\Contracts;

use App\Infrastructure\MediaLibrary\Presets\ImgProxyPreset;

interface HasImgProxyPresets
{
    public function addImgProxyPreset(string $name): ImgProxyPreset;

    public function registerImgProxyPresets(): void;

    public function getImgProxyPresets();
}
