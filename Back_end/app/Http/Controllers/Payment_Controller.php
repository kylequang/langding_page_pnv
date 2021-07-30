<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\Payment;
class Payment_Controller extends Controller
{
    public function createPayment(Request $request){
    
    
        $payment= new Payment;
        $payment->name=$request->input('your_name');
        $payment->money=$request->input('money');
        $payment->email=$request->input('email');
        $payment->message=$request->input('message');
        $payment->phone=$request->input('phone');
        $payment->bank_code=$request->input('bank_code');
        $payment->save();
        //gửi mail
        if($request->input('email')){
            $namem=$request->input('your_name');
            $contenm=$request->input('message');
            $moneym=$request->input('money');
            $emailm=$request->input('email');
             $sentData = [
                    'title' => 'Cảm ơn bạn đã Donnet cho chúng thôi:',
                    'body' => "CHÚNG TÔI CHÂN THÀNH CẢM ƠN BẠN: $namem",
                    'body1' => "BẠN ĐÃ GỬI LỜI NHẮN ĐẾN CHÚNG TÔI: $contenm ",
                    'body2' => "Bạn đã ủng hộ cho chúng tôi với: $moneym VNĐ ",
                ];
                \Mail::to($emailm)->send(new \App\Mail\SendEmailContact($sentData));         
            }
         
            
        $vnp_Url = "http://sandbox.vnpayment.vn/paymentv2/vpcpay.html"; //env('VNP_URL')
        $vnp_Returnurl = "https://langdingpagepnv.herokuapp.com/api/vnpay_return";  
        $vnp_HashSecret = "AECEMILSTUVPAVHOQKGGBNIDDDITOWYL"; //Chuỗi bí mật lấy từ env cũng được  //env('VNP_HASH_SECRET')
         
        $vnp_TxnRef = date('YmdHis');//Mã đơn hàng. Trong thực tế Merchant cần insert đơn hàng vào DB và gửi mã này sang VNPAY
        $vnp_OrderInfo = $request->input('message');
        // $vnp_OrderType = $_POST['ordertype'];
        $vnp_Amount = $request->input('money') * 100;
        // $vnp_Locale = $_POST['language'];
        $vnp_IpAddr = $_SERVER['REMOTE_ADDR'];
        $inputData = array(
            "vnp_Version" => "2.0.0",
            "vnp_TmnCode" => "W7NUMKCG",
            "vnp_Amount" => $vnp_Amount,
            "vnp_Command" => "pay",
            "vnp_CreateDate" => date('YmdHis'),
            "vnp_CurrCode" => "VND",
            "vnp_IpAddr" => $vnp_IpAddr,
            "vnp_Locale" => "vn",   
            "vnp_OrderInfo" => $vnp_OrderInfo,
            "vnp_ReturnUrl" => $vnp_Returnurl,
            "vnp_TxnRef" => $vnp_TxnRef,    
        );
        ksort($inputData);
        $query = "";
        $i = 0;
        $hashdata = "";
        foreach ($inputData as $key => $value) {
            if ($i == 1) {
                $hashdata .= '&' . $key . "=" . $value;
            } else {
                $hashdata .= $key . "=" . $value;
                $i = 1;
            }
            $query .= urlencode($key) . "=" . urlencode($value) . '&';
        }
         
        $vnp_Url = $vnp_Url . "?" . $query;
        if (isset($vnp_HashSecret)) {
            $vnpSecureHash = hash('sha256',$vnp_HashSecret . $hashdata);
            $vnp_Url .= 'vnp_SecureHashType=SHA256&vnp_SecureHash=' . $vnpSecureHash;
        }
         
         
        return $vnp_Url;
         
            }   
        public function vnpayReturn(Request $request)
            {
                
                    return redirect("https://nerdpasserellesnumeriquesvn.herokuapp.com/");
              
            }
}