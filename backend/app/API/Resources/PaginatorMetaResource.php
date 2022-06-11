<?php

namespace App\API\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Pagination\LengthAwarePaginator;

/**
 * @mixin LengthAwarePaginator
 */

class PaginatorMetaResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'current_page' => $this->currentPage(),
            'from'         => $this->firstItem(),
            'last_page'    => $this->lastPage(),
            'per_page'     => $this->perPage(),
            'to'           => $this->lastItem(),
            'total'        => $this->total(),
        ];
    }
}
