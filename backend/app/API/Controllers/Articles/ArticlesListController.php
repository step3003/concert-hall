<?php

namespace App\API\Controllers\Articles;

use App\API\Controllers\Controller;
use App\API\Requests\ArticleRequest;
use App\API\Resources\Articles\ArticleResource;
use App\API\Resources\PaginatorMetaResource;
use App\UseCases\Articles\ArticleUseCase;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;


class ArticlesListController extends Controller
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function __construct(private ArticleUseCase $articleUseCase)
    {
    }

    public function __invoke(ArticleRequest $request): JsonResponse
    {
        $articlesPaginator = $this->articleUseCase->getArticlesWithPaginate($request->page());

        return $this->ok([
            'data' => ArticleResource::collection($articlesPaginator->items()),
            'meta' => PaginatorMetaResource::make($articlesPaginator)
        ], Response::HTTP_OK);
    }
}
