<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\Buildfoudation;
use App\Models\Department;
use App\Models\Devmilestone;
use App\Models\ItNuoiIt;
use App\Models\Mainvalue;
use App\Models\Partner;
use App\Models\Staff;
use Illuminate\Database\Seeder;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        
        $staffs = [
            [
                'job'=>'CEO',
                'name'=>'Võ Hoàng Thùy Trang',
                'avatar'=>'https://i.ibb.co/nDrwnsw/IMG-1177.jpg',
                'descriptions'=>'Giám đốc dự án PNV',
                'admin_role'=>'0'
            ],
            [
                'job'=>'Selection',
                'name'=>'Đoàn Triệu Thành',
                'avatar'=>'https://i.ibb.co/GcgTNP3/logo.png',
                'descriptions'=>'Selection manager',
                'admin_role'=>'0'
            ],
            [
                'job'=>'Selection',
                'name'=>'Trần Thị Diệp',
                'avatar'=>'https://i.ibb.co/VWt7dMp/IMG-1237.jpg',
                'descriptions'=>'Selection Officer',
                'admin_role'=>'0'
            ],
            [
                'job'=>'IT',
                'name'=>'Lucas Sinrod',
                'avatar'=>'https://i.ibb.co/GcgTNP3/logo.png',
                'descriptions'=>'IT & Training manager',
                'admin_role'=>'0'
            ],
            [
                'job'=>'IT',
                'name'=>'Trần Thị Thanh Trúc',
                'avatar'=>'https://i.ibb.co/n04cb9p/IMG-1227.jpg',
                'descriptions'=>'IT Trainer',
                'admin_role'=>'0'
            ],
            [
                'job'=>'IT',
                'name'=>'Võ Công Đình',
                'avatar'=>'https://i.ibb.co/F8pZ8JB/imgpsh-fullsize-anim.jpg',
                'descriptions'=>'IT Trainer',
                'admin_role'=>'0'
            ],
            [
                'job'=>'IT',
                'name'=>'Lê Thị Hồng Thủy',
                'avatar'=>'https://i.ibb.co/jV493WK/IMG-1178.jpg',
                'descriptions'=>'IT Trainer',
                'admin_role'=>'0'
            ],
            [
                'job'=>'IT',
                'name'=>'Vũ Thanh Bình',
                'avatar'=>'https://i.ibb.co/F8pZ8JB/imgpsh-fullsize-anim.jpg',
                'descriptions'=>'IT Admin',
                'admin_role'=>'0'
            ],
            [
                'job'=>'English&PLT',
                'name'=>'Trần Thị Khánh Uyên',
                'avatar'=>'https://i.ibb.co/GCSVZx1/IMG-1226.jpg',
                'descriptions'=>'English Coordinator',
                'admin_role'=>'0'
            ],
            [
                'job'=>'English&PLT',
                'name'=>'Nguyễn Thị Thúy',
                'avatar'=>'https://i.ibb.co/RQT3t5S/IMG-1236.jpg',
                'descriptions'=>'English Teacher',
                'admin_role'=>'0'
            ],
            [
                'job'=>'English&PLT',
                'name'=>'Trần Đông Nguyên',
                'avatar'=>'https://i.ibb.co/CvydDZg/thaynguyen.jpg',
                'descriptions'=>'PLT Coordinator',
                'admin_role'=>'0'
            ],

            [
                'job'=>'External',
                'name'=>'Huỳnh Thị Kim Oanh',
                'avatar'=>'https://i.ibb.co/z57HTjV/IMG-1232.jpg',
                'descriptions'=>'External Relations Manager',
                'admin_role'=>'0'
            ],
            [
                'job'=>'External',
                'name'=>'Nguyễn Phước Bảo Trân',
                'avatar'=>'https://i.ibb.co/dfp7wBC/IMG-1230.jpg',
                'descriptions'=>'External Relations Officer',
                'admin_role'=>'0'
            ],
            [
                'job'=>'External',
                'name'=>'Trần Thị Tuyết Ngân',
                'avatar'=>'https://i.ibb.co/YbdC4yz/IMG-1228.jpg',
                'descriptions'=>'External Relations Officer',
                'admin_role'=>'0'
            ],

            [
                'job'=>'Admin',
                'name'=>'Đặng Nguyễn Uyên Phương',
                'avatar'=>'https://i.ibb.co/MR8f8G9/IMG-1235.jpg',
                'descriptions'=>'Admin, HR & Finance Manager',
                'admin_role'=>'1'
            ],
            [
                'job'=>'Admin',
                'name'=>'Trần Thị Mỹ Ngọc',
                'avatar'=>'https://i.ibb.co/9qymmGy/IMG-1229.jpg',
                'descriptions'=>'Admin, HR & Finance Officer',
                'admin_role'=>'1'
            ],
            [
                'job'=>'Education',
                'name'=>'Châu Mỹ Ngọc',
                'avatar'=>'https://i.ibb.co/7tKGRLH/IMG-1231.jpg',
                'descriptions'=>'Education Manager',
                'admin_role'=>'0'
            ],
            [
                'job'=>'Education',
                'name'=>'Nguyễn Long Hải',
                'avatar'=>'https://i.ibb.co/mzbKKJw/157202100-2491353254507726-95934736152844645-n.jpg',
                'descriptions'=>'Educator',
                'admin_role'=>'0'
            ],
            [
                'job'=>'Education',
                'name'=>'Hồ Thị Ngọc Nhài',
                'avatar'=>'https://i.ibb.co/dD4n7Hx/IMG-1233.jpg',
                'descriptions'=>'Educator',
                'admin_role'=>'0'
            ],                    
        ];
        try {
            foreach ($staffs as $staff) {
                Staff::create($staff);
            }
        } catch (\Throwable $th) {
        }

        $mainvalues=[
            [
                'name_value'=>'Đoàn Kết',
                'descriptions'=>'Cùng thất bại, cùng thành công - Cùng giúp đỡ khi khó khăn',
                'icon'=>'fas fa-universal-access'
            ],
            [
                'name_value'=>'Tin Tưởng',
                'descriptions'=>'Tin vào bản thân, thầy cô và PN - Sẵn sàng chia sẻ để tiến bộ',
                'icon'=>'fas fa-heartbeat'
            ],
            [
                'name_value'=>'Trách Nhiệm',
                'descriptions'=>'Chịu trách nhiệm với bản thân - Mỗi cá nhân là một hình mẫu cho tập thể',
                'icon'=>'far fa-handshake'
            ],
            [
                'name_value'=>'Yêu Cầu Cao',
                'descriptions'=>'Tinh thần chủ động trong mọi công việc',
                'icon'=>'fas fa-user-check'
            ],
            [
                'name_value'=>'Tôn Trọng',
                'descriptions'=>'Tiên học lễ, hậu học văn',
                'icon'=>'fas fa-restroom'
            ],
        ];
        try {
            foreach ($mainvalues as $item) {
                Mainvalue::create($item);
            }
        } catch (\Throwable $th) {
        }

        $foundations=[
            [
            'nameofbuild'=>'Tầm nhìn',
            'descriptions'=>'PNV đấu tranh cho một thế giới mà những thiếu niên kém may mắn có thể bộc lộ được tài năng và ý chí đặt được một cuộc sống tốt hơn nhờ vào giáo dục, đào tạo. ',
            'icon'=>'fas fa-glasses',
            ],
            [
             'nameofbuild'=>'Mục Tiêu',
             'descriptions'=>'Mục tiêu PN là giúp đỡ 90% sinh viên theo học có thể thoát nghèo một cách bền vững, trở thành những nhân viên chuyên nghiệp. PN còn mong muốn hạn chế những bất bình đẳng giới tính. ',
             'icon'=>'fas fa-bullseye',
             ],
            [
                'nameofbuild'=>'Sứ Mệnh',
                'descriptions'=>'Sứ mệnh của chúng tôi là tạo điều kiện cho các thanh niên có hoàn cảnh khó khăn được học hành, được đào tạo chuyên môn và đào tạo kĩ năng trong lĩnh vực kĩ thuật số.',
                'icon'=>'fas fa-american-sign-language-interpreting',
            ],

                ];
        try {
            foreach ($foundations as $item) {
                Buildfoudation::create($item);
            }
        } catch (\Throwable $th) {
        }

        $patners=[
            [
                'name'=>'DANAVTC',
                'img'=>'https://i.ibb.co/xDFGfkK/DVT.png',
                'description'=>'PN Vietnam students have started studying in Danang Vocational Training College (DANAVTC) since Sept.'
            ],
            [
                'name'=>'ENOVOU',
                'img'=>'https://i.ibb.co/8KJtjV1/Enouvo.png',
                'description'=>'ENOUVO is a GROUP of INNOVATORS who desire to improve the quality of life through Technology and Con.'
            ],
            [
                'name'=>'FondationAmanjaya',
                'img'=>'https://i.ibb.co/bj4NY98/Fondation-Amanjaya.png',
                'description'=>'ENOUVO is a GROUP of INNOVATORS who desire to improve the quality of life through Technology and Con.'
            ],
            [
                'name'=>'J.P.Morgan',
                'img'=>'https://i.ibb.co/drt1ddy/J-P-Morgan.jpg',
                'description'=>'ENOUVO is a GROUP of INNOVATORS who desire to improve the quality of life through Technology and Con.'
            ],
            [
                'name'=>'KMS-Technology',
                'img'=>'https://i.ibb.co/09rXJX8/KMS-Technology.png',
                'description'=>'ENOUVO is a GROUP of INNOVATORS who desire to improve the quality of life through Technology and Con.'
            ],
            [
                'name'=>'Microsoft',
                'img'=>'https://i.ibb.co/nMRfJg9/microsoft.jpg',
                'description'=>'ENOUVO is a GROUP of INNOVATORS who desire to improve the quality of life through Technology and Con.'
            ], [
                'name'=>'Thales',
                'img'=>'https://i.ibb.co/M7Xb3c0/Thales.jpg',
                'description'=>'ENOUVO is a GROUP of INNOVATORS who desire to improve the quality of life through Technology and Con.'
            ], [
                'name'=>'LeKhanh Tech',
                'img'=>'https://i.ibb.co/ft836gx/Le-Khanh-Tech.png',
                'description'=>'ENOUVO is a GROUP of INNOVATORS who desire to improve the quality of life through Technology and Con.'
            ]
            ];
        try {
            foreach ($patners as $item) {
                Partner::create($item);
            }
        } catch (\Throwable $th) {
        }

        $devs=[
            [
              'time'=> '2005',
            'contents'=>'Thành lập trụ sở chính của PN tại thành phố Paris của nước Pháp.'
            ],
            [
                'time'=> '2006',
              'contents'=>'Thành lập tổ chức phi chính phủ của Pháp mang tên Passerelles numériques.'
              ],
              [
                'time'=> '2007',
              'contents'=>'Lễ tốt nghiệp của 20 sinh viên thuộc niên khóa đầu tiên của PN Campuchia (chuyên ngành Quản trị mạng).'
              ],
              [
                'time'=> '2009',
              'contents'=>'Khởi động dự án PN Philippines tại Cebu với 25 em sinh viên.'
              ],
              [
                'time'=> '2010',
              'contents'=>'Khởi động dự án PN Việt Nam tại Đà Nẵng với 30 em sinh viên.'
              ],
              [
                'time'=> '2012',
              'contents'=>'Lễ tốt nghiệp niên khóa đầu tiên của PN Philippines (24 sinh viên) và PN Việt Nam (27 sinh viên).'
              ],
              [
                'time'=> '2013',
              'contents'=>'Thành lập Passerelles numériques Hồng Kông, quỹ từ thiện do các tình nguyện viên sáng lập với mong muốn quảng bá PN và gây quỹ ủng hộ cho dự án.'
              ],
              [
                'time'=> '2015',
              'contents'=>'Passerelles numériques kỉ niệm 10 năm thành lập! Kể từ năm 2010, PN đã đào tạo miễn phí chương trình Công nghệ thông tin cho hơn 1500 sinh viên.'
              ],
              [
                'time'=> '2016',
              'contents'=>'Sự ra đời của tổ chức pháp nhân PN SEA (Đông Nam Á) ở Singapore với mục tiêu gây quỹ và nâng cao nhận thức về những hành động của tổ chức Passerelles numériques.'
              ],
              [
                'time'=> '2020-2022',
              'contents'=>'PNV có 127 sinh viên theo học, PNC có 122 sinh viên, PNP có 205 sinh viên.'
              ],
            ];
        try {
            foreach ($devs as $item) {
                Devmilestone::create($item);
            }
        } catch (\Throwable $th) {
        }    


        $admins=[
            [
                'name'=>'tranthimyngoc',
                'email'=>'',
                'password'=>bcrypt('123'),
                'role'=>1
            ],
            [
                'name'=>'dangnguyenuyenphuong',
                'email'=>'',
                'password'=>bcrypt('123'),
                'role'=>1
            ],
            [
                'name'=>'kylequang',
                'email'=>'ky.le22@student.passerellesnumeriques.org',
                'password'=>bcrypt('123'),
                'role'=>1
            ],
            [
                'name'=>'admin',
                'email'=>'admin@gmail.com',
                'password'=>bcrypt('123'),
                'role'=>1
            ],
        ];
        try {
            foreach ($admins as $item) {
                Admin::create($item);
            }
        } catch (\Throwable $th) {
        }  
        
        $itnuoiits=[
            [
                'image'=>'https://i.ibb.co/0C866Yn/donate.jpg',
                'content'=>'Quỹ hoạt động của PN đến từ Grant của các tập đoàn lớn',
                'type'=>'donate'
            ],
            [
                'image'=>'https://i.ibb.co/HN76B7F/benefit1.png',
                'content'=>'Giấy chứng nhận đã tham gia chương trình IT nuôi IT',
                'type'=>'benefit'
            ],
            [
                'image'=>'https://i.ibb.co/LkZ0mPj/benefit2.png',
                'content'=>'Thư cập nhật thông tin chuyển khoản hàng tháng',
                'type'=>'benefit'
            ],
            [
                'image'=>'https://i.ibb.co/gmq9JCM/benefit3.jpg',
                'content'=>'Thăm trường PNV và các em sinh viên',
                'type'=>'benefit'
            ],
            
        ];
        try {
            foreach ($itnuoiits as $item) {
                ItNuoiIt::create($item);
            }
        } catch (\Throwable $th) {
        }  


        $departs=[
            ['nameDepartment'=>'Phòng tuyển sinh',
            'descriptionst'=>'Phòng Tuyển sinh có chức năng Xây dựng, lập kế hoạch và tổ chức các hoạt động liên quan đến tuyển sinh . Tìm kiếm những học sinh có hoàn cảnh khó khăn không có khả năng học tập. ',
            'icon'=>'null',
            'number'=>'2 thành viên',
            'image'=>'null',
            ],

            ['nameDepartment'=>'Phòng đào tạo',
             'descriptionst'=>'Xây dựng, phát triển, quản lý chương trình đào tạo và các hoạt động giảng dạy . Tham mưu hoạch định chiến lược phát triển đào tạo. Theo dõi quá trình giảng dạy, học tập và kết quả học tập.',
             'icon'=>'null',
             'number'=>'11 thành viên',
             'image'=>'null',
             ],

            ['nameDepartment'=>'Phòng đối ngoại',          
             'descriptionst'=>'Xây dựng mục tiêu và kế hoạch tuyên truyền, quảng bá hình ảnh, phát triển thương hiệu và hình ảnh của Trường. Chủ động tìm kiếm, tìm hiểu các tổ chức, cá nhân có năng lực, và thiện chí để hợp tác.',
            'icon'=>'null',
            'number'=>' 3 thành viên',  
            'image'=>'null',   
            ],

            [
                'nameDepartment'=>'Phòng nhân sự & tài chính',          
                'descriptionst'=>'Công việc của phòng nhân sự & tài chính là các hoạt động tuyển dụng, lên kế hoạch triển khai các chính sách phù hợp để duy trì nguồn nhân lực cho trường và quản lý tài chính.',
                'icon'=>'null',
                'number'=>' 3 thành viên',
                'image'=>'null',     
            ],

            [
                'nameDepartment'=>'Phòng giáo dục',          
                'descriptionst'=>'Quản lý đời sống của sinh viên. Lên kế hoạch các chương trình kỹ năng đời sống. Gỉai quyết những vấn đề ở ktx và hỗ trợ đời sống tinh thần cho sinh viên',
                'icon'=>'null',
                'number'=>' 4 thành viên',
                'image'=>'null',     
            ],
        ];
            try {
                foreach ($departs as $item) {
                    Department::create($item);
                }
            } catch (\Throwable $th) {
            }  
    }
}