<?php

namespace App\Models;


use App\Services\MediaLibrary\Contracts\HasImgProxyPresets;
use App\Services\MediaLibrary\Traits\InteractsWithImgProxy;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\MediaLibrary\InteractsWithMedia;

class Client extends Authenticatable implements HasMedia, HasImgProxyPresets
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
