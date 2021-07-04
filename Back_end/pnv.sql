create database pnv;
-- drop database pnv;
use pnv;
-- drop database pnv;


-- Tổng quan về PN
create table infor_PN(
	id int auto_increment primary key,
    type_infor varchar(150),
    descriptions varchar(300)
);
-- insert table infor_pn
insert into infor_pn values('','main_value','Những giá trị chính của PNV');
insert into infor_pn values('','dev_milestone','Chặng đường phát triển của PNV');
insert into infor_pn values('','build_foundation','Nền tảng xây dựng dự án của PNV');
select * from infor_PN;

-- bảng về nền tảng xây dựng dự án 
create table build_foundation(
id int auto_increment primary key,
id_PN int,
nameofbuild varchar(100),
descriptions varchar(1000),
FOREIGN KEY (id_PN) REFERENCES infor_PN(id)
);
-- drop table build_foundation;
-- select * from build_foundation;
insert into build_foundation values(' ',3, 'Tầm nhìn' ,'Passerelles numériques đấu tranh cho một thế giới mà những thiếu niên kém may mắn 
có thể bộc lộ được tài năng và ý chí đặt được một cuộc sống tốt hơn nhờ vào giáo dục,
 đào tạo và cơ hội sự nghiệp');
insert into build_foundation values(' ',3, 'Mục Tiêu' ,'Mục tiêu PN là giúp đỡ 90% sinh viên theo học có thể thoát nghèo một cách bền vững, trở thành những nhân viên chuyên nghiệp. PN còn mong muốn hạn chế những bất bình đẳng giới tính. Chính vì vậy, ở mỗi trung tâm của PN, 
chúng tôi luôn nỗ lực để đảm bảo ít nhất 50% ( hoặc tối đa là ⅔) sinh viên nhập học là nữ.');
insert into build_foundation values(' ',3, 'Sứ Mệnh' ,'Sứ mệnh của chúng tôi là tạo điều kiện cho các thanh niên có hoàn cảnhkhó khăn được học hành, được đào tạo chuyên môn và đào tạo kĩ năng trong lĩnh vực kĩ thuật số, đồng thời phát huy tài năng cũng như sức mạnh ý chí của các em, điều này giúp các em và gia đình thoát khỏi đói nghèo một cách bền vững, 
góp phần vào sự phát triển kinh tế xã hội chung của đất nước');

-- bảng về giá trị 
create table  main_value(
	id int auto_increment primary key,
    id_pn int,
    name_value varchar(100),
    descriptions varchar(1000),
    foreign key(id_pn) references infor_PN(id)
);
-- insert bảng giá trị
insert into main_value values('', 1,'Đoàn kết','Cùng thất bại, cùng thành công - Cùng giúp đỡ khi khó khăn');
insert into main_value values('', 1,'Tin Tưởng','Tin vào bản thân, thầy cô và PN - Sẵn sàng chia sẻ để tiến bộ');
insert into main_value values('', 1,'Trách nhiệm','Chịu trách nhiệm với bản thân - Mỗi cá nhân là một hình mẫu cho tập thể');
insert into main_value values('', 1,'Yêu cầu cao','Tinh thần chủ động trong mọi công việc');
insert into main_value values('', 1,'Tôn trọng','Tiên học lễ, hậu học văn');
-- select * from main_value

-- chặng đường phát triển PN
create table dev_milestone(
	id int primary key auto_increment,
    id_pn int,
    times varchar(100),
    contents varchar(1000),
	foreign key (id_pn) references infor_PN(id)
);
-- drop table dev_milestone
-- insert chặng đường phát triển
insert into dev_milestone values('',2,'2005','Thành lập trụ sở chính của PN tại thành phố Paris của nước Pháp');
insert into dev_milestone values('',2,'2006','Thành lập tổ chức phi chính phủ của Pháp mang tên Passerelles numériques');
insert into dev_milestone values('',2,'2007','Lễ tốt nghiệp của 20 sinh viên thuộc niên khóa đầu tiên của PN Campuchia (chuyên ngành Quản trị mạng)');
insert into dev_milestone values('',2,'2009',' Khởi động dự án PN Philippines tại Cebu với 25 em sinh viên.');
insert into dev_milestone values('',2,'2010','Khởi động dự án PN Việt Nam tại Đà Nẵng với 30 em sinh viên');
insert into dev_milestone values('',2,'2012',' Lễ tốt nghiệp niên khóa đầu tiên của PN Philippines (24 sinh viên) và PN Việt Nam (27 sinh viên)');
insert into dev_milestone values('',2,'2013','Thành lập Passerelles numériques Hồng Kông, quỹ từ thiện do các tình nguyện viên sáng lập với mong muốn quảng bá PN và gây quỹ ủng hộ cho dự án.');
insert into dev_milestone values('',2,'2015','Passerelles numériques kỉ niệm 10 năm thành lập! Kể từ năm 2010, PN đã đào tạo miễn phí chương trình Công nghệ thông tin cho hơn 1500 sinh viên.');
insert into dev_milestone values('',2,'2016','Sự ra đời của tổ chức pháp nhân PN SEA (Đông Nam Á) ở Singapore với mục tiêu gây quỹ và nâng cao nhận thức về những hành động của tổ chức Passerelles numériques.');
insert into dev_milestone values('',2,'2020-2022','PNV có 127 sinh viên theo học, PNC có 122 sinh viên, PNP có 205 sinh viên');
-- select * from dev_milestone




















-- bẳng về nguồn nhân lực tạo nên PNV ( Thầy cô , học sinh , cựu sinh viên) 
create table Human_Resources(
id int auto_increment primary key,
type_role varchar(100), -- staff , student, alumni
descriptions varchar(100)
);
insert into Human_Resources values('','staff','Bao gồm các thầy cô, các bác bảo vệ và lao công' );
insert into Human_Resources values('','student','Học sinh 3 khóa');
insert into Human_Resources values('','alumni','Các cựu học sinh khóa trước');
-- select * from Human_Resources;



-- bảng nhân viên ( các team trong PNV)
create table type_staff(
	id int auto_increment primary key,
	id_Human_Resource int,
    type_role varchar(100),
    foreign key (id_Human_Resource) references Human_Resources(id)
);
-- drop table type_staff
insert into type_staff values('',1,'General Manager');
insert into type_staff values('',1,'Selection');
insert into type_staff values('',1,'IT & Training');
insert into type_staff values('',1,'External Relations');
insert into type_staff values('',1,'HR & Finance & Admin');
insert into type_staff values('',1,'Education');
-- select * from type_staff


-- thông tin từng team ( team edu, đối ngoại)
-- drop table staff
create table staff(
	id int auto_increment primary key,
    id_typestaff int,
    name_of_staff varchar(100),
    avatar varchar(100),
    admin_role int,
    descriptions varchar(100),
    foreign key(id_typestaff) references type_staff(id)
);
-- insert General Manager
-- select * from staff
insert into staff values('',1,'Võ Hoàng Thùy Trang',' ',0, 'Giám đốc dự án PNV');
-- Selection
insert into staff values('',2 ,'Đoàn Triệu Thành','',0,'Selection manager');
insert into staff values('',2,'Trần Thị Diệp','',0,'Selection Officer');
-- IT
insert into staff values('',3,'Lucas Sinrod','',0,'IT & Training manager');
insert into staff values('',3,'Trần Thị Thanh Trúc','',0,'IT Trainer');
insert into staff values('',3,'Võ Công Đình','',0,'IT Trainer');
insert into staff values('',3,'Lê Thị Hồng Thủy','',0,'IT Trainer');
insert into staff values('',3,'Vũ Thanh Bình','',0,'IT Admin');
-- English
insert into staff values('',3,'Trần Thị Khánh Uyên','',0,'English Coordinator');
insert into staff values('',3,'Nguyễn Thị Thúy','',0,'English Teacher');
-- PLT
insert into staff values('',3,'Trần Đông Nguyên','',0,'PLT Coordinator');

-- External Relations
insert into staff values('',4,'Huỳnh Thị Kim Oanh','',0,'External Relations Manager');
insert into staff values('',4,'Nguyễn Phước Bảo Trân','',0,'External Relations Officer');
insert into staff values('',4,'Trần Thị Tuyết Ngân','',0,'External Relations Officer');

-- HR & Admin
insert into staff values('',5,'Đặng Nguyễn Uyên Phương','',1,'Admin, HR & Finance Manager');
insert into staff values('',5,'Trần Thị Mỹ Ngọc','',1,'Admin, HR & Finance Officer');
insert into staff values('',5,'Hồ Thị Sô','',0,'Cleaner');
insert into staff values('',5,'Đinh Trường Tam','',0,'Security');
-- Education
insert into staff values('',6,'Châu Mỹ Ngọc','',0,'Education Manager');
insert into staff values('',6,'Nguyễn Long Hải','',0,'Educator');
insert into staff values('',6,'Hồ Thị Ngọc Nhài','',0,'Educator');






-- bẳng tất cả học sinh 
create table type_student(
	id int auto_increment primary key,
	id_Human_Resource int,
    type_role varchar(100),
    course varchar(100),
    foreign key (id_Human_Resource) references Human_Resources(id)
);
-- bẳng từng khóa học sinh
create table students(
	id int auto_increment primary key,
    id_type_student int,
    name_of_student varchar(100),
    foreign key(id_type_student) references type_student(id)
);












-- bảng bài viết
create table blogs(
id int auto_increment primary key,
type_blog varchar(100), -- blog cá nhân, blog sự kiện, blog hoạt động
descriptions varchar(100)
);
-- insert từng thể loại blog
-- select * from blogs
insert into blogs values ('','personal','Những chia sẻ , hoàn cảnh của từng cá nhân');
insert into blogs values ('','event','Sự kiện từ các buổi workshop,thăm công ty');
insert into blogs values ('','activity','Hoạt động của PN, sinh viên');

-- bài viết về cá nhân
create table blog_content(
id int auto_increment primary key,
id_blogs int,
tittle varchar(500),
contents_main varchar(1000),
image_main varchar(1000),
date_time datetime,
foreign key (id_blogs) references blogs(id)
);


-- các nội dung và ảnh của bài viết blog đó
create table album_blog_personal(
id int auto_increment primary key,
id_blog_personal int,
title varchar(500),
image_sub varchar(1000),
contents_sub varchar(1000),
descriptions varchar(1000),
foreign key (id_blog_personal) references blog_personal(id)
);

-- bảng user dùng để cmt bài blog hoặc đăng kí nhận thông tin mới từ PNV
create table users(
id int auto_increment primary key,
fullname varchar(100),
email varchar(100) unique,
avatar varchar(100)
);
-- bình luận( cần biết user và bài viết nào)
create table comments_personal(
	id int auto_increment primary key,
    id_user int,
    id_blog_personal int,
    content varchar(1000),
    data_time datetime, 
    foreign key(id_user) references users(id),
    foreign key(id_blog_personal) references blog_personal(id)
);

-- Thông tin liên hệ với PNV
create table contact(
phoneNumber varchar(100),
email varchar(100),
address varchar(1000)
);
-- drop table contact
-- insert thông tin liên hệ
insert into contact values('+84 236 3888 503',' info.vietnam@passerellesnumeriques.org',
'4th floor, building B,99 To Hien Thanh,Da Nang VIETNAM');
-- select * from contact;





create table donations(
	id int auto_increment primary key,
    fullname varchar(100),
    email varchar(100),
    money float,
    date_time datetime
);



create table event_ITNUOIIT(
id int auto_increment primary key,
contents varchar(10000)
);
