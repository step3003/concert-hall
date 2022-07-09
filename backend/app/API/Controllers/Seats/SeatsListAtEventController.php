<?php

namespace App\API\Controllers\Seats;

use App\API\Controllers\Controller;
use App\API\Resources\Seats\EventSeatsResource;
use App\Persistence\OpenApi\SeatsListAtEventRequestBody;
use App\UseCases\Events\EventSeatsUseCase;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Vyuldashev\LaravelOpenApi\Attributes as OpenApi;

#[OpenApi\PathItem]
class SeatsListAtEventController extends Controller
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function __construct(private EventSeatsUseCase $eventSeatsUseCase)
    {
    }


    /**
     *  Список мест для сидения у мероприятия
     */
    #[OpenApi\Operation(tags: ['Мероприятия'], method: 'GET')]
    #[OpenApi\RequestBody(factory: SeatsListAtEventRequestBody::class)]
    public function __invoke($eventId): JsonResponse
    {
        $seatsAtEvent = $this->eventSeatsUseCase->getSeatsAtEvent($eventId);

        return $this->ok([
            'data' => EventSeatsResource::collection($seatsAtEvent),
        ], Response::HTTP_OK);
    }
}
