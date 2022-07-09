<?php

namespace App\API\Controllers;


use App\API\Requests\LoginRequest;
use App\API\Resources\Visitors\AuthVisitorResource;
use App\Persistence\OpenApi\LoginVisitorRequestBody;
use App\Persistence\OpenApi\RegisterVisitorRequestBody;
use App\UseCases\LoginVisitor\LoginVisitorUseCase;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Vyuldashev\LaravelOpenApi\Attributes as OpenApi;

#[OpenApi\PathItem]
class LoginVisitorController extends Controller
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function __construct(private LoginVisitorUseCase $loginVisitorUseCase)
    {
    }

    /**
     * Авторизация посетителя
     */
    #[OpenApi\Operation(tags: ['Посетитель'], method: 'POST')]
    #[OpenApi\RequestBody(factory: LoginVisitorRequestBody::class)]
    public function __invoke(LoginRequest $request): JsonResponse
    {
        $authUser = $this->loginVisitorUseCase->login($request->email());

        return $this->ok(
            [
                'data' => AuthVisitorResource::make($authUser->visitor),
                'token' => $authUser->createToken()
            ],
            Response::HTTP_OK);
    }
}
