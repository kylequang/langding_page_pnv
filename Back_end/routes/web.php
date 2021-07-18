<?php

// use App\Http\Controllers\GetData;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FirebaseController;
use App\Http\Controllers\Admin\GetData;
use App\Http\Controllers\Admin\PostData;



Route::get('firebase',[FirebaseController::class,'index']);


// Route::get('/{path?}' , function () {
//     return view('admin.index');
// })->where('path','.*');


// Route::get('/' , function () {
//     return view('admin.homepage');
// })->name('home');
Route::get('/', [GetData::class,'getdata_home']);
// Route::get('/',[GetData::class,'getdata_home']);

//Route blog
Route::get('/blog_event',function(){
    return view('admin.event');
});
Route::post('post_event',[PostData::class,'post_event'])->name('post_event');