<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PostData extends Controller
{
     /**
     * Display a listing of the resource.sss
     *
     * @return \Illuminate\Http\Response
     */
    public function post_event(Request $request)
    {
        $request->validate([
            'images' => 'required',
          ]);
  
          if ($request->hasfile('images')) {
              $images = $request->file('images');
  
              foreach($images as $image) {
                  $name = $image->getClientOriginalName();
                  $path = $image->storeAs('uploads', $name, 'public');
  
                  
                  Image::create([
                      'name' => $name,
                      'path' => '/storage/'.$path
                    ]);
              }
           }
  
          return back()->with('success', 'Images uploaded successfully');
        
             
    }
}