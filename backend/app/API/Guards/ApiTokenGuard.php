<?php

namespace App\API\Guards;

use Illuminate\Auth\GuardHelpers;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Contracts\Auth\UserProvider;
use Illuminate\Http\Request;


class ApiTokenGuard implements Guard
{
    use GuardHelpers;

    /**
     * @var mixed|string
     */
    private mixed $inputKey;
    /**
     * @var mixed|string
     */
    private mixed $storageKey;
    private Request $request;

    public function __construct(UserProvider $provider, Request $request, $configuration)
    {
        $this->provider = $provider;
        $this->request = $request;
        $this->inputKey = isset($configuration['input_key']) ? $configuration['input_key'] : 'token';
        $this->storageKey = isset($configuration['storage_key']) ? $configuration['storage_key'] : 'token';
    }

    public function check()
    {
        if (!is_null($this->user)) {
            return $this->user;
        }

        $user = null;

        // retrieve via token
        $token = $this->getTokenForRequest();

        if (!empty($token)) {
            // the token was found, how you want to pass?
            $user = $this->provider->retrieveByToken($this->storageKey, $token);
        }

        return $this->user = $user;
    }

    /**
     * Get the token for the current request.
     * @return null|string
     */
    public function getTokenForRequest(): ?string
    {
        $token = $this->request->query($this->inputKey);

        if (empty($token)) {
            $token = $this->request->input($this->inputKey);
        }

        if (empty($token)) {
            $token = $this->request->bearerToken();
        }

        return $token;
    }

    public function guest()
    {
        // TODO: Implement guest() method.
    }

    public function user(): ?Authenticatable
    {
        if (!is_null($this->user)) {
            return $this->user;
        }

        $user = null;

        // retrieve via token
        $token = $this->getTokenForRequest();

        if (!empty($token)) {
            // the token was found, how you want to pass?
            $user = $this->provider->retrieveByToken($this->storageKey, $token);
        }

        return $this->user = $user;
    }

    public function id()
    {
        // TODO: Implement id() method.
    }

    /**
     * Validate a user's credentials.
     *
     * @param  array $credentials
     *
     * @return bool
     */
    public function validate (array $credentials = []): bool
    {
        if (empty($credentials[$this->inputKey])) {
            return false;
        }

        $credentials = [ $this->storageKey => $credentials[$this->inputKey] ];

        if ($this->provider->retrieveByCredentials($credentials)) {
            return true;
        }

        return false;
    }

    public function hasUser()
    {
        // TODO: Implement hasUser() method.
    }

    public function setUser(Authenticatable $user)
    {
        // TODO: Implement setUser() method.
    }
}
