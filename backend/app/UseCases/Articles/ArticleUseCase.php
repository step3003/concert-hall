<?php

namespace App\UseCases\Articles;

use App\Persistence\Repositories\ArticleRepository;
use Illuminate\Pagination\LengthAwarePaginator;

class ArticleUseCase
{
    public function __construct(private ArticleRepository $articleRepository)
    {
    }

    public function getArticlesWithPaginate(string $page): LengthAwarePaginator
    {
        return $this->articleRepository->getArticlesWithPaginate($page);
    }

    public function getArticleById($id)
    {
        return $this->articleRepository->getArticleById($id);
    }
}
