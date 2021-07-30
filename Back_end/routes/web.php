<?php

// use App\Http\Controllers\GetData;

use App\Http\Controllers\Admin\Admincontroller;
use App\Http\Controllers\Admin\DeleteData;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Admin\GetData;
use App\Http\Controllers\Admin\PostData;
use App\Http\Middleware\Adminlogin;

// Route::get('/{path?}' , function () {
//     return view('admin.index');
// })->where('path','.*');


// Route::get('/' , function () {
//     return view('admin.homepage');
// })->name('home');

//form login
Route::get('/login',function(){
    return view('admin.login');
})->name('getlogin');

Route::post('login',[Admincontroller::class,'postlogin'])->name('login');
Route::group(['middleware' => Adminlogin::class], function() { 
    Route::get('/', [GetData::class,'getdata_home'])->name('homeadmin');
    Route::get('/logout',[Admincontroller::class,'getLogout'])->name('logout');
    Route::get('/liststaff',[GetData::class,'getdata_ListStaff'])->name('liststaff');
    Route::get('/listdonate',[GetData::class,'getdata_ListDonate'])->name('listdonate');

    Route::post('/poststaff',[PostData::class,'PostStaff']);
    Route::get('deleteStaff/{id}',[DeleteData::class,'deleteStaff']);
   
});