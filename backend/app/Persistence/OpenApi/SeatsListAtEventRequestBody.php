<?php

namespace App\Persistence\OpenApi;

use GoldSpecDigital\ObjectOrientedOAS\Objects\MediaType;
use GoldSpecDigital\ObjectOrientedOAS\Objects\RequestBody;
use GoldSpecDigital\ObjectOrientedOAS\Objects\Schema;
use Vyuldashev\LaravelOpenApi\Factories\RequestBodyFactory;

class SeatsListAtEventRequestBody extends RequestBodyFactory
{
    public function build(): RequestBody
    {
        return RequestBody::create('SeatsListAtEvent')
            ->description('Список мест для сидения у мероприятия')
            ->content(
                MediaType::json()->schema(
                    Schema::object()->properties(
                    ),
                )
            );
    }
}
