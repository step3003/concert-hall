<?php

namespace App\API\Controllers;


use App\API\Requests\RegisterRequest;
use App\API\Resources\Clients\AuthClientResource;
use App\UseCases\RegisterClient\RegisterClientUseCase;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class RegisterController extends Controller
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function __construct(private RegisterClientUseCase $clientRegisterUseCase)
    {
    }

    public function __invoke(RegisterRequest $request): JsonResponse
    {
        $authUser = $this->clientRegisterUseCase->register($request->all());

        return $this->ok(
            [
                'data' => AuthClientResource::make($authUser->client),
                'token' => $authUser->createToken()
            ],
            Response::HTTP_CREATED);
    }
}
