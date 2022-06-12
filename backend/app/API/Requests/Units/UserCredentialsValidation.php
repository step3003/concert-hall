<?php

namespace App\API\Requests\Units;

use App\Persistence\Repositories\ClientRepository;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Validator;

class UserCredentialsValidation
{
    public function __construct(private string $email, private string $password)
    {

    }

    public function validate(Validator $validator): void
    {
        $repository = new ClientRepository();

        $client = $repository->findClientByEmail($this->email);


        if (! $client) {
            $validator->errors()->add('email', __('validation.messages.login.email_not_exists'));

            return;
        }

        if (! Hash::check($this->password, $client->password)) {
            $validator->errors()->add('password', __('validation.messages.login.password_not_correct'));

            return;
        }

    }
}
