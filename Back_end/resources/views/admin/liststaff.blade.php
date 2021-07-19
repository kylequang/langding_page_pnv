@extends('admin.index')

@section('content')
<div class="container">
    <div class="container">
        <div class="row">
            Giá Trị
            <table class="table table-striped table-bordered table-hover" >
                <thead>
                    <tr align="center">
                        <th>ID</th>
                        <th>Name Value</th>
                        <th>Description</th>                    
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
              
            </table>
        </div>
        <br>
        <div class="row">
            Nền Tảng Xây Dựng Dự Án
            <table class="table table-striped table-bordered table-hover">
                <thead>
                    <tr align="center">
                        <th>ID</th>
                        <th>Name Of Build</th>
                        <th>Description</th>                    
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
               
            </table>
        </div>
    </div>
   
</div>
@endsection

