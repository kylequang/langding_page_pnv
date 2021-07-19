<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Http\Controllers\Controller;
class Admincontroller extends Controller
{

    /**
     * Display a listing of the resource.sss
     *
     * @return \Illuminate\Http\Response
     */
    public function postlogin(Request $request)
    {
       $arr=[
           'email'=>$request->email,
           'password'=>$request->password
       ];
        if(Auth::guard('admin')->attempt($arr)){
           
            return redirect('/');
        }
        else{
          
            return redirect()->back();
        }
     
    }
    public function getLogout()
    {
        Auth::guard('admin')->logout();
      
        return redirect()->route('homeadmin');
    }

}