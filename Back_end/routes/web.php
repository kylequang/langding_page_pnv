<?php

// use App\Http\Controllers\GetData;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\GetData;
// Route::get('/{path?}' , function () {
//     return view('admin.index');
// })->where('path','.*');


// Route::get('/' , function () {
//     return view('admin.homepage');
// })->name('home');
Route::get('/', [GetData::class,'getdata_home']);
// Route::get('/',[GetData::class,'getdata_home']);