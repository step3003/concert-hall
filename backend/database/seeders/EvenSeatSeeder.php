<?php

namespace Database\Seeders;

use App\Persistence\Models\Event;
use App\Persistence\Models\Seat;
use Illuminate\Database\Seeder;

class EvenSeatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Event::query()->first()->seats()->sync(
            Seat::query()->get()->pluck('id')->toArray(),
        );
    }
}
