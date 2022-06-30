<?php

namespace App\Persistence\Repositories;

use App\Persistence\Models\Visitor;

class VisitorRepository
{
    public function create(array $dataVisitor)
    {
        return tap(Visitor::query()->create(
            $dataVisitor
        ))->target;
    }

    public function findByEmail(string $email)
    {
        return Visitor::query()->whereEmail($email)->first();
    }
}
