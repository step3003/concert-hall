<?php

namespace App\API\Controllers;

use App\API\Resources\NewsResource;
use App\Models\Admin;
use App\Models\News;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;


class NewsIndexController extends Controller
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function __invoke(Request $request): JsonResponse
    {
        dd('d');
        return $this->ok([
            'data' => NewsResource::collection(
                News::query()->with('previewImage')->get()
            )
        ], 200);
    }
}