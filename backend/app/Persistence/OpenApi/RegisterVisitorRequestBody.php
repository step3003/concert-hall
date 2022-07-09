<?php

namespace App\Persistence\OpenApi;

use GoldSpecDigital\ObjectOrientedOAS\Objects\MediaType;
use GoldSpecDigital\ObjectOrientedOAS\Objects\RequestBody;
use GoldSpecDigital\ObjectOrientedOAS\Objects\Schema;
use Vyuldashev\LaravelOpenApi\Factories\RequestBodyFactory;

class RegisterVisitorRequestBody extends RequestBodyFactory
{
    public function build(): RequestBody
    {
        return RequestBody::create('RegisterVisitor')
            ->description('Регистрация посетителя')
            ->content(
                MediaType::json()->schema(
                    Schema::object()->properties(),
                )
            );
    }
}
