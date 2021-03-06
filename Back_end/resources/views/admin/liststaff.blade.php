@extends('admin.index')
{{-- @include('./css/staff.css') --}}
@section('content')
<div class="container">
    <div class="container">
    <h1>Danh Sách Các Staff tại PNV</h1>
    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
    Thêm
  </button>
 
  <div class="row">
   Các Staff tại PNV
    <table class="table table-striped table-bordered table-hover" >
        <thead>
            <tr align="center">
                <th>ID</th>
                <th>Avatar</th>
                <th>Name</th>
                <th>Description</th>
                <th>Xóa</th>
            </tr>
        </thead>
        <tbody>
            @foreach($staffs as $staff)
            <tr class="odd gradeX" align="center">     
                <td>{{$staff->id}}</td>   
                <td> <img src={{$staff->avatar}} alt="Avatar" style="height:200px;width:200px"></td>
                <td> <h4><b>{{$staff->name}}</b></h4></td> 
                <td> <p>{{$staff->descriptions}}</p></td>          
                <td> <a href="deleteStaff/{{$staff->id}}">Xóa</a></td>         
            </tr>
            @endforeach                  
        </tbody>
    </table>
</div>
</div>
  <!-- Modal -->
  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalCenterTitle"> Add Staff</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <form method="post" action='poststaff' enctype="multipart/form-data">
                @csrf
                <div class="form-group" >
                  <label for="exampleInputEmail1">Full Name:</label>
                  <input required type="text" name='name' class="form-control"  aria-describedby="name" placeholder="Enter full name">
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Job:</label>
                  <input required type="text" name='job' class="form-control"  placeholder="Edu or PLT ...">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Descriptions:</label>
                    <input required type="text" name='descriptions' class="form-control"  placeholder="description ....">
                  </div>
                  <div class="form-group">
                    <label for="avatar">Avatar:</label>
                    <input required type="file" name='avatar' class="form-control">
                  </div>      
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
      </div>
    </div>
  </div>
@endsection

