<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="IT nuôi IT" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous">
    </script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous">
    </script>
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
    <style>
        .title {
            color: dodgerblue;
        }

        .link-button {
            color: white;
            background-color: darkturquoise;
            border-radius: 5%;
        }

    </style>

</head>

<body>
    <div class="container">
        <img src="image/ItNuoiIt/logo.png" alt="">
        <h3>{{ $data['name'] }} thương mến,</h3>
        <h3>Passerelles numériques Việt Nam trân trọng cảm ơn sự hỗ trợ của bạn cho các em sinh viên thông qua chương
            trình #ITnuoiIT. Sau đây là thông tin về các bước hướng dẫn chuyển khoản:</h3>
        <ul>
            <h3 class="title">1. Mã code của bạn là: {{ $data['code'] }}</h3>
            <li>Bạn vui lòng ghi nhớ mã code của mình để tránh trường hợp cập nhật sai thông tin chuyển khoản.</li>
            <li>Trong trường hợp bạn quên mã code của mình, vui lòng xem lại các thông tin
                <a href="">tại đây.</a>
            </li>
        </ul>
        <ul>
            <h3 class="title">2. Hình thức đóng góp:</h3>
            <li>Đóng góp bằng cách chuyển khoản qua tài khoản ngân hàng.</li>
        </ul>
        <h3 class="title">Thông tin tài khoản:</h3>
        <p>Ngân hàng Kỹ thương Việt Nam Techcombank</p>
        <p>Tên tài khoản: PASSERELLES NUMERIQUES(PN)</p>
        <p>Số tài khoản: 19134608156019</p>
        <p>Cú pháp chuyển khoản: ITnuoiIT Mã hỗ trợ (Ví dụ: ITnuoiIT DNTT001)</p>
        <h3 class="title">3. Về thủ tục sau khi đăng ký tham gia chương trình #ITnuoiIT:</h3>
        <p>Sau khi chuyển khoản tiền hỗ trợ vào tài khoản của PNV, trong vòng 48 giờ tiếp theo,
            <br /> bạn sẽ nhận được thông báo chính thức về việc trở thành thành viên của chương trình #ITnuoiIT, thuộc
            dự án #DANANGTUTE.
        </p>
        <ul>
            <li>Nhận giấy chứng nhận từ PNV</li>
            <li>Nhận báo cáo tài chính của dự án hàng tháng</li>
            <li>Quyền được tham gia các chương trình đào tạo phát triển bản thân do PNV tổ chức
            </li>
        </ul>
        <a href="https://www.facebook.com/groups/danangtute" class="link-button"><button type="button"
                class="btn btn-primary">Tham gia
                Group #DANANGTUTE</button></a>
    </div>
</body>
</html>
