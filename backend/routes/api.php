<?php

use App\API\Controllers\Articles\ArticleController;
use App\API\Controllers\Articles\ArticlesListController;
use App\API\Controllers\Articles\ArticleTestCreateController;
use App\API\Controllers\Events\EventsListController;
use App\API\Controllers\DocumentationController;
use App\API\Controllers\Events\EventTestCreateController;
use App\API\Controllers\VisitorController;
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
    Route::post('login', VisitorController::class)->name('login');
});

Route::prefix('articles')->as('.articles')->group(function () {
    Route::get('/', ArticlesListController::class);
    Route::get('/{slug}', ArticleController::class);
    Route::post('/test-create', ArticleTestCreateController::class);
});

Route::prefix('events')->as('.events')->group(function () {
    Route::get('/', EventsListController::class);
    Route::post('/test-create', EventTestCreateController::class);
});

Route::middleware('auth:token')->group(function () {
    Route::get('/test', TestAuthController::class);
});

