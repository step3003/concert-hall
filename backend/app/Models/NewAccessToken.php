<?php

namespace App\Models;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Contracts\Support\Jsonable;

class NewAccessToken implements Arrayable, Jsonable
{
    /**
     * The access token instance.
     *
     * @var Token $token
     */
    public Token $token;

    /**
     * The plain text version of the token.
     *
     * @var string
     */
    public string $plainTextToken;

    /**
     * Create a new access token result.
     *
     * @param Token $token
     * @param  string  $plainTextToken
     * @return void
     */
    public function __construct(Token $token, string $plainTextToken)
    {
        $this->token = $token;
        $this->plainTextToken = $plainTextToken;
    }

    /**
     * Get the instance as an array.
     *
     * @return array
     */
    public function toArray()
    {
        return [
            'token' => $this->token,
            'plainTextToken' => $this->plainTextToken,
        ];
    }

    /**
     * Convert the object to its JSON representation.
     *
     * @param  int  $options
     * @return string
     */
    public function toJson($options = 0)
    {
        return json_encode($this->toArray(), $options);
    }
}
