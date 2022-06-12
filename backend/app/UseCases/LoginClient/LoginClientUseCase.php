<?php

namespace App\UseCases\LoginClient;

use App\Persistence\Repositories\ClientRepository;
use App\UseCases\AuthUser;


class LoginClientUseCase
{
    public function __construct(private ClientRepository $clientRepository)
    {
    }

    public function login(string $email): AuthUser
    {
        $client = $this->clientRepository->findClientByEmail($email);

        return new AuthUser($client);
    }
}
