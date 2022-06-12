<?php

namespace App\API\Controllers\Articles;

use App\API\Controllers\Controller;
use App\API\Resources\Articles\ArticleResource;
use App\Persistence\Repositories\ArticleRepository;;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;


class ArticleTestCreateController extends Controller
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function __construct(private ArticleRepository $articleRepository)
    {
    }

    public function __invoke(Request $request): JsonResponse
    {
        $article = $this->articleRepository->storeArticle($request->all());

        return $this->ok([
            'data' => ArticleResource::make($article),
        ], Response::HTTP_CREATED);
    }
}
