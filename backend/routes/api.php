<?php

use App\API\Controllers\Articles\ArticleController;
use App\API\Controllers\Articles\ArticlesListController;
use App\API\Controllers\Articles\ArticleTestCreateController;
use App\API\Controllers\Events\EventsListController;
use App\API\Controllers\DocumentationController;
use App\API\Controllers\Events\EventTestCreateController;
use App\API\Controllers\Seats\SeatsListAtEventController;
use App\API\Controllers\LoginVisitorController;
use App\API\Controllers\RegisterVisitorController;
use App\API\Controllers\TestAuthController;
use App\API\Controllers\UploadImageController;
use App\API\Controllers\Seats\BuySeatController;
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
    Route::post('/register', RegisterVisitorController::class)->name('register');
    Route::post('/login', LoginVisitorController::class)->name('login');
});

Route::prefix('articles')->as('.articles')->group(function () {
    Route::get('/', ArticlesListController::class);
    Route::get('/{id}', ArticleController::class);
    Route::post('/test-create', ArticleTestCreateController::class);
});

Route::prefix('events')->as('.events')->group(function () {
    Route::get('/', EventsListController::class);
    Route::get('/{eventId}/seats', SeatsListAtEventController::class);
    Route::post('/test-create', EventTestCreateController::class);
});

Route::middleware('auth:token')->group(function () {
    Route::prefix('events')->as('.seats')->group(function () {
        Route::prefix('seats')->as('.seats')->group(function () {
            Route::post('/buy', BuySeatController::class);
        });
    });
});

