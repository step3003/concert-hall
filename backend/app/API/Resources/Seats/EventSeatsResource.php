<?php

namespace App\API\Resources\Seats;

use Illuminate\Http\Resources\Json\JsonResource;

class EventSeatsResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'seat_id' => $this->seat_id,
            'event_id' => $this->event_id,
            'seat_value' => $this->seat->value,
            'is_free'  => $this->visitor_id ? false : true,
        ];
    }
}
