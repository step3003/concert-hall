<?php

namespace Database\Factories;

use App\Persistence\Models\Genre;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory\Genre
 */
class GenreFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = Genre::class;

    public function definition()
    {
        return [
            'name' => $this->faker->name(),
        ];
    }
}
