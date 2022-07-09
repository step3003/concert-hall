<?php

namespace App\Persistence\Models;

use App\Infrastructure\MediaLibrary\Contracts\HasImgProxyPresets;
use App\Infrastructure\MediaLibrary\Traits\InteractsWithImgProxy;
use Database\Factories\EventFactory;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\Relations\Pivot;
use Illuminate\Support\Str;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class EventSeatVisitor extends Pivot
{
    protected $fillable = [
        'event_id',
        'seats_ids',
    ];

    public function events(): HasMany
    {
        return $this->hasMany(Event::class, 'id');
    }

    public function seat(): BelongsTo
    {
        return $this->belongsTo(Seat::class, 'seat_id');
    }



}
