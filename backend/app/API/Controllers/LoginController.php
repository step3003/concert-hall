<?php

namespace App\API\Controllers;


use App\API\Requests\LoginRequest;
use App\API\Resources\Clients\AuthClientResource;
use App\UseCases\LoginClient\LoginClientUseCase;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class LoginController extends Controller
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function __construct(private LoginClientUseCase $loginClientUseCase)
    {
    }

    public function __invoke(LoginRequest $request): JsonResponse
    {
        $authUser = $this->loginClientUseCase->login($request->email());


        return $this->ok(
            [
                'client' => AuthClientResource::make($authUser->client),
                'token' => $authUser->createToken()
            ],
            Response::HTTP_OK);
    }
}
