<?php

namespace App\API\Resources\Articles;

use Illuminate\Http\Resources\Json\JsonResource;

class ArticlesResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'text'  => $this->text,
            'preview_image' => $this?->previewImage?->getImgProxyUrl('preview'),
        ];
    }
}
