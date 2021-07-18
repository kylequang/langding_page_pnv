<?php

namespace Database\Seeders;

use App\Models\Buildfoudation;
use App\Models\Devmilestone;
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
                'avatar'=>'null',
                'descriptions'=>'Giám đốc dự án PNV',
                'admin_role'=>'0'
            ],
            [
                'job'=>'Selection',
                'name'=>'Đoàn Triệu Thành',
                'avatar'=>'null',
                'descriptions'=>'Selection manager',
                'admin_role'=>'0'
            ],
            [
                'job'=>'IT',
                'name'=>'Lucas Sinrod',
                'avatar'=>'null',
                'descriptions'=>'IT & Training manager',
                'admin_role'=>'0'
            ],
            [
                'job'=>'IT',
                'name'=>'Trần Thị Thanh Trúc',
                'avatar'=>'null',
                'descriptions'=>'IT Trainer',
                'admin_role'=>'0'
            ],
            [
                'job'=>'IT',
                'name'=>'Võ Công Đình',
                'avatar'=>'null',
                'descriptions'=>'IT Trainer',
                'admin_role'=>'0'
            ],
            [
                'job'=>'IT',
                'name'=>'Lê Thị Hồng Thủy',
                'avatar'=>'null',
                'descriptions'=>'IT Trainer',
                'admin_role'=>'0'
            ],
            [
                'job'=>'IT',
                'name'=>'Vũ Thanh Bình',
                'avatar'=>'null',
                'descriptions'=>'IT Admin',
                'admin_role'=>'0'
            ],
            [
                'job'=>'IT',
                'name'=>'Vũ Thanh Bình',
                'avatar'=>'null',
                'descriptions'=>'IT Admin',
                'admin_role'=>'0'
            ],


            [
                'job'=>'English&PLT',
                'name'=>'Trần Thị Khánh Uyên',
                'avatar'=>'null',
                'descriptions'=>'English Coordinator',
                'admin_role'=>'0'
            ],
            [
                'job'=>'English&PLT',
                'name'=>'Nguyễn Thị Thúy',
                'avatar'=>'null',
                'descriptions'=>'English Teacher',
                'admin_role'=>'0'
            ],
            [
                'job'=>'English&PLT',
                'name'=>'Trần Đông Nguyên',
                'avatar'=>'null',
                'descriptions'=>'PLT Coordinator',
                'admin_role'=>'0'
            ],

            [
                'job'=>'External',
                'name'=>'Huỳnh Thị Kim Oanh',
                'avatar'=>'null',
                'descriptions'=>'External Relations Manager',
                'admin_role'=>'0'
            ],
            [
                'job'=>'External',
                'name'=>'Nguyễn Phước Bảo Trân',
                'avatar'=>'null',
                'descriptions'=>'External Relations Officer',
                'admin_role'=>'0'
            ],
            [
                'job'=>'External',
                'name'=>'Trần Thị Tuyết Ngân',
                'avatar'=>'null',
                'descriptions'=>'External Relations Officer',
                'admin_role'=>'0'
            ],

            [
                'job'=>'Admin',
                'name'=>'Đặng Nguyễn Uyên Phương',
                'avatar'=>'null',
                'descriptions'=>'Admin, HR & Finance Manager',
                'admin_role'=>'1'
            ],
            [
                'job'=>'Admin',
                'name'=>'Trần Thị Mỹ Ngọc',
                'avatar'=>'null',
                'descriptions'=>'Admin, HR & Finance Officer',
                'admin_role'=>'1'
            ],
            [
                'job'=>'Education',
                'name'=>'Châu Mỹ Ngọc',
                'avatar'=>'null',
                'descriptions'=>'Education Manager',
                'admin_role'=>'0'
            ],
            [
                'job'=>'Education',
                'name'=>'Nguyễn Long Hải',
                'avatar'=>'null',
                'descriptions'=>'Educator',
                'admin_role'=>'0'
            ],
            [
                'job'=>'Education',
                'name'=>'Hồ Thị Ngọc Nhài',
                'avatar'=>'null',
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
                'name_value'=>'Đoàn kết',
                'descriptions'=>'Cùng thất bại, cùng thành công - Cùng giúp đỡ khi khó khăn',
                'icon'=>'fas fa-universal-access'
            ],
            [
                'name_value'=>'Tin Tưởng',
                'descriptions'=>'Tin vào bản thân, thầy cô và PN - Sẵn sàng chia sẻ để tiến bộ',
                'icon'=>'fas fa-heartbeat'
            ],
            [
                'name_value'=>'Trách nhiệm',
                'descriptions'=>'Chịu trách nhiệm với bản thân - Mỗi cá nhân là một hình mẫu cho tập thể',
                'icon'=>'far fa-handshake'
            ],
            [
                'name_value'=>'Yêu cầu cao',
                'descriptions'=>'Tinh thần chủ động trong mọi công việc',
                'icon'=>'fas fa-user-check'
            ],
            [
                'name_value'=>'Tôn trọng',
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
            'descriptions'=>'Passerelles numériques đấu tranh cho một thế giới mà những thiếu niên kém may mắn \r\ncó thể bộc lộ được tài năng và ý chí đặt được một cuộc sống tốt hơn nhờ vào giáo dục,\r\n đào tạo. ',
            'icon'=>'fas fa-glasses',
            ],
            [
             'nameofbuild'=>'Mục Tiêu',
             'descriptions'=>'Mục tiêu PN là giúp đỡ 90% sinh viên theo học có thể thoát nghèo một cách bền vững, trở thành những nhân viên chuyên nghiệp. PN còn mong muốn hạn chế những bất bình đẳng giới tính. ',
             'icon'=>'fas fa-bullseye',
             ],
            [
                'nameofbuild'=>'Sứ Mệnh',
                'descriptions'=>'Sứ mệnh của chúng tôi là tạo điều kiện cho các thanh niên có hoàn cảnhkhó khăn được học hành, được đào tạo chuyên môn và đào tạo kĩ năng trong lĩnh vực kĩ thuật số.',
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
                'img'=>'DVT.png',
                'description'=>'PN Vietnam students have started studying in Danang Vocational Training College (DANAVTC) since Sept.'
            ],
            [
                'name'=>'ENOVOU',
                'img'=>'Enouvo.png',
                'description'=>'ENOUVO is a GROUP of INNOVATORS who desire to improve the quality of life through Technology and Con.'
            ],
            [
                'name'=>'FondationAmanjaya',
                'img'=>'FondationAmanjaya.png',
                'description'=>'ENOUVO is a GROUP of INNOVATORS who desire to improve the quality of life through Technology and Con.'
            ],
            [
                'name'=>'J.P.Morgan',
                'img'=>'J.P.Morgan.jpg',
                'description'=>'ENOUVO is a GROUP of INNOVATORS who desire to improve the quality of life through Technology and Con.'
            ],
            [
                'name'=>'KMS-Technology',
                'img'=>'KMS-Technology.png',
                'description'=>'ENOUVO is a GROUP of INNOVATORS who desire to improve the quality of life through Technology and Con.'
            ],
            [
                'name'=>'Microsoft',
                'img'=>'microsoft.jpg',
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


    }
}