<?php

namespace App\API\Requests;

use App\API\Requests\Units\UserCredentialsValidation;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Validator;

class RegisterRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => [
                'required',
                'string',
                'max:255',
            ],
            'last_name' => [
                'required',
                'string',
                'max:255',
            ],
            'email' => [
                'required',
                'email',
                'string',
                'unique:visitors',
            ],
            'password' => [
                'required',
                'string',
                'max:255',
            ],
        ];
    }
}
