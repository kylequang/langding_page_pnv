<?php

namespace App\Http\Controllers;

use App\Models\Department;
use App\Models\Devmilestone;
use Illuminate\Http\Request;

class GetData_Controller extends Controller
{
  
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getdata_department()
    {
        $department =Department::all();
        return response()->json($department);
    }
    public function getdata_devmilestone(){
        $devmilestone =Devmilestone::all();
        return response()->json($devmilestone);
    }
}