<?php

namespace Tests\Feature;

use App\Models\Mainvalue;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

use Illuminate\Testing\Fluent\AssertableJson;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\UploadedFile;
use Illuminate\Foundation\Testing\WithoutMiddleware;

class ExampleTest extends TestCase
{
     //Test view hiển thị nội dung
     public function test_a_welcome_view_can_be_rendered()
     {   
         $view = $this->view('homepage');
         //trả về true nếu tìm thấy chuỗi trong view.... (toàn bộ code của view)
         // $view->assertSee('kỳ');
        
         $view->assertSee('app');
         //$view->assertSee("kỳ nè");
         //nội dung hiển thị trong view
         //$view->assertSeeText("thầy đình"); //thấy bại vì ko tìm thấy đoạn text này trong view homapage
         //$view->assertSeeText("kỳ");
         // $view->assertDontSeeText("app");//true khi không tìm thấy 
         $view=$this->view('Admin.index');
         $test='file';
         $view->assertSee($test);


        //  $view=$this->view('Admin.homepage');

         
        $response = $this->get('/');
        //$this->assertContains('mainvalues', $response->content());
        $response->assertViewHas('mainvalues');
        //$response->assertSee('Mainvalue');
        //$response->assertSee('âsas ');
     }
     public function test_making_an_api_request()
     {
         //Test method Get
         $response = $this->json('GET', 'http://localhost:8000/api/mainvalue/1');
 

         $dt=Mainvalue::findOrfail(1);
         
         //kiểm tra trôi chảy các phản hồi JSON của ứng dụng của bạn
         $response->assertJson(fn (AssertableJson $data) =>
                 $data->where('id',$dt->id)
                     //->where('id_pn',1)
                      ->where('name_value', $dt->name_value)
                      //->where('descriptions', "Cùng thất bại, cùng thành công - Cùng giúp đỡ khi khó khăn")
                      ->etc() // dùng khi ko cần truy xuất hết và bảo vệ thông tin 
             );  
 
             $response->assertJson(fn (AssertableJson $json) =>
             $json->whereType('id', 'integer')
                 //->whereType('id', 'string')
                  ->whereAllType([
                     'name_value' => [ 'string','integer'], 
                     'descriptions'=>['string'] 
                 ])
                  ->etc()
         );
     }
 
 
     //Test route in laravel
     public function test_interacting_with_route_in_laravel()
     {
         $i=0;
         $route=[];
         $route[$i++]=$this->addroute('/'); 
        //  $route[$i++]=$this->addroute('/admin/AddBlog');
       foreach($route as $value){    
             $value->assertStatus(200);
      }         
     }
     public function addroute($route){
         return $this->get($route);
     }
}