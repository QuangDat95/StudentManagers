-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th6 03, 2021 lúc 05:25 AM
-- Phiên bản máy phục vụ: 10.4.18-MariaDB
-- Phiên bản PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `quanly_banhang`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chi_tiet_don_hang`
--

CREATE TABLE `chi_tiet_don_hang` (
  `ID_chi_tiet` int(11) NOT NULL,
  `ID_don_hang` int(11) NOT NULL,
  `ID_san_pham` int(11) NOT NULL,
  `So_luong` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `chi_tiet_don_hang`
--

INSERT INTO `chi_tiet_don_hang` (`ID_chi_tiet`, `ID_don_hang`, `ID_san_pham`, `So_luong`) VALUES
(141, 274, 10, 2),
(142, 274, 2, 1),
(143, 274, 4, 1),
(144, 275, 1, 2),
(145, 276, 1, 1),
(146, 277, 1, 1),
(147, 277, 9, 1),
(148, 277, 29, 1),
(149, 278, 3, 2),
(150, 278, 7, 3),
(151, 279, 4, 3),
(152, 279, 28, 3);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `don_hang`
--

CREATE TABLE `don_hang` (
  `ID_don_hang` int(11) NOT NULL,
  `Ten_khach_hang` varchar(50) NOT NULL,
  `ngay_mua` datetime NOT NULL,
  `so_dt` varchar(255) NOT NULL,
  `dia_chi` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `don_hang`
--

INSERT INTO `don_hang` (`ID_don_hang`, `Ten_khach_hang`, `ngay_mua`, `so_dt`, `dia_chi`) VALUES
(274, 'Nguyễn Quốc Ca1', '2021-06-02 19:49:40', '0989756442', 'Hải Quy - Hải Lăng - Quảng Trị'),
(275, 'Nguyễn Văn Can', '2021-06-02 20:08:11', '0333871725', 'Ngô Quyền - Đông Hà - Quảng Trị'),
(276, 'Hồ Quốc An', '2021-06-02 20:09:32', '4234323543', 'Vĩnh Lâm - Vĩnh Linh - Quảng Trị'),
(277, 'Nguyễn Quang Đạt', '2021-06-02 22:42:47', '0979123456', 'Hải Thượng - Hải Lăng - Quảng Trị'),
(278, 'Nguyễn Quốc Ca', '2021-06-03 09:19:20', '0979123456', 'Ngô Quyền - Đông Hà - Quảng Trị'),
(279, 'Hồ Quốc Anh', '2021-06-03 10:11:05', '0232345876', 'Hải Quy - Hải Lăng - Quảng Trị');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `phan_loai`
--

CREATE TABLE `phan_loai` (
  `ID_hang` int(11) NOT NULL,
  `Ten_hang` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `phan_loai`
--

INSERT INTO `phan_loai` (`ID_hang`, `Ten_hang`) VALUES
(1, 'Apple'),
(2, 'Samsung'),
(3, 'Nokia'),
(4, 'Vsmart'),
(5, 'Realme'),
(6, 'Xiaomi');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `quan_ly`
--

CREATE TABLE `quan_ly` (
  `ID_quanly` int(11) NOT NULL,
  `Ten_dang_nhap` varchar(50) NOT NULL,
  `mat_khau` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `quan_ly`
--

INSERT INTO `quan_ly` (`ID_quanly`, `Ten_dang_nhap`, `mat_khau`) VALUES
(2, 'quangdat95', '123456'),
(3, 'quangdat1995', '12345');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `san_pham`
--

CREATE TABLE `san_pham` (
  `ID_san_pham` int(11) NOT NULL,
  `ID_hang` int(11) NOT NULL,
  `Ten_san_pham` varchar(50) NOT NULL,
  `Gia_san_pham` int(11) NOT NULL,
  `hinh_anh` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `san_pham`
--

INSERT INTO `san_pham` (`ID_san_pham`, `ID_hang`, `Ten_san_pham`, `Gia_san_pham`, `hinh_anh`) VALUES
(1, 1, 'Iphone 12 64Gb', 20890000, 'public/img/products/1622107356.jpg'),
(2, 1, 'Iphone 12 pro max 128Gb', 31990000, 'public/img/products/1622107602.jpg'),
(3, 1, 'Iphone 12 pro 512Gb', 36490000, 'public/img/products/1622107669.jpg'),
(4, 1, 'Iphone XR 128Gb', 15490000, 'public/img/products/1622107680.jpg'),
(5, 1, 'Iphone SE 128Gb', 12490000, 'public/img/products/1622107688.jpg'),
(6, 2, 'Samsung Galaxy S21 5G', 18990000, 'public/img/products/1622107704.jpg'),
(7, 2, 'Samsung Galaxy M51', 7990000, 'public/img/products/1622107715.jpg'),
(8, 2, 'Samsung Galaxy Z Fold2 5G', 50000000, 'public/img/products/1622107737.jpg'),
(9, 2, 'Samsung Galaxy Note 20 Ultra 5G', 32990000, 'public/img/products/1622107748.jpg'),
(10, 2, 'Samsung Galaxy S21 Ultra 5G', 25990000, 'public/img/products/1622107763.jpg'),
(11, 3, 'Nokia 5.4', 3290000, 'public/img/products/1622107776.jpg'),
(12, 3, 'Nokia 3.4', 2590000, 'public/img/products/1622107790.jpg'),
(13, 3, 'Nokia 8000 4G', 1590000, 'public/img/products/1622107809.jpg'),
(14, 3, 'Nokia 2.4', 2290000, 'public/img/products/1622107824.jpg'),
(15, 3, 'Nokia 6300 4G', 1190000, 'public/img/products/1622107834.jpg'),
(16, 4, 'Vsmart Aris Pro', 6990000, 'public/img/products/1622107849.jpg'),
(17, 4, 'Vsmart Aris (8Gb/128Gb)', 6690000, 'public/img/products/1622107861.jpg'),
(18, 4, 'Vsmart Live 4 6Gb', 4090000, 'public/img/products/1622107878.jpg'),
(19, 4, 'Vsmart Joy 4 (6Gb/64Gb)', 3840000, 'public/img/products/1622107891.jpg'),
(20, 4, 'Vsmart Active 3 (6G/64Gb)', 3690000, 'public/img/products/1622107904.jpg'),
(21, 5, 'Realme 7 Pro', 8490000, 'public/img/products/1622107916.jpg'),
(22, 5, 'Realme 8 Pro', 8390000, 'public/img/products/1622107925.jpg'),
(23, 5, 'Realme C17', 5290000, 'public/img/products/1622108189.jpg'),
(24, 5, 'Realme 6i', 4590000, 'public/img/products/1622108212.jpg'),
(25, 5, 'Realme C20', 2690000, 'public/img/products/1622108258.jpg'),
(26, 6, 'Xiaomi Mi 11 5G', 20990000, 'public/img/products/1622108275.jpg'),
(27, 6, 'Xiaomi Mi 11 Lite', 7590000, 'public/img/products/1622108284.jpg'),
(28, 6, 'Xiaomi POCO X3 NFC', 5990000, 'public/img/products/1622108293.jpg'),
(29, 6, 'Xiaomi Redmi Note 9 Pro (6G/64Gb)', 5190000, 'public/img/products/1622108303.jpg'),
(30, 6, 'Xiaomi Redmi Note 9S (6G/128Gb)', 4790000, 'public/img/products/1622108321.jpg');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `chi_tiet_don_hang`
--
ALTER TABLE `chi_tiet_don_hang`
  ADD PRIMARY KEY (`ID_chi_tiet`),
  ADD KEY `ID_don_hang` (`ID_don_hang`),
  ADD KEY `ID_san_pham` (`ID_san_pham`);

--
-- Chỉ mục cho bảng `don_hang`
--
ALTER TABLE `don_hang`
  ADD PRIMARY KEY (`ID_don_hang`);

--
-- Chỉ mục cho bảng `phan_loai`
--
ALTER TABLE `phan_loai`
  ADD PRIMARY KEY (`ID_hang`);

--
-- Chỉ mục cho bảng `quan_ly`
--
ALTER TABLE `quan_ly`
  ADD PRIMARY KEY (`ID_quanly`);

--
-- Chỉ mục cho bảng `san_pham`
--
ALTER TABLE `san_pham`
  ADD PRIMARY KEY (`ID_san_pham`),
  ADD KEY `ID_hang` (`ID_hang`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `chi_tiet_don_hang`
--
ALTER TABLE `chi_tiet_don_hang`
  MODIFY `ID_chi_tiet` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=153;

--
-- AUTO_INCREMENT cho bảng `don_hang`
--
ALTER TABLE `don_hang`
  MODIFY `ID_don_hang` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=280;

--
-- AUTO_INCREMENT cho bảng `phan_loai`
--
ALTER TABLE `phan_loai`
  MODIFY `ID_hang` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `quan_ly`
--
ALTER TABLE `quan_ly`
  MODIFY `ID_quanly` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `san_pham`
--
ALTER TABLE `san_pham`
  MODIFY `ID_san_pham` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `chi_tiet_don_hang`
--
ALTER TABLE `chi_tiet_don_hang`
  ADD CONSTRAINT `ID_don_hang` FOREIGN KEY (`ID_don_hang`) REFERENCES `don_hang` (`ID_don_hang`),
  ADD CONSTRAINT `ID_san_pham` FOREIGN KEY (`ID_san_pham`) REFERENCES `san_pham` (`ID_san_pham`);

--
-- Các ràng buộc cho bảng `san_pham`
--
ALTER TABLE `san_pham`
  ADD CONSTRAINT `ID_hang` FOREIGN KEY (`ID_hang`) REFERENCES `phan_loai` (`ID_hang`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
