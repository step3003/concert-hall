<?php

namespace App\Services\MediaLibrary\Contracts;

use App\Services\MediaLibrary\Presets\ImgProxyPreset;

interface HasImgProxyPresets
{
    public function addImgProxyPreset(string $name): ImgProxyPreset;

    public function registerImgProxyPresets(): void;

    public function getImgProxyPresets();
}
