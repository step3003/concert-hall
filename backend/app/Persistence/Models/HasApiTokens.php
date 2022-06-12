<?php

namespace App\Persistence\Models;

use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Support\Str;

trait HasApiTokens
{
    /**
     * The access token the user is using for the current request.
     *
     * @var Token $token
     */
    protected Token $token;

    /**
     * Get the access tokens that belong to model.
     *
     * @return MorphMany
     */
    public function tokens(): MorphMany
    {
        return $this->morphMany(Token::class, 'tokenable');
    }

    /**
     * Determine if the current API token has a given scope.
     *
     * @param  string  $ability
     * @return bool
     */
    public function tokenCan(string $ability): bool
    {
        return $this->token && $this->token->can($ability);
    }

    /**
     * Create a new personal access token for the user.
     *
     * @param  string  $name
     * @param  array  $abilities
     * @return NewAccessToken
     */
    public function createToken(string $name, array $abilities = ['*']): NewAccessToken
    {
        $token = $this->tokens()->create([
            'name' => $name,
            'token' => $plainTextToken = Str::random(40),
            'abilities' => $abilities,
        ]);

        return new NewAccessToken($token, $plainTextToken);
    }

    /**
     * Get the access token currently associated with the user.
     *
     *
     */
    public function currentAccessToken(): Token
    {
        return $this->token;
    }

    /**
     * Set the current access token for the user.
     *
     *
     *
     */
    public function withAccessToken($token): static
    {
        $this->token = $token;

        return $this;
    }
}
