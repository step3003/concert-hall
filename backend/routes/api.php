<?php

use App\API\Controllers\Articles\ArticleController;
use App\API\Controllers\Articles\ArticlesListController;
use App\API\Controllers\DocumentationController;
use App\API\Controllers\LoginController;
use App\API\Controllers\NewsIndexController;
use App\API\Controllers\NewsStoreController;
use App\API\Controllers\RegisterController;
use App\API\Controllers\TestAuthController;
use App\API\Controllers\UploadImageController;
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

Route::prefix('auth')->as('auth.')->group(function () {
    Route::post('register', RegisterController::class)->name('register');
    Route::post('login', LoginController::class)->name('login');
});

Route::prefix('articles')->as('.news')->group(function () {
    Route::get('/', ArticlesListController::class);
    Route::get('/{articleId}', ArticleController::class)
        ->where('articleId', '[0-9]+')
        ->name('show');
});

Route::prefix('news')->as('.news')->group(function () {
    Route::get('/', NewsIndexController::class);
    Route::post('/store', NewsStoreController::class);
});

Route::middleware('auth:token')->group(function () {
    Route::get('/test', TestAuthController::class);
});

