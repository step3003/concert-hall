<?php

namespace App\UseCases\Events;

use App\Persistence\Repositories\ArticleRepository;
use App\Persistence\Repositories\EventRepository;
use Illuminate\Pagination\LengthAwarePaginator;

class EventUseCase
{
    public function __construct(private EventRepository $eventRepository)
    {
    }

    public function getEventsWithPaginate(string $page): LengthAwarePaginator
    {
        return $this->eventRepository->getEventsWithPaginate($page);
    }
}
