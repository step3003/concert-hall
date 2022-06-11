<?php

namespace App\Persistence\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\MediaLibrary\MediaCollections\Models\Media as BaseMedia;
use Spatie\MediaLibrary\Support\UrlGenerator\UrlGeneratorFactory;

class Media extends BaseMedia
{
    use HasApiTokens, HasFactory, Notifiable;

    public const MEDIA_DISK = 'media';
    public const MEDIA_DIRECTORY = 'media/';

    public function getImgProxyUrl(string $preset)
    {
        $urlGenerator = UrlGeneratorFactory::createForMedia($this);

        return $urlGenerator->setMedia($this)->getImageProxyUrl($preset);
    }
}
