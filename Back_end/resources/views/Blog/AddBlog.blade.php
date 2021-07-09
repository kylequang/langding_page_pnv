<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>test</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
     integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body>
    <div class="container-fluid" >
    <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-4">          
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4" style="margin-top:100px">
            <form action="/upload" method="post"  enctype="multipart/form-data"> 
                <label>Tittle:</label><input type="text" name="tittle" /> <br>
                <label>Content:</label>
                <textarea cols="20" rows="2" name="contents_main"></textarea><br>
                <label>Ảnh:</label>
                <input type="file" name="image_main" accept="image/*">
                <br>
                <button type="submit">Submit</button>
                <a href="/add">add</a>
            </form>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4">

        </div>
    </div>
    </div>
</body>
</html>