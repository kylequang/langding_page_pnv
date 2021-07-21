<?php

use App\Http\Controllers\Admin\GetData;
use App\Http\Controllers\Buildfoudation_Controller;
use App\Http\Controllers\GetData_Controller;
use App\Http\Controllers\ITNuoiIT;
use App\Http\Controllers\Mainvalue_Controller;
use App\Http\Controllers\Partner_Controller;
use App\Http\Controllers\Staff_Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::resource('mainvalue', Mainvalue_Controller::class);
Route::resource('buildfoudation', Buildfoudation_Controller::class);
Route::resource('staff', Staff_Controller::class);
Route::resource('partners',Partner_Controller::class);

Route::get('itnuoiit',[ITNuoiIT::class,'index']);

Route::get('devmilestone',[GetData_Controller::class,'getdata_devmilestone']);
Route::get('department',[GetData_Controller::class,'getdata_department']);

Route::post('/postForm', [ITNuoiIT::class,'create']);
Route::get('getRecover', [ITNuoiIT::class,'recover']);