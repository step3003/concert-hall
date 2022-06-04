<?php

use App\Http\Controllers\DocumentationController;
use App\Http\Controllers\NewsIndexController;
use App\Http\Controllers\NewsStoreController;
use App\Http\Controllers\UploadImageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/', DocumentationController::class);

Route::post('upload-image', UploadImageController::class);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('news')->as('.news')->group(function () {
    Route::get('/index', NewsIndexController::class);
    Route::post('/store', NewsStoreController::class);
});
