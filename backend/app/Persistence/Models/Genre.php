<?php

namespace App\Persistence\Models;

use App\Infrastructure\MediaLibrary\Contracts\HasImgProxyPresets;
use App\Infrastructure\MediaLibrary\Traits\InteractsWithImgProxy;
use Database\Factories\GenreFactory;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Support\Str;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Genre extends Model implements HasMedia, HasImgProxyPresets
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
        'name',
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
            ->addImgProxyPreset('preview')
            ->width('290')
            ->height('360')
            ->quality(95)
            ->performOnCollections(self::PREVIEW_IMAGE)
            ->extension('jpg');
    }


    /** @return GenreFactory */
    protected static function newFactory()
    {
        return GenreFactory::new();
    }
}
