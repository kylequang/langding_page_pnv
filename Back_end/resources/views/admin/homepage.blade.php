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
                <tbody>
                    @foreach($mainvalues as $item)
                    <tr class="odd gradeX" align="center">
                        <td>{{$item->id}}</td>
                        <td>{{$item->name_value}}</td>
                        <td>{{$item->descriptions}}</td>                  
                        <td class="center"><i class="fa fa-trash-o  fa-fw"></i><a href="#"> Delete</a></td>
                        <td class="center"><i class="fa fa-pencil fa-fw"></i> <a href="#">Edit</a></td>
                    </tr>
                    @endforeach                  
                </tbody>
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
                <tbody>
                    @foreach($builde_foundation as $item)
                    <tr class="odd gradeX" align="center">
                        <td>{{$item->id}}</td>
                        <td>{{$item->nameofbuild}}</td>
                        <td>{{$item->descriptions}}</td>                  
                        <td class="center"><i class="fa fa-trash-o  fa-fw"></i><a href="#"> Delete</a></td>
                        <td class="center"><i class="fa fa-pencil fa-fw"></i> <a href="#">Edit</a></td>
                    </tr>
                    @endforeach                  
                </tbody>
            </table>
        </div>
    </div>
   
</div>
@endsection




