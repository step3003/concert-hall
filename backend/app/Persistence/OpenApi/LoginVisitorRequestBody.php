<?php

namespace App\Persistence\OpenApi;

use GoldSpecDigital\ObjectOrientedOAS\Objects\MediaType;
use GoldSpecDigital\ObjectOrientedOAS\Objects\RequestBody;
use GoldSpecDigital\ObjectOrientedOAS\Objects\Schema;
use Vyuldashev\LaravelOpenApi\Factories\RequestBodyFactory;

class LoginVisitorRequestBody extends RequestBodyFactory
{
    public function build(): RequestBody
    {
        return RequestBody::create('AuthVisitor')
            ->description('Авторизация посетителя')
            ->content(
                MediaType::json()->schema(
                    Schema::object()->properties(),
                )
            );
    }
}
