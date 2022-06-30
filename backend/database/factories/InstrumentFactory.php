<?php

namespace Database\Factories;

use App\Persistence\Models\Instrument;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Model>
 */
class InstrumentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Instrument::class;

    public function definition()
    {
        return [
            'name' => $this->faker->name(),
        ];
    }
}
