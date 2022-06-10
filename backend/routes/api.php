<?php

use App\API\Controllers\DocumentationController;
use App\API\Controllers\NewsIndexController;
use App\API\Controllers\NewsStoreController;
use App\API\Controllers\RegisterController;
use App\API\Controllers\UploadImageController;
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

//Route::prefix('auth')->as('auth.')->group(function () {
//    Route::post('register', RegisterController::class)->name('register');
//});

Route::prefix('news')->as('.news')->group(function () {
    Route::get('/index', NewsIndexController::class);
    Route::post('/store', NewsStoreController::class);
});

Route::middleware('auth:token')->group(function () {

});



Route::prefix('auth')->group(function () {
    Route::post('/token', RegisterController::class);
});
