<?php

namespace App\API\Controllers\Events;

use App\API\Controllers\Controller;
use App\API\Requests\Events\EventRequest;
use App\API\Resources\Events\EventResource;
use App\API\Resources\PaginatorMetaResource;
use App\UseCases\Events\EventUseCase;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;


class EventsListController extends Controller
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function __construct(private EventUseCase $eventUseCase)
    {
    }

    public function __invoke(EventRequest $request): JsonResponse
    {
        $eventsPaginator = $this->eventUseCase->getEventsWithPaginate($request->page());

        return $this->ok([
            'data' => EventResource::collection($eventsPaginator->items()),
            'meta' => PaginatorMetaResource::make($eventsPaginator)
        ], Response::HTTP_OK);
    }
}
