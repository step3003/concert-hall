<?php

namespace App\API\Controllers;

use App\API\Resources\NewsResource;
use App\Persistence\Models\Admin;
use App\Persistence\Models\News;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class TestAuthController extends Controller
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function __invoke(Request $request): JsonResponse
    {
        return $this->ok(
            [
                'data' => Auth::user(),
                'message' => 'Вы попали на авт. роут'
            ],
            200);
    }
}
