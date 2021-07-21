<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Staff;
class DeleteData extends Controller
{
    public function deleteStaff($id){
        
        $staff=Staff::findOrfail($id);
        $staff->delete();
        return redirect()->route('liststaff');
    }
}