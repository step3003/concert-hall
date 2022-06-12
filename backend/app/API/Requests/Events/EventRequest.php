<?php

namespace App\API\Requests\Events;

use App\API\Requests\Units\UserCredentialsValidation;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Validator;

class EventRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [

        ];
    }
    public function page()
    {
        return $this->input('page', 1);
    }
}
