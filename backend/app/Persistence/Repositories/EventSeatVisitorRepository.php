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

class EventSeatVisitorRepository
{
    public function getSeatsByEventId($id, $withRelations = []): Collection
    {
        return EventSeatVisitor::query()
            ->where('event_id', $id)
            ->with($withRelations)
            ->get();
    }
}
