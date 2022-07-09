<?php

namespace App\Persistence\OpenApi;

use GoldSpecDigital\ObjectOrientedOAS\Objects\MediaType;
use GoldSpecDigital\ObjectOrientedOAS\Objects\RequestBody;
use GoldSpecDigital\ObjectOrientedOAS\Objects\Schema;
use Vyuldashev\LaravelOpenApi\Factories\RequestBodyFactory;

class BuySeatRequestBody extends RequestBodyFactory
{
    public function build(): RequestBody
    {
        return RequestBody::create('BuySeat')
            ->description('Купить места. Только для авторизованных посетителей')
            ->content(
                MediaType::json()->schema(
                    Schema::object()->properties(
                        Schema::array('seats_ids')->example([1, 3, 4]),
                        Schema::integer('event_id')->example(1)
                    ),
                )
            );
    }
}
