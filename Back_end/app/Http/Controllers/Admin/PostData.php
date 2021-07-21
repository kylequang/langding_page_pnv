<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Staff;
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
       dd("hi");         
    }
    /**
     * Display a listing of the resource.sss
     *
     * @return \Illuminate\Http\Response
     */
    public function PostStaff(Request $rq){
        if (!empty($_FILES['avatar'])) {
            $avatar = $this->save_record_image($_FILES['avatar']);
            $staff=new Staff();   
        
       $staff->job=$rq->input('job');
       $staff->name=$rq->input('name');
       $staff->avatar=$avatar['data']['url'];   
       $staff->descriptions=$rq->input('descriptions');
       $staff->admin_role = 0;
      
       $staff->save();
      return redirect()->route('liststaff');
        } 
        else{
            dd("lỗi");
        }
    }
    public function save_record_image($image, $name = null)
    {
        $API_KEY = 'aa7331c2b4ba5acd2c1eadf6487f6a4f';
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, 'https://api.imgbb.com/1/upload?key=' . $API_KEY);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POST, 1);
        $extension = pathinfo($image['name'], PATHINFO_EXTENSION);
        $file_name = ($name) ? $name . '.' . $extension : $image['name'];
        $data = array('image' => base64_encode(file_get_contents($image['tmp_name'])), 'name' => $file_name);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        $result = curl_exec($ch);
        if (curl_errno($ch)) {
            return 'Error:' . curl_error($ch);
            curl_close($ch);
        } else {
            return json_decode($result, true);
            curl_close($ch);
        }
    }
 
}