<?php

namespace App\Persistence\Repositories;

use App\Persistence\Models\EventSeatVisitor;
use App\Persistence\Models\Visitor;


class SeatRepository
{
    public function addVisitorToEventSeat(int $eventId, array $seatsIds, Visitor $visitor): void
    {
        $eventSeats = EventSeatVisitor::query()
            ->where('event_id', $eventId)
            ->whereIn('seat_id', $seatsIds)
            ->get();

        $eventSeats->map(function ($eventSeat) use ($visitor) {
            $eventSeat->visitor_id = $visitor->id;
            $eventSeat->save();
        });
    }
}
