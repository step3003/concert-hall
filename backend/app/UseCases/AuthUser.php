<?php

namespace App\UseCases;

use App\Persistence\Models\Client;

class AuthUser
{
    public function __construct(public Client $client)
    {
    }

    public function createToken(): string
    {
        return $this->client->createToken('auth-token')->token->token;
    }
}
