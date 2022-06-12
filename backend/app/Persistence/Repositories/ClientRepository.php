<?php

namespace App\Persistence\Repositories;

use App\Persistence\Models\Client;

class ClientRepository
{
    public function createClient(array $dataClient)
    {
        return tap(Client::query()->create(
            $dataClient
        ))->target;
    }

    public function findClientByEmail(string $email)
    {
        return Client::query()->whereEmail($email)->first();
    }

    public function isEsistsClientByEmail(string $email)
    {
        return Client::query()->whereEmail($email)->exists();
    }
}
