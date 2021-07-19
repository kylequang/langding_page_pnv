<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Adminlogin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
   
    {
      
        if(Auth::guard('admin')->check() ){           
             $admin=Auth::guard('admin')->user();
        if($admin->role1=1){       
            return $next($request);
        }
        else {
            return redirect()->route('getlogin');
        }
    }
    else {
        return redirect()->route('getlogin');
    }
    }
}