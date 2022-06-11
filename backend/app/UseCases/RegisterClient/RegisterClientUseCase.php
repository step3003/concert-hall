<?php

namespace App\UseCases\RegisterClient;

use App\Persistence\Repositories\ClientRepository;
use App\UseCases\AuthUser;


class RegisterClientUseCase
{
    public function __construct(private ClientRepository $clientRepository)
    {

    }

    public function register(array $clientData): AuthUser
    {
        $client = $this->clientRepository->createClient($clientData);

        return new AuthUser($client);
    }
}
