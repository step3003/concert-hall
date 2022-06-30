<?php

namespace App\UseCases;

use App\Persistence\Models\Visitor;

class AuthUser
{
    public function __construct(public Visitor $visitor)
    {
    }

    public function createToken(): string
    {
        return $this->visitor->createToken('auth-token')->token->token;
    }
}
