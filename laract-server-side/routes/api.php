<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ShopItemController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/item/create', [ShopItemController::class, 'create']);
Route::get('/item/get', [ShopItemController::class, 'index']);
Route::get('/item/{id}', [ShopItemController::class, 'show']);
Route::patch('/item/update/{id}', [ShopItemController::class, 'update']);
Route::delete('/item/delete/{id}', [ShopItemController::class, 'delete']);
