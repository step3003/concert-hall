<?php

namespace Database\Factories;

use App\Persistence\Models\Event;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Model>
 */
class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Event::class;

    public function definition()
    {
        return [
            'title' => $this->faker->title,
            'description' => $this->faker->realText,
            'is_free' => false,
            'duration' => 3,
            'types' => [
                'Тип 1',
                'Тип 2',
            ],
            'event_date_at' => $this->faker->date,
            'price' => $this->faker->numberBetween(10, 100),
        ];
    }
}
