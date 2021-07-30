<?php


use App\Http\Controllers\Buildfoudation_Controller;
use App\Http\Controllers\GetData_Controller;
use App\Http\Controllers\ITNuoiIT;
use App\Http\Controllers\Mainvalue_Controller;
use App\Http\Controllers\Partner_Controller;
use App\Http\Controllers\Staff_Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Contact_Controller;

use App\Http\Controllers\Payment_Controller;



Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

 
Route::post('mailcontact',[Contact_Controller::class,'postInputEmail']);


Route::resource('mainvalue', Mainvalue_Controller::class);
Route::resource('buildfoudation', Buildfoudation_Controller::class);
Route::resource('staff', Staff_Controller::class);
Route::resource('partners',Partner_Controller::class);

Route::get('itnuoiit',[ITNuoiIT::class,'index']);
Route::get('devmilestone',[GetData_Controller::class,'getdata_devmilestone']);
Route::get('department',[GetData_Controller::class,'getdata_department']);
Route::get('sharing',[GetData_Controller::class,'getdata_Sharing']);


Route::post('/postForm', [ITNuoiIT::class,'create']);
Route::get('getRecover', [ITNuoiIT::class,'recover']);



//Thanh toán 
Route::post('create_payment',[Payment_controller::class,'createPayment']);
Route::get('/vnpay_return',[Payment_controller::class,'vnpayReturn'])->name('vnpayReturn');