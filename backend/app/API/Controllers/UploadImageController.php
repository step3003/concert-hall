<?php

namespace App\API\Controllers;

use App\Persistence\Models\Admin;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;


class UploadImageController extends Controller
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function __invoke(Request $request): JsonResponse
    {
        $admin = Admin::firstOrCreate([
            'name' => 'Alex',
            'email' => 'sokol.sasha66@gmail.com',
        ], [
            'password' => Hash::make('123456')
        ]);


        $admin->addMedia($request->file('image'))->toMediaCollection(Admin::PROFILE_IMAGE);

        return $this->ok([
            'url' => $admin->profileImage->getImgProxyUrl('profile'),
        ], 201);
    }
}
