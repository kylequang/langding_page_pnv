<?php

use App\Http\Controllers\Buildfoudation_Controller;
use App\Http\Controllers\ITnuoiIT_Controller;
use App\Http\Controllers\Mainvalue_Controller;
use App\Http\Controllers\Partner_Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::resource('mainvalue', Mainvalue_Controller::class);
Route::resource('buildfoudation', Buildfoudation_Controller::class);
Route::resource('partners',Partner_Controller::class);
Route::get('ITnuoiIT',[ITnuoiIT_Controller::class,'index']);