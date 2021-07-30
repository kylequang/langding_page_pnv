<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

use Illuminate\Support\Facades\Session;

class Contact_Controller extends Controller
{
   
    public function postInputEmail(Request $req){
     
        $contact= new Contact;
        $email=$req->input('email');
        $contact->email=$req->input('email');
        $contact->name=$req->input('name');
        $contact->content=$req->input('content');  
        $contact->save();
        $name=$req->input('name');
        $conten=$req->input('content');
         $sentData = [
                
                'title' => 'Cảm ơn bạn đã đăng ký nhận thông tin từ chúng tôi:',
                'body' => "Xin chào: $name",
                'body1' => "Bạn đã nhận xét: $conten ",
                'body2' => "Email của bạn: $email ",
            ];
            \Mail::to($email)->send(new \App\Mail\SendEmailContact($sentData));          
    }
}