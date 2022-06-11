<?php

namespace App\Persistence\Repositories;


use App\Persistence\Models\Article;

class ArticleRepository
{
    public function getArticlesWithPaginate($page)
    {
        return Article::query()
            ->with('previewImage')
            ->paginate(20, page: $page);
    }

    public function getArticleById($id)
    {
        return Article::query()->findOrFail($id);
    }
}
