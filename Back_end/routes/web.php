<?php

use App\Http\Controllers\Blog_Controller;
use App\Http\Controllers\ReportsController;
use Illuminate\Support\Facades\Route;

Route::get('/admin' , function () {
        return view('homepage');
    });
Route::get('/admin/AddBlog',function(){
    return view('Blog.AddBlog');
}) ;


// Route::get('/{path?}' , function () {
//     return view('homepage');
// })->where('path','.*');

// Route::resource('admin/addblog',Blog_Controller::class);



