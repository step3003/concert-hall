<?php

namespace App\API\Controllers;


use App\API\Requests\RegisterRequest;
use App\API\Resources\Visitors\AuthVisitorResource;
use App\Persistence\OpenApi\RegisterVisitorRequestBody;
use App\UseCases\RegisterVisitor\RegisterVisitorUseCase;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;

use Vyuldashev\LaravelOpenApi\Attributes as OpenApi;
use Symfony\Component\HttpFoundation\Response;

#[OpenApi\PathItem]
class RegisterVisitorController extends Controller
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function __construct(private RegisterVisitorUseCase $registerVisitorUseCase)
    {
    }

    /**
     * Регистрация посетителя
     */
    #[OpenApi\Operation(tags: ['Посетитель'], method: 'POST')]
    #[OpenApi\RequestBody(factory: RegisterVisitorRequestBody::class)]
    public function __invoke(RegisterRequest $request): JsonResponse
    {
        $authUser = $this->registerVisitorUseCase->register($request->all());

        return $this->ok(
            [
                'data' => AuthVisitorResource::make($authUser->visitor),
                'token' => $authUser->createToken()
            ],
            Response::HTTP_CREATED);
    }
}
