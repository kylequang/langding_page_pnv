<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\Buildfoudation;
use App\Models\Mainvalue;
use App\Http\Controllers\Controller;
use App\Models\Payment;
use App\Models\Staff;

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
    public function getdata_ListStaff(){
        $staffs = Staff::all();
        return view('admin.liststaff',compact('staffs'));
    }
    public function getdata_ListDonate(){
        $donate=Payment::all();
        return view('admin.listDonate',compact('donate'));

    }

   
}