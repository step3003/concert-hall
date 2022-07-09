<?php

namespace App\API\Controllers\Seats;

use App\API\Controllers\Controller;
use App\API\Resources\Seats\EventSeatsResource;
use App\UseCases\Events\EventSeatsUseCase;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;


class SeatController extends Controller
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function __construct(private EventSeatsUseCase $eventSeatsUseCase)
    {
    }

    public function __invoke($id): JsonResponse
    {
        $seatsAtEvent = $this->eventSeatsUseCase->getSeatsAtEvent($id);

        return $this->ok([
            'data' => EventSeatsResource::collection($seatsAtEvent),
        ], Response::HTTP_OK);
    }
}
