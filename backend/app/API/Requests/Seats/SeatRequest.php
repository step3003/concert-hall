<?php

namespace App\API\Requests\Seats;

use App\API\Requests\Units\UserCredentialsValidation;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Validator;

class SeatRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'seats_ids' => [
                'required',
                'array',
            ],
            'event_id' => [
                'required',
                'int',
            ],
        ];
    }

    public function seatsIds()
    {
        return $this->input('seats_ids');
    }

    public function eventId()
    {
        return $this->input('event_id');
    }
}
