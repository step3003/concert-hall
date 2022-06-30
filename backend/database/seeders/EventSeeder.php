<?php

namespace Database\Seeders;

use App\Persistence\Models\Event;
use App\Persistence\Models\Genre;
use App\Persistence\Models\Instrument;
use Database\Factories\EventFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Event::factory()
            ->has(Genre::factory()->count(3))
            ->has(Instrument::factory()->count(3))
            ->create();
    }
}
