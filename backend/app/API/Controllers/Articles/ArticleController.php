<?php

namespace App\API\Controllers\Articles;

use App\API\Controllers\Controller;
use App\API\Resources\Articles\ArticleResource;
use App\UseCases\Articles\ArticleUseCase;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;


class ArticleController extends Controller
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function __construct(private ArticleUseCase $articleUseCase)
    {
    }

    public function __invoke($id): JsonResponse
    {
        $articles = $this->articleUseCase->getArticleById($id);

        return $this->ok([
            'data' => ArticleResource::make($articles),
        ], Response::HTTP_OK);
    }
}
