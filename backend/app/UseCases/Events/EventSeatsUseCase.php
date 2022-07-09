<?php

namespace App\UseCases\Events;


use App\Persistence\Repositories\EventSeatVisitorRepository;
use Illuminate\Support\Collection;


class EventSeatsUseCase
{
    public function __construct(private EventSeatVisitorRepository $eventSeatVisitorRepository)
    {
    }

    public function getSeatsAtEvent($id): Collection
    {
        $seatsAtEvent = $this
            ->eventSeatVisitorRepository
            ->getSeatsByEventId(
                $id,
                withRelations: ['seat']
            );

        return $seatsAtEvent->sortBy(function ($seat) {
            return $seat->seat->value;
        });
    }
}
