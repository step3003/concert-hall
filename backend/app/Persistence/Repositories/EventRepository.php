<?php

namespace App\Persistence\Repositories;


use App\Persistence\Models\Article;
use App\Persistence\Models\Event;
use App\Persistence\Models\EventSeatVisitor;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;

class EventRepository
{
    public function getEventsWithPaginate($page): LengthAwarePaginator
    {
        return Event::query()
            ->with(['previewImage', 'instruments', 'genres'])
            ->paginate(20, page: $page);
    }

    public function getSeatsByEvent($id)
    {
        return EventSeatVisitor::query()->where('event_id', $id)->get();
    }

    public function storeEvent(array $dataEvent): Model
    {
        $event = Event::query()->create($dataEvent);
        $event->instruments()->sync(Arr::get($dataEvent, 'instruments'));
        $event->genres()->sync(Arr::get($dataEvent, 'genres'));

        return $event;
    }
}
