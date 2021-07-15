@extends('admin.index')
@section('content')
<div class="container">
    <div class="container">
        <div class="container " style="margin-left: 1px">
            <h2>Thêm bài viết về sự kiện </h2>
              @if(session()->has('success'))
                  <div class="alert alert-success">
                      {{ session()->get('success') }}
                  </div>
              @endif
          
              <form method="post" action="{{ route('post_event') }}" enctype="multipart/form-data">
                @csrf
                <div class="form-group">
                    <label>Tittle:</label>
                    <input type="text" name="tittle" />
                  </div>
                <div class="form-group">
                    <div class="form-group">
                        <label>Contents:</label>
                        <input type="text" name="contents" />
                      </div>
                    <div class="form-group">
                        <label>Chọn nhiều tệp:</label>
                    <input type="file" name="images[]" multiple class="form-control" accept="image/*">
                    @if ($errors->has('files'))
                      @foreach ($errors->get('files') as $error)
                      <span class="invalid-feedback" role="alert">
                          <strong>{{ $error }}</strong>
                      </span>
                      @endforeach
                    @endif
                </div>
          
                <div class="form-group">
                  <button type="submit" class="btn btn-success">Save</button>
                </div>
              </form>
          </div>  
    </div>
</div>
 @endsection