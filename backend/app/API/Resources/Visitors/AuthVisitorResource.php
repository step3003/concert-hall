<?php

namespace App\API\Resources\Visitors;

use Illuminate\Http\Resources\Json\JsonResource;

class AuthVisitorResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'last_name' => $this->last_name,
            'email'  => $this->email,
            'profile_image' => $this?->profileImage?->getImgProxyUrl('profile'),
        ];
    }
}
