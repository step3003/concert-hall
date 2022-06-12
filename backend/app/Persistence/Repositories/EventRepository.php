<?php

namespace App\Persistence\Repositories;


use App\Persistence\Models\Article;
use App\Persistence\Models\Event;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\LengthAwarePaginator;

class EventRepository
{
    public function getEventsWithPaginate($page): LengthAwarePaginator
    {
        return Event::query()
            ->with(['previewImage', 'instruments', 'genres'])
            ->paginate(20, page: $page);
    }

    public function storeEvent(array $dataEvent): Model
    {
        return Event::query()->create($dataEvent);
    }
}
