<?php

use App\Http\Controllers\Buildfoudation_Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Mainvalue_Controller;


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::resource('mainvalue', Mainvalue_Controller::class);
Route::resource('buildfoudation', Buildfoudation_Controller::class);
Route::get('ITnuoiIT', 'App\Http\Controllers\ITnuoiIT_Controller@index');
