<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\Buildfoudation;
use App\Models\Mainvalue;
use App\Http\Controllers\Controller;
class GetData extends Controller
{

    /**
     * Display a listing of the resource.sss
     *
     * @return \Illuminate\Http\Response
     */
    public function getdata_home()
    {
        $mainvalues = Mainvalue::all();
        $builde_foundation=Buildfoudation::all();
        return view('admin.homepage',compact('mainvalues','builde_foundation'));      
    }

   
}