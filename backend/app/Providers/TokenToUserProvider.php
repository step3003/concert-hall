<?php

namespace App\Providers;

use App\Models\Token;
use App\Models\User;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Contracts\Auth\UserProvider;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class TokenToUserProvider implements UserProvider
{
    private Token $token;
    private Model $user;

    public function __construct (User $user, Token $token) {
        $this->user = $user;
        $this->token = $token;
    }

    public function retrieveById($identifier): ?Authenticatable
    {
        return $this->user->find($identifier);
    }

    public function retrieveByToken($identifier, $token)
    {
        $token = $this->token->with('tokenable')->where($identifier, $token)->first();

        return $token && $token->tokenable ? $token->tokenable : null;
    }

    public function updateRememberToken(Authenticatable $user, $token)
    {
        // TODO: Implement updateRememberToken() method.
    }

    public function retrieveByCredentials(array $credentials): ?Authenticatable
    {
        $user = $this->user;
        foreach ($credentials as $credentialKey => $credentialValue) {
            if (!Str::contains($credentialKey, 'password')) {
                $user->where($credentialKey, $credentialValue);
            }
        }

        return $user->first();
    }

    public function validateCredentials(Authenticatable $user, array $credentials): bool
    {
        $plain = $credentials['password'];

        return app('hash')->check($plain, $user->getAuthPassword());
    }
}
