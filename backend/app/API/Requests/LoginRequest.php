<?php

namespace App\API\Requests;

use App\API\Requests\Units\UserCredentialsValidation;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Validator;

class LoginRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'email' => [
                'required',
                'email',
                'string',
            ],
            'password' => [
                'string',
                'max:255',
            ],
        ];
    }

    public function withValidator(Validator $validator)
    {
        if ($validator->passes()) {
            $validator->after(function (Validator $validator) {
                $this->afterPasses($validator);
            });
        }
    }

    public function email()
    {
        return $this->input('email');
    }

    public function password()
    {
        return $this->input('password');
    }

    public function afterPasses(Validator $validator): void
    {
        $validation = new UserCredentialsValidation(
            $this->email(),
            $this->password(),
        );

        $validation->validate($validator);
    }
}
