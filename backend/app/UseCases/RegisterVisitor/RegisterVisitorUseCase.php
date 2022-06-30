<?php

namespace App\UseCases\RegisterVisitor;

use App\Persistence\Repositories\VisitorRepository;
use App\UseCases\AuthUser;


class RegisterVisitorUseCase
{
    public function __construct(private VisitorRepository $visitorRepository)
    {
    }

    public function register(array $visitorData): AuthUser
    {
        $visitor = $this->visitorRepository->create($visitorData);

        return new AuthUser($visitor);
    }
}
