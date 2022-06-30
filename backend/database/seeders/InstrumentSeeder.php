<?php

namespace Database\Seeders;

use App\Persistence\Models\Instrument;
use Illuminate\Database\Seeder;

class InstrumentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Instrument::factory()->count(5)->create();
    }
}
