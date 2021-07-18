-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th7 16, 2021 lúc 03:58 AM
-- Phiên bản máy phục vụ: 10.4.18-MariaDB
-- Phiên bản PHP: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `pnv_project`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `album_blog_subcontent`
--

CREATE TABLE `album_blog_subcontent` (
  `id` int(11) NOT NULL,
  `id_blog_content` int(11) DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL,
  `image_sub` varchar(1000) DEFAULT NULL,
  `contents_sub` varchar(1000) DEFAULT NULL,
  `descriptions` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `blogs`
--

CREATE TABLE `blogs` (
  `id` int(11) NOT NULL,
  `type_blog` varchar(100) DEFAULT NULL,
  `descriptions` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `blogs`
--

INSERT INTO `blogs` (`id`, `type_blog`, `descriptions`) VALUES
(1, 'personal', 'Những chia sẻ , hoàn cảnh của từng cá nhân'),
(2, 'event', 'Sự kiện từ các buổi workshop,thăm công ty'),
(3, 'activity', 'Hoạt động của PN, sinh viên');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `blog_content`
--

CREATE TABLE `blog_content` (
  `id` int(11) NOT NULL,
  `id_blogs` int(11) DEFAULT NULL,
  `tittle` varchar(500) DEFAULT NULL,
  `contents_main` varchar(1000) DEFAULT NULL,
  `image_main` varchar(1000) DEFAULT NULL,
  `date_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `blog_content`
--

INSERT INTO `blog_content` (`id`, `id_blogs`, `tittle`, `contents_main`, `image_main`, `date_time`) VALUES
(1, 1, 'Em đã chọn nói không', '\nH. đã chọn nói không với định kiến về việc con gái đủ tuổi thì nên lấy chồng để làm tròn đạo hiếu. \nH. đã chọn nói không với suy nghĩ nghèo thì không cần học nhiều, nghỉ ở nhà phụ bố mẹ đi làm nuôi em.\nVà H. chọn nói không với việc từ bỏ giấc mơ của mình, giấc mơ được thay đổi cuộc sống.\nH. là người đồng bào Vân Kiều, được sinh ra và lớn lên tại một vùng núi thuộc huyện Hưng Hóa, tỉnh Quảng Trị.\n Gia đình em gồm có 8 người, bố mẹ, 2 anh trai, 3 em gái. Cả nhà H. đều phụ thuộc vào nương sắn để mưu sinh.\n Mỗi năm, sắn chỉ được thu hoạch một lần. Có những năm sắn không thu hoạch được thì cả nhà đều phải chịu đói. \n Bố mẹ phải đi vay hàng xóm từng lon gạo cho anh chị em H. có cái ăn. \nCó những lúc, hàng xóm không có gạo, cả gia đình đều phải nhịn cả ngày.  \nNhiều lúc nghe bố mẹ cãi nhau vì miếng cơm hằng ngày, H. bật khóc. “Em cảm thấy bất lực và tuyệt vọng, \nvì em không thể làm gì để phụ giúp cho bố mẹ”, H. chia sẻ. \nCô gái nhỏ bé ấy dù phải chật vật với cái ăn hàng ngày \nnhưng lúc nào c', 'ảnh minh họa', '2021-07-09 11:03:50');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `build_foundation`
--

CREATE TABLE `build_foundation` (
  `id` int(11) NOT NULL,
  `id_PN` int(11) DEFAULT NULL,
  `nameofbuild` varchar(100) DEFAULT NULL,
  `descriptions` varchar(1000) DEFAULT NULL,
  `icon` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `build_foundation`
--

INSERT INTO `build_foundation` (`id`, `id_PN`, `nameofbuild`, `descriptions`, `icon`) VALUES
(1, 3, 'Tầm nhìn', 'Passerelles numériques đấu tranh cho một thế giới mà những thiếu niên kém may mắn \r\ncó thể bộc lộ được tài năng và ý chí đặt được một cuộc sống tốt hơn nhờ vào giáo dục,\r\n đào tạo ', 'fas fa-glasses'),
(2, 3, 'Mục Tiêu', 'Mục tiêu PN là giúp đỡ 90% sinh viên theo học có thể thoát nghèo một cách bền vững, trở thành những nhân viên chuyên nghiệp. PN còn mong muốn hạn chế những bất bình đẳng giới tính.', 'fas fa-bullseye'),
(3, 3, 'Sứ Mệnh', 'Sứ mệnh của chúng tôi là tạo điều kiện cho các thanh niên có hoàn cảnhkhó khăn được học hành, được đào tạo chuyên môn và đào tạo kĩ năng trong lĩnh vực kĩ thuật số.', 'fas fa-american-sign-language-interpreting');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comments_personal`
--

CREATE TABLE `comments_personal` (
  `id` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_blog_content` int(11) DEFAULT NULL,
  `content` varchar(1000) DEFAULT NULL,
  `data_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `dev_milestone`
--

CREATE TABLE `dev_milestone` (
  `id` int(11) NOT NULL,
  `id_pn` int(11) DEFAULT NULL,
  `times` varchar(100) DEFAULT NULL,
  `contents` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `dev_milestone`
--

INSERT INTO `dev_milestone` (`id`, `id_pn`, `times`, `contents`) VALUES
(1, 2, '2005', 'Thành lập trụ sở chính của PN tại thành phố Paris của nước Pháp'),
(2, 2, '2006', 'Thành lập tổ chức phi chính phủ của Pháp mang tên Passerelles numériques'),
(3, 2, '2007', 'Lễ tốt nghiệp của 20 sinh viên thuộc niên khóa đầu tiên của PN Campuchia (chuyên ngành Quản trị mạng)'),
(4, 2, '2009', ' Khởi động dự án PN Philippines tại Cebu với 25 em sinh viên.'),
(5, 2, '2010', 'Khởi động dự án PN Việt Nam tại Đà Nẵng với 30 em sinh viên'),
(6, 2, '2012', ' Lễ tốt nghiệp niên khóa đầu tiên của PN Philippines (24 sinh viên) và PN Việt Nam (27 sinh viên)'),
(7, 2, '2013', 'Thành lập Passerelles numériques Hồng Kông, quỹ từ thiện do các tình nguyện viên sáng lập với mong muốn quảng bá PN và gây quỹ ủng hộ cho dự án.'),
(8, 2, '2015', 'Passerelles numériques kỉ niệm 10 năm thành lập! Kể từ năm 2010, PN đã đào tạo miễn phí chương trình Công nghệ thông tin cho hơn 1500 sinh viên.'),
(9, 2, '2016', 'Sự ra đời của tổ chức pháp nhân PN SEA (Đông Nam Á) ở Singapore với mục tiêu gây quỹ và nâng cao nhận thức về những hành động của tổ chức Passerelles numériques.'),
(10, 2, '2020-2022', 'PNV có 127 sinh viên theo học, PNC có 122 sinh viên, PNP có 205 sinh viên');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `human_resources`
--

CREATE TABLE `human_resources` (
  `id` int(11) NOT NULL,
  `type_role` varchar(100) DEFAULT NULL,
  `descriptions` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `human_resources`
--

INSERT INTO `human_resources` (`id`, `type_role`, `descriptions`) VALUES
(1, 'staff', 'Bao gồm các thầy cô, các bác bảo vệ và lao công'),
(2, 'student', 'Học sinh 3 khóa'),
(3, 'alumni', 'Các cựu học sinh khóa trước');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `infor_pn`
--

CREATE TABLE `infor_pn` (
  `id` int(11) NOT NULL,
  `type_infor` varchar(150) DEFAULT NULL,
  `descriptions` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `infor_pn`
--

INSERT INTO `infor_pn` (`id`, `type_infor`, `descriptions`) VALUES
(1, 'main_value', 'Những giá trị chính của PNV'),
(2, 'dev_milestone', 'Chặng đường phát triển của PNV'),
(3, 'build_foundation', 'Nền tảng xây dựng dự án của PNV');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `itnuoiits`
--

CREATE TABLE `itnuoiits` (
  `id` int(11) NOT NULL,
  `image` varchar(100) NOT NULL,
  `content` varchar(100) NOT NULL,
  `type` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `itnuoiits`
--

INSERT INTO `itnuoiits` (`id`, `image`, `content`, `type`) VALUES
(2, 'donate.jpg', 'Quỹ hoạt động của PN đến từ Grant của các tập đoàn lớn', 'donate'),
(3, 'benefit2.png', 'Thư cập nhật thông tin chuyển khoản hàng tháng', 'benefit'),
(4, 'benefit1.png', 'Giấy chứng nhận đã tham gia chương trình IT nuôi IT', 'benefit'),
(6, 'benefit3.jpg', 'Thăm trường PNV và các em sinh viên', 'benefit');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `main_value`
--

CREATE TABLE `main_value` (
  `id` int(11) NOT NULL,
  `id_pn` int(11) DEFAULT NULL,
  `name_value` varchar(100) DEFAULT NULL,
  `descriptions` varchar(1000) DEFAULT NULL,
  `icon` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `main_value`
--

INSERT INTO `main_value` (`id`, `id_pn`, `name_value`, `descriptions`, `icon`) VALUES
(1, 1, 'Đoàn kết', 'Cùng thất bại, cùng thành công - Cùng giúp đỡ khi khó khăn', 'fas fa-universal-access'),
(2, 1, 'Tin Tưởng', 'Tin vào bản thân, thầy cô và PN - Sẵn sàng chia sẻ để tiến bộ', ' fas fa-heartbeat'),
(3, 1, 'Trách nhiệm', 'Chịu trách nhiệm với bản thân - Mỗi cá nhân là một hình mẫu cho tập thể', ' far fa-handshake'),
(4, 1, 'Yêu cầu cao', 'Tinh thần chủ động trong mọi công việc', 'fas fa-user-check'),
(5, 1, 'Tôn trọng', 'Tiên học lễ, hậu học văn', 'fas fa-restroom');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2016_01_04_173148_create_admin_tables', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `patrner`
--

CREATE TABLE `patrner` (
  `id` int(5) NOT NULL,
  `name` varchar(50) NOT NULL,
  `img` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `patrner`
--

INSERT INTO `patrner` (`id`, `name`, `img`, `description`) VALUES
(1, 'DANAVTC', 'DVT.png', 'PN Vietnam students have started studying in Danang Vocational Training College (DANAVTC) since Sept'),
(2, 'ENOVOU', 'Enouvo.png', 'ENOUVO is a GROUP of INNOVATORS who desire to improve the quality of life through Technology and Con'),
(3, 'FondationAmanjaya', 'FondationAmanjaya.png', ''),
(4, 'J.P.Morgan', 'J.P.Morgan.jpg', ''),
(5, 'KMS-Technology', 'KMS-Technology.png', ''),
(6, 'Laidon', 'Laidon.png', ''),
(7, 'LeKhanhTech', 'LeKhanhTech.png', ''),
(8, 'LinkByNet', 'linkbynet.png', ''),
(9, 'LUCIOLE', 'Luciole.png', ''),
(10, 'Microsoft', 'microsoft.jpg', '');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `staff`
--

CREATE TABLE `staff` (
  `id` int(11) NOT NULL,
  `id_typestaff` int(11) DEFAULT NULL,
  `name_of_staff` varchar(100) DEFAULT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  `admin_role` int(11) DEFAULT NULL,
  `descriptions` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `staff`
--

INSERT INTO `staff` (`id`, `id_typestaff`, `name_of_staff`, `avatar`, `admin_role`, `descriptions`) VALUES
(1, 1, 'Võ Hoàng Thùy Trang', ' ', 0, 'Giám đốc dự án PNV'),
(2, 2, 'Đoàn Triệu Thành', '', 0, 'Selection manager'),
(3, 2, 'Trần Thị Diệp', '', 0, 'Selection Officer'),
(4, 3, 'Lucas Sinrod', '', 0, 'IT & Training manager'),
(5, 3, 'Trần Thị Thanh Trúc', '', 0, 'IT Trainer'),
(6, 3, 'Võ Công Đình', '', 0, 'IT Trainer'),
(7, 3, 'Lê Thị Hồng Thủy', '', 0, 'IT Trainer'),
(8, 3, 'Vũ Thanh Bình', '', 0, 'IT Admin'),
(9, 3, 'Trần Thị Khánh Uyên', '', 0, 'English Coordinator'),
(10, 3, 'Nguyễn Thị Thúy', '', 0, 'English Teacher'),
(11, 3, 'Trần Đông Nguyên', '', 0, 'PLT Coordinator'),
(12, 4, 'Huỳnh Thị Kim Oanh', '', 0, 'External Relations Manager'),
(13, 4, 'Nguyễn Phước Bảo Trân', '', 0, 'External Relations Officer'),
(14, 4, 'Trần Thị Tuyết Ngân', '', 0, 'External Relations Officer'),
(15, 5, 'Đặng Nguyễn Uyên Phương', '', 1, 'Admin, HR & Finance Manager'),
(16, 5, 'Trần Thị Mỹ Ngọc', '', 1, 'Admin, HR & Finance Officer'),
(17, 5, 'Hồ Thị Sô', '', 0, 'Cleaner'),
(18, 5, 'Đinh Trường Tam', '', 0, 'Security'),
(19, 6, 'Châu Mỹ Ngọc', '', 0, 'Education Manager'),
(20, 6, 'Nguyễn Long Hải', '', 0, 'Educator'),
(21, 6, 'Hồ Thị Ngọc Nhài', '', 0, 'Educator');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `type_staff`
--

CREATE TABLE `type_staff` (
  `id` int(11) NOT NULL,
  `id_Human_Resource` int(11) DEFAULT NULL,
  `type_role` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `type_staff`
--

INSERT INTO `type_staff` (`id`, `id_Human_Resource`, `type_role`) VALUES
(1, 1, 'General Manager'),
(2, 1, 'Selection'),
(3, 1, 'IT & Training'),
(4, 1, 'External Relations'),
(5, 1, 'HR & Finance & Admin'),
(6, 1, 'Education');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullname` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `avatar` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `album_blog_subcontent`
--
ALTER TABLE `album_blog_subcontent`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_blog_content` (`id_blog_content`);

--
-- Chỉ mục cho bảng `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `blog_content`
--
ALTER TABLE `blog_content`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_blogs` (`id_blogs`);

--
-- Chỉ mục cho bảng `build_foundation`
--
ALTER TABLE `build_foundation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_PN` (`id_PN`);

--
-- Chỉ mục cho bảng `comments_personal`
--
ALTER TABLE `comments_personal`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_blog_content` (`id_blog_content`);

--
-- Chỉ mục cho bảng `dev_milestone`
--
ALTER TABLE `dev_milestone`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_pn` (`id_pn`);

--
-- Chỉ mục cho bảng `human_resources`
--
ALTER TABLE `human_resources`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `infor_pn`
--
ALTER TABLE `infor_pn`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `itnuoiits`
--
ALTER TABLE `itnuoiits`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `main_value`
--
ALTER TABLE `main_value`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_pn` (`id_pn`);

--
-- Chỉ mục cho bảng `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `patrner`
--
ALTER TABLE `patrner`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_typestaff` (`id_typestaff`);

--
-- Chỉ mục cho bảng `type_staff`
--
ALTER TABLE `type_staff`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_Human_Resource` (`id_Human_Resource`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `album_blog_subcontent`
--
ALTER TABLE `album_blog_subcontent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `blog_content`
--
ALTER TABLE `blog_content`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `build_foundation`
--
ALTER TABLE `build_foundation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `comments_personal`
--
ALTER TABLE `comments_personal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `dev_milestone`
--
ALTER TABLE `dev_milestone`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `human_resources`
--
ALTER TABLE `human_resources`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `infor_pn`
--
ALTER TABLE `infor_pn`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `itnuoiits`
--
ALTER TABLE `itnuoiits`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `main_value`
--
ALTER TABLE `main_value`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `patrner`
--
ALTER TABLE `patrner`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `staff`
--
ALTER TABLE `staff`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT cho bảng `type_staff`
--
ALTER TABLE `type_staff`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `album_blog_subcontent`
--
ALTER TABLE `album_blog_subcontent`
  ADD CONSTRAINT `album_blog_subcontent_ibfk_1` FOREIGN KEY (`id_blog_content`) REFERENCES `blog_content` (`id`);

--
-- Các ràng buộc cho bảng `blog_content`
--
ALTER TABLE `blog_content`
  ADD CONSTRAINT `blog_content_ibfk_1` FOREIGN KEY (`id_blogs`) REFERENCES `blogs` (`id`);

--
-- Các ràng buộc cho bảng `build_foundation`
--
ALTER TABLE `build_foundation`
  ADD CONSTRAINT `build_foundation_ibfk_1` FOREIGN KEY (`id_PN`) REFERENCES `infor_pn` (`id`);

--
-- Các ràng buộc cho bảng `comments_personal`
--
ALTER TABLE `comments_personal`
  ADD CONSTRAINT `comments_personal_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_personal_ibfk_2` FOREIGN KEY (`id_blog_content`) REFERENCES `blog_content` (`id`);

--
-- Các ràng buộc cho bảng `dev_milestone`
--
ALTER TABLE `dev_milestone`
  ADD CONSTRAINT `dev_milestone_ibfk_1` FOREIGN KEY (`id_pn`) REFERENCES `infor_pn` (`id`);

--
-- Các ràng buộc cho bảng `main_value`
--
ALTER TABLE `main_value`
  ADD CONSTRAINT `main_value_ibfk_1` FOREIGN KEY (`id_pn`) REFERENCES `infor_pn` (`id`);

--
-- Các ràng buộc cho bảng `staff`
--
ALTER TABLE `staff`
  ADD CONSTRAINT `staff_ibfk_1` FOREIGN KEY (`id_typestaff`) REFERENCES `type_staff` (`id`);

--
-- Các ràng buộc cho bảng `type_staff`
--
ALTER TABLE `type_staff`
  ADD CONSTRAINT `type_staff_ibfk_1` FOREIGN KEY (`id_Human_Resource`) REFERENCES `human_resources` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
