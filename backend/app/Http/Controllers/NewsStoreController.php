<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\News;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;


class NewsStoreController extends Controller
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function __invoke(Request $request): JsonResponse
    {
        $news = News::create(
            $request->all()
        );

        $news->addMedia($request->file('preview'))->toMediaCollection(News::PREVIEW_IMAGE);

        return $this->ok([
            'data' => $news->with('preview'),
        ], 201);
    }
}