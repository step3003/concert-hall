<?php

namespace App\API\Resources\Articles;

use Illuminate\Http\Resources\Json\JsonResource;

class ArticleResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'text'  => $this->text,
            'slug'  => $this->slug,
            'preview_image' => $this?->previewImage?->getImgProxyUrl('preview'),
        ];
    }
}
