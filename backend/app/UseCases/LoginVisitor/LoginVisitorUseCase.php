<?php

namespace App\UseCases\LoginVisitor;

use App\Persistence\Repositories\VisitorRepository;
use App\UseCases\AuthUser;


class LoginVisitorUseCase
{
    public function __construct(private VisitorRepository $visitorRepository)
    {
    }

    public function login(string $email): AuthUser
    {
        $visitor = $this->visitorRepository->findByEmail($email);

        return new AuthUser($visitor);
    }
}
