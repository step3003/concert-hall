<?php

namespace App\Persistence\Repositories;


use App\Persistence\Models\Article;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\LengthAwarePaginator;

class ArticleRepository
{
    public function getArticlesWithPaginate($page): LengthAwarePaginator
    {
        return Article::query()
            ->with('previewImage')
            ->paginate(20, page: $page);
    }

    public function getArticleById($id)
    {
        return Article::query()->findOrFail($id);
    }

    public function storeArticle(array $dataArticle): Model
    {
        return Article::query()->create($dataArticle);
    }
}
