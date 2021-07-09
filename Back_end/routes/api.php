<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Buildfoudation_Controller;
use App\Http\Controllers\Mainvalue_Controller;
use App\Http\Controllers\Staff_Controller;
use App\Http\Controllers\Blog_Controller;


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('mainvalue', Mainvalue_Controller::class);
Route::resource('buildfoudation', Buildfoudation_Controller::class);
Route::resource('staff',Staff_Controller::class);
Route::resource('blog',Blog_Controller::class);

