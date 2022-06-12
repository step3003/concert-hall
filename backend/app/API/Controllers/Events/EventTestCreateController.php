<?php

namespace App\API\Controllers\Events;

use App\API\Controllers\Controller;
use App\API\Resources\Events\EventResource;
use App\Persistence\Repositories\EventRepository;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;


class EventTestCreateController extends Controller
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function __construct(private EventRepository $eventRepository)
    {
    }

    public function __invoke(Request $request): JsonResponse
    {
        $event = $this->eventRepository->storeEvent($request->all());

        return $this->ok([
            'data' => EventResource::make($event),
        ], Response::HTTP_CREATED);
    }
}
