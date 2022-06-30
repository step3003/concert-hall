<?php

namespace App\API\Requests\Units;

use App\Persistence\Repositories\VisitorRepository;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Validator;

class UserCredentialsValidation
{
    public function __construct(private string $email, private string $password)
    {
    }

    public function validate(Validator $validator): void
    {
        $repository = new VisitorRepository();

        $visitor = $repository->findByEmail($this->email);


        if (! $visitor) {
            $validator->errors()->add('email', __('validation.messages.login.email_not_exists'));

            return;
        }

        if (! Hash::check($this->password, $visitor->password)) {
            $validator->errors()->add('password', __('validation.messages.login.password_not_correct'));

            return;
        }

    }
}
