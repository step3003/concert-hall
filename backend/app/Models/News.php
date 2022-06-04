<?php

namespace App\Models;

use App\Services\MediaLibrary\Contracts\HasImgProxyPresets;
use App\Services\MediaLibrary\Traits\InteractsWithImgProxy;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class News extends Model implements HasMedia, HasImgProxyPresets
{
    public const PREVIEW_IMAGE ='preview_image';

    use HasFactory;
    use InteractsWithMedia;
    use InteractsWithImgProxy;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'description',
    ];


    public function previewImage(): MorphOne
    {
        return $this->morphOne(config('media-library.media_model'), 'model')
            ->where('collection_name', self::PREVIEW_IMAGE);
    }

    public function registerMediaCollections(): void
    {
        $this
            ->addMediaCollection(self::PREVIEW_IMAGE)
            ->useDisk('concert-hall')
            ->singleFile();
    }

    public function registerImgProxyPresets(): void
    {
        $this
            ->addImgProxyPreset('profile')
            ->width('290')
            ->height('360')
            ->quality(95)
            ->performOnCollections(self::PREVIEW_IMAGE)
            ->extension('jpg');
    }
}
