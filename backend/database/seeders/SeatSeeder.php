<?php

namespace Database\Seeders;

use App\Persistence\Models\Seat;
use Illuminate\Database\Seeder;

class SeatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $seatsNumbers = 200;
        for ($i = 1; $i <= $seatsNumbers; $i++) {
            Seat::create([
                'value' => $i,
            ]);
        }
    }
}
