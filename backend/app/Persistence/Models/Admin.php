<?php

namespace App\Persistence\Models;

use App\Infrastructure\MediaLibrary\Contracts\HasImgProxyPresets;
use App\Infrastructure\MediaLibrary\Traits\InteractsWithImgProxy;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Admin extends Authenticatable implements HasMedia, HasImgProxyPresets
{
    public const PROFILE_IMAGE ='profile_image';

    use HasApiTokens, HasFactory, Notifiable;
    use InteractsWithMedia;
    use InteractsWithImgProxy;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function profileImage(): MorphOne
    {
        return $this->morphOne(config('media-library.media_model'), 'model')
            ->where('collection_name', self::PROFILE_IMAGE);
    }

    public function registerMediaCollections(): void
    {
        $this
            ->addMediaCollection(self::PROFILE_IMAGE)
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
            ->performOnCollections(self::PROFILE_IMAGE)
            ->extension('jpg');
    }
}
