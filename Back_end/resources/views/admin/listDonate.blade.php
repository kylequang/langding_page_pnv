@extends('admin.index')
{{-- @include('./css/staff.css') --}}
@section('content')
<div class="container">
    <div class="container">
    <h1>Danh Sách Các Donate tại PNV</h1>
    <!-- Button trigger modal -->

 
  <div class="row">
  Thông tin về tài khoản
    <table class="table table-striped table-bordered table-hover" >
        <thead>
            <tr align="center">
                <th>ID</th>
                <th>Name User</th>
                <th>Money</th>
                <th>Email</th>
                <th>Message</th>
                <th>Phone</th>
                <th>Bank_code <th/>
            </tr>
        </thead>

      
        <tbody>
            @foreach($donate as $payment)
            <tr class="odd gradeX" align="center">     
                <td>{{$payment->id}}</td>                 
                <td> <h4><b>{{$payment->name}}</b></h4></td> 
                <td> <p>{{$payment->money}}</p></td>  
                <td> <h4><b>{{$payment->email}}</b></h4></td> 
                <td> <p>{{$payment->message}}</p></td>  
                <td> <h4><b>{{$payment->phone}}</b></h4></td> 
                <td> <p>{{$payment->bank_code}}</p></td>         
                 
            </tr>
            @endforeach                  
        </tbody>
    </table>
</div>
@endsection

