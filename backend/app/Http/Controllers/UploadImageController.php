<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;


class UploadImageController extends Controller
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function __invoke(Request $request): JsonResponse
    {
        $user = User::query()->first();
        $user->addMedia($request->file('image'))->toMediaCollection(User::PROFILE_IMAGE);

        return $this->ok([
            'url' => $user->profileImage->getImgProxyUrl('profile'),
        ], 201);
    }
}
