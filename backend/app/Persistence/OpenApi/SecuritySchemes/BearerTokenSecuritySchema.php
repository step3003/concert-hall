<?php

namespace App\Persistence\OpenApi\SecuritySchemes;

use GoldSpecDigital\ObjectOrientedOAS\Objects\MediaType;
use GoldSpecDigital\ObjectOrientedOAS\Objects\RequestBody;
use GoldSpecDigital\ObjectOrientedOAS\Objects\Schema;
use GoldSpecDigital\ObjectOrientedOAS\Objects\SecurityScheme;
use Vyuldashev\LaravelOpenApi\Factories\RequestBodyFactory;
use Vyuldashev\LaravelOpenApi\Factories\SecuritySchemeFactory;

class BearerTokenSecuritySchema extends SecuritySchemeFactory
{
    public function build(): SecurityScheme
    {
        return SecurityScheme::create('BearerToken')
            ->type(SecurityScheme::TYPE_HTTP)
            ->scheme('bearer')
            ->in(SecurityScheme::IN_HEADER);
    }
}
