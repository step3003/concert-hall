<?php

namespace App\UseCases\Seats;

use App\Persistence\Models\Visitor;
use App\Persistence\Repositories\SeatRepository;
use Illuminate\Support\Facades\Auth;

class BuySeatUseCase
{
    public function __construct(private SeatRepository $seatRepository)
    {
    }

    public function buy($eventId, array $seatsIds): void
    {
        /**
         * @var Visitor $visitor;
         */
        $visitor = Auth::user();
        $this->seatRepository->addVisitorToEventSeat($eventId, $seatsIds, $visitor);
    }
}
