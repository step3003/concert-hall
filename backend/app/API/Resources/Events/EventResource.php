<?php

namespace App\API\Resources\Events;

use Illuminate\Http\Resources\Json\JsonResource;

class EventResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'slug' => $this->slug,
            'event_date_at' => $this->event_date_at?->toIso8601String(),
            'is_free' => $this->is_free,
            'duration' => $this->duration,
            'types' => $this->types,
            'price' => $this->price,
            'instruments' => $this->instruments,
            'genres' => $this->genres,
            'preview_image' => $this?->previewImage?->getImgProxyUrl('preview'),
        ];
    }
}
