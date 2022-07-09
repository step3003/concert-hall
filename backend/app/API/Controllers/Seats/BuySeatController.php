<?php

namespace App\API\Controllers\Seats;

use App\API\Controllers\Controller;
use App\API\Requests\Seats\BuySeatRequest;
use App\UseCases\Seats\BuySeatUseCase;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;


class BuySeatController extends Controller
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function __construct(private BuySeatUseCase $buySeatUseCase)
    {
    }

    public function __invoke(BuySeatRequest $request): JsonResponse
    {
        $this->buySeatUseCase->buy(
            $request->eventId(),
            $request->seatsIds()
        );

        return $this->ok([], 201);
    }
}
