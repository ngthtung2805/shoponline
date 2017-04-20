/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : shop

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-04-12 22:16:58
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for account
-- ----------------------------
DROP TABLE IF EXISTS `account`;
CREATE TABLE `account` (
  `AccountID` int(11) NOT NULL AUTO_INCREMENT,
  `RoleID` int(11) NOT NULL,
  `Username` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `Password` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `Name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Birthday` date DEFAULT NULL,
  `Gender` tinyint(1) DEFAULT NULL,
  `Address` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Phone` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Image` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `CreateDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`AccountID`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of account
-- ----------------------------
INSERT INTO `account` VALUES ('15', '1', 'ngthtung2805', 'e10adc3949ba59abbe56e057f20f883e', 'Nguyễn Thanh Tùng', 'ngthtung2805@gmail.com', '1970-01-01', '1', '97A Nguyễn Trung Trực, P4, Đà Lạt, Lâm Đồng', '01665761394', null, '2017-03-28 07:32:47');
INSERT INTO `account` VALUES ('16', '1', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'Nguyễn Thanh Tùng', 'admin@gmail.com', '1996-05-28', '1', '97A Nguyễn Trung Trực, P4, Đà Lạt, Lâm Đồng', '01665761394', 'avartar.jpg', '2017-04-02 10:16:33');
INSERT INTO `account` VALUES ('17', '2', '1', 'c4ca4238a0b923820dcc509a6f75849b', 'abcd', 'abcd@gmail.com', '0000-00-00', '0', '', '', null, '2017-04-02 10:15:19');

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `CategoryID` int(11) NOT NULL AUTO_INCREMENT,
  `CategoryName` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `ParentID` int(11) DEFAULT NULL,
  `Description` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`CategoryID`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('1', 'Áo nam', null, '');
INSERT INTO `category` VALUES ('2', 'Quần nam', null, '');
INSERT INTO `category` VALUES ('3', 'Giày nam', null, '');
INSERT INTO `category` VALUES ('4', 'Phụ kiện nam', null, null);
INSERT INTO `category` VALUES ('5', 'Áo sơ mi nam', '1', '');
INSERT INTO `category` VALUES ('6', 'Áo thun nam', '1', '');
INSERT INTO `category` VALUES ('7', 'Áo khoác nam', '1', '');
INSERT INTO `category` VALUES ('8', 'Áo vest nam', '1', '');
INSERT INTO `category` VALUES ('9', 'Áo len nam', '1', '');
INSERT INTO `category` VALUES ('10', 'Quần jean nam', '2', '');
INSERT INTO `category` VALUES ('11', 'Quần kaki nam', '2', '');
INSERT INTO `category` VALUES ('12', 'Quần tây nam', '2', '');
INSERT INTO `category` VALUES ('13', 'Quần short nam', '2', '');
INSERT INTO `category` VALUES ('14', 'Ví da nam', '4', '');
INSERT INTO `category` VALUES ('15', 'Nón nam', '4', '');
INSERT INTO `category` VALUES ('16', 'Thắt lưng nam', '4', '');
INSERT INTO `category` VALUES ('17', 'Balo nam', '4', '');
INSERT INTO `category` VALUES ('18', 'Túi xách nam', '4', '');
INSERT INTO `category` VALUES ('19', 'Mắt kính nam', '4', '');
INSERT INTO `category` VALUES ('20', 'Cà vạt - nơ', '4', '');

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `CommentID` int(11) NOT NULL AUTO_INCREMENT,
  `ProductID` int(11) NOT NULL,
  `CustomerID` int(11) NOT NULL,
  `Subject` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Content` text COLLATE utf8_unicode_ci,
  `CreateDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Rating` float DEFAULT NULL,
  `IsDisplay` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`CommentID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of comment
-- ----------------------------

-- ----------------------------
-- Table structure for customer
-- ----------------------------
DROP TABLE IF EXISTS `customer`;
CREATE TABLE `customer` (
  `CustomerID` int(11) NOT NULL AUTO_INCREMENT,
  `Username` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Password` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Birthday` datetime DEFAULT NULL,
  `Gender` tinyint(1) DEFAULT NULL,
  `Address` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Phone` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `CreateDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Image` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`CustomerID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of customer
-- ----------------------------
INSERT INTO `customer` VALUES ('1', 'ngthtung2805', 'e10adc3949ba59abbe56e057f20f883e', 'ngthtung2805@gmail.com', 'Nguyễn Thanh Tùng', '0000-00-00 00:00:00', '0', 'Đà Lạt, Lâm Đồng', '01665761394', '2017-04-11 16:07:07', null);

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `OrderID` int(11) NOT NULL AUTO_INCREMENT,
  `CustomerID` int(11) NOT NULL,
  `AccountID` int(11) NOT NULL,
  `Total` float NOT NULL,
  `OrderDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `OrderAddress` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `Note` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Status` tinyint(1) NOT NULL,
  PRIMARY KEY (`OrderID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of order
-- ----------------------------
INSERT INTO `order` VALUES ('1', '1', '0', '1400000', '2017-04-12 21:54:31', 'Đà Lạt, Lâm Đồng', null, '0');
INSERT INTO `order` VALUES ('2', '1', '0', '0', '2017-04-12 21:55:11', 'Đà Lạt, Lâm Đồng', null, '0');
INSERT INTO `order` VALUES ('3', '1', '0', '1400000', '2017-04-12 22:11:04', 'Đà Lạt, Lâm Đồng', null, '0');
INSERT INTO `order` VALUES ('4', '1', '0', '350000', '2017-04-12 22:12:23', 'Đà Lạt, Lâm Đồng', null, '0');
INSERT INTO `order` VALUES ('5', '1', '0', '350000', '2017-04-12 22:14:18', 'Đà Lạt, Lâm Đồng', null, '0');
INSERT INTO `order` VALUES ('6', '1', '0', '350000', '2017-04-12 22:15:28', 'Đà Lạt, Lâm Đồng', null, '0');

-- ----------------------------
-- Table structure for orderdetail
-- ----------------------------
DROP TABLE IF EXISTS `orderdetail`;
CREATE TABLE `orderdetail` (
  `OrderID` int(11) NOT NULL,
  `ProductID` int(11) NOT NULL,
  `Quantity` int(11) NOT NULL,
  `Price` float NOT NULL,
  PRIMARY KEY (`OrderID`,`ProductID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=FIXED;

-- ----------------------------
-- Records of orderdetail
-- ----------------------------
INSERT INTO `orderdetail` VALUES ('1', '1', '2', '350000');
INSERT INTO `orderdetail` VALUES ('1', '2', '4', '350000');
INSERT INTO `orderdetail` VALUES ('1', '4', '2', '350000');
INSERT INTO `orderdetail` VALUES ('1', '257', '1', '350000');
INSERT INTO `orderdetail` VALUES ('5', '4', '1', '350000');
INSERT INTO `orderdetail` VALUES ('6', '4', '1', '350000');

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `ProductID` int(11) NOT NULL AUTO_INCREMENT,
  `CategoryID` int(11) NOT NULL,
  `ProductName` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Description` text COLLATE utf8_unicode_ci,
  `Price` float NOT NULL,
  `Discount` int(11) DEFAULT NULL,
  `Quantity` int(11) NOT NULL,
  `Color` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Material` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Size` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Weight` int(11) DEFAULT NULL,
  `Image` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `TotalView` int(11) NOT NULL,
  `CreateDate` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ProductID`)
) ENGINE=InnoDB AUTO_INCREMENT=383 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES ('1', '5', 'Áo Sơ Mi Caro Đen Trắng Tay Ngắn', '', '350000', '10', '1', '', '', 'M', null, 'ao-so-mi-caro-den-trang-tay-ngan-s375-258x3991.jpg', '5', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('2', '5', 'Áo Sơ Mi Caro Đỏ Tay Dài', '', '350000', null, '1', '', '', 'XL', null, 'ao-so-mi-caro-do-tay-dai-s415-258x399.jpg', '7', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('3', '5', 'Áo Sơ Mi Caro Nhí Tay Ngắn', '', '350000', null, '1', '', '', 'L', null, 'ao-so-mi-caro-nhi-tay-ngan-s459-258x399.jpg', '9', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('4', '5', 'Áo Sơ Mi Caro Tay Ngắn', '', '350000', null, '1', '', '', 'M', null, 'ao-so-mi-caro-tay-ngan-s439-258x399.jpg', '11', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('5', '5', 'Áo Sơ Mi Caro Xanh Dương Trắng Tay Dài', '', '350000', '10', '1', '', '', 'XL', null, 'ao-so-mi-caro-xanh-duong-trang-tay-dai-s352-258x399.jpg', '13', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('6', '5', 'Áo Sơ Mi Caro Xanh Lá Kem Tay Ngắn', '', '350000', null, '1', '', '', 'L', null, 'ao-so-mi-caro-xanh-la-kem-tay-ngan-s349-258x399.jpg', '15', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('7', '5', 'Áo Sơ Mi Caro Xanh Xám Trắng Tay Ngắn', '', '350000', null, '1', '', '', 'M', null, 'ao-so-mi-caro-xanh-xam-trang-tay-ngan-s377-258x399.jpg', '17', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('8', '5', 'Áo Sơ Mi Đen Tay Ngắn', '', '350000', null, '1', '', '', 'XL', null, 'ao-so-mi-den-tay-ngan-co-lanh-tu-s400-258x399.jpg', '19', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('9', '5', 'Áo Sơ Mi Đỏ Đô Tay Ngắn', '', '350000', null, '1', '', '', 'L', null, 'ao-so-mi-do-do-muoi-tieu-tay-ngan-s368-258x399.jpg', '21', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('10', '5', 'Áo Sơ Mi Đỏ Đô Phối Túi Tay Dài', '', '350000', null, '1', '', '', 'M', null, 'ao-so-mi-do-do-phoi-tui-tay-dai-s404-258x399.jpg', '23', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('11', '5', 'Áo Sơ Mi Đỏ Đô Tay Dài', '', '350000', '10', '1', '', '', 'XL', null, 'ao-so-mi-do-do-tay-dai-s383-258x399.jpg', '25', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('12', '5', 'Áo Sơ Mi Đỏ Đô Tay Ngắn', '', '350000', null, '1', '', '', 'L', null, 'ao-so-mi-do-do-tay-ngan-s402-258x399.jpg', '27', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('13', '5', 'Áo Sơ Mi Đỏ Đô Tay Ngắn', '', '350000', null, '1', '', '', 'M', null, 'ao-so-mi-do-do-tay-ngan-s427-258x399.jpg', '29', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('14', '5', 'Áo Sơ Mi Đỏ Mận Tay Dài', '', '350000', null, '1', '', '', 'XL', null, 'ao-so-mi-do-man-tay-dai-s370-258x399.jpg', '31', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('15', '5', 'Áo Sơ Mi Nếp Đôi Tay Dài', '', '350000', null, '1', '', '', 'L', null, 'ao-so-mi-do-muoi-tieu-nep-doi-tay-dai-s390-258x399.jpg', '33', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('16', '5', 'Áo Sơ Mi Kem Phối Túi Tay Dài', '', '350000', '10', '1', '', '', 'M', null, 'ao-so-mi-kem-phoi-tui-tay-dai-s362-258x399.jpg', '35', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('17', '5', 'Áo Sơ Mi Kem Vét Màu Tay Ngắn', '', '350000', null, '1', '', '', 'XL', null, 'ao-so-mi-kem-vet-mau-tay-ngan-s337-258x399.jpg', '37', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('18', '5', 'Áo Sơ Mi Màu Cam Sa Phối Túi Tay Ngắn', '', '350000', null, '1', '', '', 'L', null, 'ao-so-mi-mau-cam-sua-phoi-tui-tay-ngan-s409-258x399.jpg', '39', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('19', '5', 'Áo Sơ Mi Nỉ Caro Xám Trắng Tay Ngắn', '', '350000', null, '1', '', '', 'M', null, 'ao-so-mi-ni-caro-xam-trang-tay-ngan-s331-258x399.jpg', '41', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('20', '5', 'Áo Sơ Mi Nỉ Đen Muối Tiêu Thêu Chữ Tay Dài', '', '350000', null, '1', '', '', 'XL', null, 'ao-so-mi-ni-den-muoi-tieu-theu-chu-tay-dai-s406-258x399.jpg', '43', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('21', '5', 'Áo Sơ Mi Xanh Muối Tiêu Tay Dài ', '', '350000', null, '1', '', '', 'L', null, 'ao-so-mi-pho-xanh-muoi-tieu-tay-dai-s445-258x399.jpg', '45', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('22', '5', 'Áo Sơ Mi Tím Cà Tay Ngắn', '', '350000', null, '1', '', '', 'M', null, 'ao-so-mi-tim-ca-tay-ngan-s380-258x399.jpg', '47', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('23', '5', 'Áo Sơ Mi Tím Đậm Tay Ngắn', '', '350000', null, '1', '', '', 'XL', null, 'ao-so-mi-tim-dam-tay-ngan-s444-258x399.jpg', '49', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('24', '5', 'Áo Sơ Mi Trắng', '', '350000', null, '1', '', '', 'L', null, 'ao-so-mi-trang-co-lanh-tu-s456-258x399.jpg', '51', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('25', '5', 'Áo Sơ Mi Trắng In Mỏ Neo Tay Ngắn', '', '350000', null, '1', '', '', 'M', null, 'ao-so-mi-trang-in-mo-neo-tay-ngan-s432-258x399.jpg', '53', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('26', '5', 'Áo Sơ Mi Trắng Nút Gỗ Phối Túi Tay Ngắn', '', '350000', '10', '1', '', '', 'XL', null, 'ao-so-mi-trang-nut-go-phoi-tui-tay-ngan-s365-258x399.jpg', '55', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('27', '5', 'Áo Sơ Mi Trắng Xám Tay Dài', '', '350000', null, '1', '', '', 'L', null, 'ao-so-mi-trang-phoi-co-nho-xam-tay-dai-s333-258x399.jpg', '57', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('28', '5', 'Áo Sơ Mi Trắng Tay Ngắn', '', '350000', null, '1', '', '', 'M', null, 'ao-so-mi-trang-rut-do-tay-ngan-s399-258x399.jpg', '59', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('29', '5', 'Áo Sơ Mi Trắng Tay Dài', '', '350000', null, '1', '', '', 'XL', null, 'ao-so-mi-trang-tay-dai-s410-258x399.jpg', '61', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('30', '5', 'Áo Sơ Mi Trắng Thêu Chữ Phối Túi', '', '350000', null, '1', '', '', 'L', null, 'ao-so-mi-trang-theu-chu-phoi-tui-s363-258x399.jpg', '63', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('31', '5', 'Áo Sơ Mi Vàng Tay Dài ', '', '350000', null, '1', '', '', 'M', null, 'ao-so-mi-vang-tay-dai-s327-258x399.jpg', '65', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('32', '5', 'Áo Sơ Mi Xám In Họa Tiết Tay Ngắn', '', '350000', '10', '1', '', '', 'XL', null, 'ao-so-mi-xam-in-hoa-tiet-tay-ngan-s336-258x399.jpg', '67', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('33', '5', 'Áo Sơ Mi Xám Lông Chuột Phối Túi Tay Ngắn', '', '350000', null, '1', '', '', 'L', null, 'ao-so-mi-xam-long-chuot-phoi-tui-tay-ngan-s416-258x399.jpg', '69', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('34', '5', 'Áo Sơ Mi Xám Nỉ Tay Ngắn', '', '350000', null, '1', '', '', 'M', null, 'ao-so-mi-xam-ni-tay-ngan-s330-258x399.jpg', '71', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('35', '5', 'Áo Sơ Mi Xám Sọc Kem Tay Ngắn', '', '350000', null, '1', '', '', 'XL', null, 'ao-so-mi-xam-soc-kem-tay-ngan-s451-258x399.jpg', '73', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('36', '5', 'Áo Sơ Mi Xám Tro Tay Dài ', '', '350000', null, '1', '', '', 'L', null, 'ao-so-mi-xam-tro-tay-dai-s340-258x399.jpg', '75', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('37', '5', 'Áo Sơ Mi Xám Tro Tay Ngắn', '', '350000', null, '1', '', '', 'M', null, 'ao-so-mi-xam-tro-tay-ngan-h43-258x399.jpg', '77', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('38', '5', 'Áo Sơ Mi Xám Vét Trắng In Đỏ Đen ', '', '350000', '10', '1', '', '', 'XL', null, 'ao-so-mi-xam-vet-trang-in-do-den-s376-258x399.jpg', '79', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('39', '5', 'Áo Sơ Mi Xám Xanh Muối Tiêu Tay Ngắn', '', '350000', null, '1', '', '', 'L', null, 'ao-so-mi-xam-xanh-muoi-tieu-tay-ngan-s441-258x399.jpg', '81', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('40', '5', 'Áo Sơ Mi Xanh Bạc Hà Tay Dài', '', '350000', null, '1', '', '', 'M', null, 'ao-so-mi-xanh-bac-ha-so-tay-dai-s332-258x399.jpg', '83', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('41', '5', 'Áo Sơ Mi Xanh Bạc Hà Tay Dài', '', '350000', null, '1', '', '', 'XL', null, 'ao-so-mi-xanh-bac-ha-tay-dai-h44-258x399.jpg', '85', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('42', '5', 'Áo Sơ Mi Xanh Biển Đậm Nút Gỗ Tay Dài', '', '350000', null, '1', '', '', 'L', null, 'ao-so-mi-xanh-bien-dam-nut-go-tay-dai-s463-258x399.jpg', '87', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('43', '5', 'Áo Sơ Mi Xanh Biển Nếp Đôi Tay Dài', '', '350000', null, '1', '', '', 'M', null, 'ao-so-mi-xanh-bien-nep-doi-tay-dai-s373-258x399.jpg', '2', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('44', '5', 'Áo Sơ Mi Xanh Biển Nhạt Tay Dài', '', '350000', null, '1', '', '', 'XL', null, 'ao-so-mi-xanh-bien-nhat-tay-dai-s371-258x399.jpg', '3', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('45', '5', 'Áo Sơ Mi Xanh Biển Nút Gỗ Phối Túi Tay Dài ', '', '350000', null, '1', '', '', 'L', null, 'ao-so-mi-xanh-bien-nut-go-phoi-tui-tay-dai-s457-258x399.jpg', '4', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('46', '5', 'Áo Sơ Mi Xanh Biển Nút Gỗ Tay Dài', '', '350000', null, '1', '', '', 'M', null, 'ao-so-mi-xanh-bien-nut-go-tay-dai-s435-258x399.jpg', '5', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('47', '5', 'Áo Sơ Mi Xanh Biển Tay Dài ', '', '350000', null, '1', '', '', 'XL', null, 'ao-so-mi-xanh-bien-tay-dai-s413-258x399.jpg', '6', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('48', '5', 'Áo Sơ Mi Xanh Biển Tay Ngắn', '', '350000', null, '1', '', '', 'L', null, 'ao-so-mi-xanh-bien-tay-ngan-s361-258x399.jpg', '7', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('49', '5', 'Áo Sơ Mi Xanh Tay Dài ', '', '350000', null, '1', '', '', 'M', null, 'ao-so-mi-xanh-bo-tay-dai-s434-258x399.jpg', '8', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('50', '5', 'Áo Sơ Mi Xanh Da Trời Tay Ngắn', '', '350000', '10', '1', '', '', 'XL', null, 'ao-so-mi-xanh-da-troi-la-co-nho-tay-ngan-s405-258x399.jpg', '9', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('51', '5', 'Áo Sơ Mi Xanh Da Trời Nhạt Phối Túi Tay Ngắn', '', '350000', '10', '1', '', '', 'L', null, 'ao-so-mi-xanh-da-troi-nhat-phoi-tui-tay-ngan-s366-258x399.jpg', '10', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('52', '5', 'Áo Sơ Mi Xanh Đậm Phối Túi Tay Ngắn ', '', '350000', null, '1', '', '', 'M', null, 'ao-so-mi-xanh-dam-phoi-tui-tay-ngan-s367-258x399.jpg', '11', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('53', '5', 'Áo Sơ Mi Xanh Đen Muối Tiêu Tay Ngắn ', '', '350000', null, '1', '', '', 'XL', null, 'ao-so-mi-xanh-den-muoi-tieu-tay-ngan-s424-258x399.jpg', '12', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('54', '5', 'Áo Sơ Mi Xanh Đen Tay Dài ', '', '350000', null, '1', '', '', 'L', null, 'ao-so-mi-xanh-den-tay-dai-s414-258x399.jpg', '13', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('55', '5', 'Áo Sơ Mi Xanh Lá Đậm Muối Tiêu Tay Ngắn', '', '350000', null, '1', '', '', 'M', null, 'ao-so-mi-xanh-la-dam-muoi-tieu-tay-ngan-s391-258x399.jpg', '14', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('56', '5', 'Áo Sơ Mi Xanh Muối Tiêu Nếp Đôi Tay Dài ', '', '350000', null, '1', '', '', 'XL', null, 'ao-so-mi-xanh-muoi-tieu-nep-doi-tay-dai-s364-258x399.jpg', '15', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('57', '5', 'Áo Sơ Mi Xanh Ngọc Phối Túi Tay Ngắn', '', '350000', null, '1', '', '', 'L', null, 'ao-so-mi-xanh-ngoc-phoi-tui-tay-ngan-s350-258x399.jpg', '16', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('58', '5', 'Áo Sơ Mi Xanh Sọc Trắng Tay Ngắn ', '', '350000', '10', '1', '', '', 'M', null, 'ao-so-mi-xanh-soc-ngang-trang-tay-ngan-s347-258x399.jpg', '17', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('59', '5', 'Áo Sơ Mi Xanh Tay Ngắn ', '', '350000', null, '1', '', '', 'XL', null, 'ao-so-mi-xanh-tay-ngan-s335-258x399.jpg', '18', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('60', '5', 'Áo Sơ Mi Xanh Xám Tay Dài', '', '350000', null, '1', '', '', 'L', null, 'ao-so-mi-xanh-xam-co-chat-goc-tay-dai-s369-258x399.jpg', '19', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('61', '6', 'Áo Thun Body Đen ', '', '350000', null, '1', '', '', 'M', null, 'ao-thun-body-den-b204-258x399.jpg', '20', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('62', '6', 'Áo Thun Đen', '', '350000', null, '1', '', '', 'XL', null, 'ao-thun-den-co-lanh-tu-b204a-258x399.jpg', '21', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('63', '6', 'Áo Thun Đen Cổ Sơ Mi Có Sọc Trắng', '', '350000', '10', '1', '', '', 'L', null, 'ao-thun-den-co-so-mi-bo-co-soc-trang-b219-258x399.jpg', '22', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('64', '6', 'Áo Thun Đen Phối Trắng Cổ Sơ Mi', '', '350000', null, '1', '', '', 'M', null, 'ao-thun-den-phoi-trang-co-so-mi-b237-258x399.jpg', '23', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('65', '6', 'Áo Thun Đen Phối Túi Cổ Sơ Mi', '', '350000', null, '1', '', '', 'XL', null, 'ao-thun-den-phoi-tui-co-so-mi-b172-258x399.jpg', '24', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('66', '6', 'Áo Thun Đen Tay Dài Có Nón', '', '350000', null, '1', '', '', 'L', null, 'ao-thun-den-tay-dai-co-non-b254-258x399.jpg', '25', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('67', '6', 'Áo Thun Đỏ Cổ Tròn Phối Túi', '', '350000', null, '1', '', '', 'M', null, 'ao-thun-do-co-tron-phoi-tui-b176-258x399.jpg', '26', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('68', '6', 'Áo Thun Đỏ Đô Thêu Chìa Khóa Cổ Sơ Mi', '', '350000', null, '1', '', '', 'XL', null, 'ao-thun-do-do-theu-chia-khoa-co-so-mi-b177-258x399.jpg', '27', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('69', '6', 'Áo Thun Đỏ In Chữ Nice Tay Dài ', '', '350000', null, '1', '', '', 'L', null, 'ao-thun-do-in-chu-nice-tay-dai-b192-258x399.jpg', '28', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('70', '6', 'Áo Thun Đỏ Muối Tiêu Phối Túi Cổ Sơ Mi ', '', '350000', null, '1', '', '', 'M', null, 'ao-thun-do-muoi-tieu-phoi-tui-co-so-mi-b154-258x399.jpg', '29', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('71', '6', 'Áo Thun Đỏ Phối Túi Cổ Lãnh Tụ', '', '350000', null, '1', '', '', 'XL', null, 'ao-thun-do-phoi-tui-co-lanh-tu-b220-258x399.jpg', '30', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('72', '6', 'Áo Thun Đỏ Phối Túi Cổ Sơ Mi ', '', '350000', null, '1', '', '', 'L', null, 'ao-thun-do-so-go-phoi-tui-co-so-mi-b173-258x399.jpg', '31', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('73', '6', 'Áo Thun Kèm Vét Đen Cổ Sơ Mi ', '', '350000', null, '1', '', '', 'M', null, 'ao-thun-kem-vet-den-co-so-mi-b189-258x399.jpg', '32', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('74', '6', 'Áo Thun Nhung Xanh Đen Cổ Tròn', '', '350000', '10', '1', '', '', 'XL', null, 'ao-thun-nhung-xanh-den-co-tron-b213-258x399.jpg', '33', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('75', '6', 'Áo Thun Phối Đen Trắng Xám Cổ Sơ Mi', '', '350000', null, '1', '', '', 'L', null, 'ao-thun-phoi-den-trang-xam-co-so-mi-b144-258x399.jpg', '34', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('76', '6', 'Áo Thun Sọc Ngang Đỏ Trắng', '', '350000', null, '1', '', '', 'M', null, 'ao-thun-soc-ngang-do-trang-b178-258x399.jpg', '2', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('77', '6', 'Áo Thun Tím Cà Phối Trắng', '', '350000', null, '1', '', '', 'XL', null, 'ao-thun-tim-ca-phoi-trang-b174-258x399.jpg', '4', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('78', '6', 'Áo Thun Trắng Có Bộ Sọc Đỏ', '', '350000', null, '1', '', '', 'L', null, 'ao-thun-trang-co-bo-soc-do-b221-258x399.jpg', '6', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('79', '6', 'Áo Thun Trắng Có Bộ Thêu Mèo Ở Ngực', '', '350000', null, '1', '', '', 'M', null, 'ao-thun-trang-co-bo-theu-meo-o-nguc-b191-258x399.jpg', '8', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('80', '6', 'Áo Thun Trắng Có Nón Tay Dài ', '', '350000', '10', '1', '', '', 'XL', null, 'ao-thun-trang-co-non-tay-dai-b206-258x399.jpg', '10', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('81', '6', 'Áo Thun Trắng Cổ Sơ Mi ', '', '350000', null, '1', '', '', 'L', null, 'ao-thun-trang-co-so-mi-lot-do-b166-258x399.jpg', '12', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('82', '6', 'Áo Thun Trắng Cổ Sơ Mi Xanh Đen', '', '350000', null, '1', '', '', 'M', null, 'ao-thun-trang-co-so-mi-xanh-den-b129-258x399.jpg', '14', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('83', '6', 'Áo Thun Trắng Đính Sticker Ly Nước', '', '350000', null, '1', '', '', 'XL', null, 'ao-thun-trang-dinh-sticker-ly-nuoc-b183-258x399.jpg', '16', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('84', '6', 'Áo Thun Trắng Đính Sticker Quả Banh', '', '350000', null, '1', '', '', 'L', null, 'ao-thun-trang-dinh-sticket-qua-banh-b171-258x399.jpg', '18', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('85', '6', 'Áo Thun Trắng In Cổ Sơ Mi ', '', '350000', null, '1', '', '', 'M', null, 'ao-thun-trang-in-co-so-mi-b133-258x399.jpg', '20', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('86', '6', 'Áo Thun Trắng In Hình Tay Dài ', '', '350000', null, '1', '', '', 'XL', null, 'ao-thun-trang-in-hinh-tay-dai-b238-258x399.jpg', '22', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('87', '6', 'Áo Thun Trắng Phối Sọc Cổ Sơ Mi ', '', '350000', null, '1', '', '', 'L', null, 'ao-thun-trang-phoi-soc-co-so-mi-b257-258x399.jpg', '24', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('88', '6', 'Áo Thun Trắng Phối Sọc Đỏ Xanh Đen Cổ Sơ Mi', '', '350000', null, '1', '', '', 'M', null, 'ao-thun-trang-phoi-soc-do-xanh-den-co-so-mi-b199-258x399.jpg', '26', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('89', '6', 'Áo Thun Trắng Phối Vàng Cổ Sơ Mi Xanh Đen ', '', '350000', '10', '1', '', '', 'XL', null, 'ao-thun-trang-phoi-vang-co-so-mi-xanh-den-b148-258x399.jpg', '28', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('90', '6', 'Áo Thun Trắng Tím', '', '350000', null, '1', '', '', 'L', null, 'ao-thun-trang-so-go-co-tim-b251-258x399.jpg', '30', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('91', '6', 'Áo Thun Trắng ', '', '350000', null, '1', '', '', 'M', null, 'ao-thun-trang-so-go-phoi-co-xanh-den-do-b228-258x399.jpg', '32', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('92', '6', 'Áo Thun Trắng Phối Sọc Cổ Sơ Mi ', '', '350000', null, '1', '', '', 'XL', null, 'ao-thun-trang-so-go-phoi-soc-co-so-mi-b149-258x399.jpg', '34', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('93', '6', 'Áo Thun Trắng', '', '350000', null, '1', '', '', 'L', null, 'ao-thun-trang-so-go-soc-do-co-bo-b197-258x399.jpg', '36', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('94', '6', 'Áo Thun Trắng Thêu Hình Mèo ', '', '350000', null, '1', '', '', 'M', null, 'ao-thun-trang-so-go-theu-hinh-meo-co-bo-b175-258x399.jpg', '38', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('95', '6', 'Áo Thun Trắng Sọc Đen Cổ Sơ Mi', '', '350000', null, '1', '', '', 'XL', null, 'ao-thun-trang-soc-den-co-so-mi-b232-258x399.jpg', '40', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('96', '6', 'Áo Thun Trắng Sọc Đỏ Phối Túi Cổ Tròn', '', '350000', null, '1', '', '', 'L', null, 'ao-thun-trang-soc-do-o-nguc-phoi-tui-co-tron-b263-258x399.jpg', '42', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('97', '6', 'Áo Thun Trắng Sọc Xanh Cổ Lãnh Tụ', '', '350000', null, '1', '', '', 'M', null, 'ao-thun-trang-soc-xanh-co-lanh-tu-b236-258x399.jpg', '44', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('98', '6', 'Áo Thun Trắng Tay Dài Phối Xanh Đỏ Cổ Tròn', '', '350000', null, '1', '', '', 'XL', null, 'ao-thun-trang-tay-dai-phoi-xanh-do-co-tron-b269-258x399.jpg', '46', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('99', '6', 'Áo Thun Trắng Thêu Hình Cổ Sơ Mi', '', '350000', null, '1', '', '', 'L', null, 'ao-thun-trang-theu-hinh-co-so-mi-b125-258x399.jpg', '48', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('100', '6', 'Áo Thun Vàng Cổ Sơ Mi', '', '350000', null, '1', '', '', 'M', null, 'ao-thun-vang-co-so-mi-b156-258x399.jpg', '50', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('101', '6', 'Áo Thun Xám In Vân Tay Tay Dài ', '', '350000', null, '1', '', '', 'XL', null, 'ao-thun-xam-in-van-tay-tay-dai-b198-258x399.jpg', '52', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('102', '6', 'Áo Thun Xám Phối Xanh Đen Cổ Sơ Mi', '', '350000', null, '1', '', '', 'L', null, 'ao-thun-xam-phoi-xanh-den-co-so-mi-b141-258x399.jpg', '54', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('103', '6', 'Áo Thun Xám Sọc Đen Cổ Tròn ', '', '350000', '10', '1', '', '', 'M', null, 'ao-thun-xam-soc-den-co-tron-b234-258x399.jpg', '56', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('104', '6', 'Áo Thun Xám Tro Cổ Tròn', '', '350000', null, '1', '', '', 'XL', null, 'ao-thun-xam-tro-co-tron-b226-258x399.jpg', '58', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('105', '6', 'Áo Thun Xanh Cổ Sơ Mi Phối Túi ', '', '350000', null, '1', '', '', 'L', null, 'ao-thun-xanh-da-co-so-mi-phoi-tui-b182-258x399.jpg', '60', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('106', '6', 'Áo Thun Xanh Da Trời Phối Túi Cổ Sơ Mi', '', '350000', null, '1', '', '', 'M', null, 'ao-thun-xanh-da-troi-so-go-phoi-tui-co-so-mi-b160-258x399.jpg', '62', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('107', '6', 'Áo Thun Xanh Đen Cổ Sơ Mi', '', '350000', null, '1', '', '', 'XL', null, 'ao-thun-xanh-den-co-so-mi-b733-258x399.jpg', '64', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('108', '6', 'Áo Thun Xanh Đen Cổ Tròn', '', '350000', null, '1', '', '', 'L', null, 'ao-thun-xanh-den-co-tron-b224-258x399.jpg', '66', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('109', '6', 'Áo Thun Xanh Dương Cổ Lãnh Tụ', '', '350000', null, '1', '', '', 'M', null, 'ao-thun-xanh-duong-dam-cham-trang-co-lanh-tu-b169-258x399.jpg', '3', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('110', '6', 'Áo Thun Xanh Dương Đậm Tay Dài', '', '350000', null, '1', '', '', 'XL', null, 'ao-thun-xanh-duong-dam-tay-dai-b227-258x399.jpg', '5', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('111', '6', 'Áo Thun Xanh Lá Đậm Cổ Sơ Mi', '', '350000', null, '1', '', '', 'L', null, 'ao-thun-xanh-la-dam-co-so-mi-b130-258x399.jpg', '7', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('112', '6', 'Áo Thun Xanh Lá Đậm Cổ Tròn', '', '350000', null, '1', '', '', 'M', null, 'ao-thun-xanh-la-dam-co-tron-b188-258x399.jpg', '9', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('113', '6', 'Áo Thun Xanh Lá Muối Tiêu Phối Túi Cổ Sơ Mi', '', '350000', null, '1', '', '', 'XL', null, 'ao-thun-xanh-la-muoi-tieu-phoi-tui-co-so-mi-b231-258x399.jpg', '11', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('114', '6', 'Áo Thun Xanh Ngọc Phối Trắng Cổ Sơ Mi', '', '350000', null, '1', '', '', 'L', null, 'ao-thun-xanh-ngoc-phoi-trang-co-so-mi-b241-258x399.jpg', '13', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('115', '6', 'Áo Thun Xanh Phối Trắng Cổ Sơ Mi', '', '350000', '10', '1', '', '', 'M', null, 'ao-thun-xanh-phoi-trang-co-so-mi-b239-258x399.jpg', '15', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('116', '6', 'Áo Thun Xanh Rêu In Cổ Tròn', '', '350000', null, '1', '', '', 'XL', null, 'ao-thun-xanh-reu-in-than-sau-co-tron-b222-258x399.jpg', '17', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('117', '6', 'Áo Thun Xanh Rêu Nút Gỗ Cổ Sơ Mi ', '', '350000', null, '1', '', '', 'L', null, 'ao-thun-xanh-reu-nut-go-co-so-mi-b181-258x399.jpg', '19', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('118', '6', 'Áo Thun Xanh Rêu Phối Trắng Cổ Sơ Mi', '', '350000', null, '1', '', '', 'M', null, 'ao-thun-xanh-reu-phoi-trang-co-so-mi-b146-258x399.jpg', '21', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('119', '6', 'Áo Thun Xanh Rêu Phối Túi Cổ Lãnh Tụ', '', '350000', null, '1', '', '', 'XL', null, 'ao-thun-xanh-reu-phoi-tui-co-lanh-tu-b162-258x399.jpg', '23', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('120', '6', 'Áo Thun Xanh Rêu Phối Túi Cổ Tròn', '', '350000', null, '1', '', '', 'L', null, 'ao-thun-xanh-reu-phoi-tui-co-tron-b165-258x399.jpg', '25', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('121', '6', 'Áo Ba Lỗ Sọc Trắng Xanh Đen', '', '350000', null, '1', '', '', 'M', null, 'ao-ba-lo-soc-trang-xanh-den-l122.jpg', '27', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('122', '6', 'Áo Ba Lỗ Trắng In', '', '350000', null, '1', '', '', 'XL', null, 'ao-ba-lo-trang-in-l153-258x399.jpg', '29', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('123', '6', 'Áo Ba Lỗ Xanh Vét Trắng', '', '350000', null, '1', '', '', 'L', null, 'ao-ba-lo-xanh-vet-trang-l130-258x399.jpg', '31', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('124', '6', 'Áo Ba Lỗ Đen', '', '350000', null, '1', '', '', 'M', null, 'ao-sat-nach-den-l117-258x399.jpg', '33', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('125', '6', 'Áo Ba Lỗ In Số', '', '350000', null, '1', '', '', 'XL', null, 'ao-sat-nach-luoi-cam-in-so-11-l116.jpg', '35', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('126', '6', 'Áo Ba Lỗ Sọc Xanh Trắng', '', '350000', null, '1', '', '', 'L', null, 'ao-sat-nach-soc-xanh-trang-than-sau-in-l125.jpg', '37', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('127', '6', 'Áo Ba Lỗ Tím Đậm', '', '350000', '10', '1', '', '', 'M', null, 'ao-sat-nach-tim-dam-theu-l134-258x399.jpg', '39', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('128', '6', 'Áo Ba Lỗ Trắng In Chữ', '', '350000', null, '1', '', '', 'XL', null, 'ao-sat-nach-trang-in-chu-l144-258x399.jpg', '41', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('129', '6', 'Áo Ba Lỗ Trắng In Số', '', '350000', null, '1', '', '', 'L', null, 'ao-sat-nach-trang-in-so-2-l121-258x399.jpg', '43', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('130', '6', 'Áo Ba Lỗ In ', '', '350000', null, '1', '', '', 'M', null, 'ao-sat-nach-trang-in-than-sau-l154-258x399.jpg', '45', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('131', '6', 'Áo Ba Lỗ In Viền Sọc', '', '350000', null, '1', '', '', 'XL', null, 'ao-sat-nach-trang-in-vien-soc-l126-258x399.jpg', '47', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('132', '6', 'Áo Ba Lỗ Trắng', '', '350000', null, '1', '', '', 'L', null, 'ao-sat-nach-trang-l129-258x399.jpg', '49', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('133', '6', 'Áo Ba Lỗ Xám In Bliss Glory', '', '350000', null, '1', '', '', 'M', null, 'ao-sat-nach-xam-in-bliss-glory-l110-258x399.jpg', '51', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('134', '6', 'Áo Ba Lỗ Xám In Chữ You First', '', '350000', null, '1', '', '', 'XL', null, 'ao-sat-nach-xam-in-chu-you-first-l118-258x399.jpg', '53', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('135', '6', 'Áo Ba Lỗ Xám In Số 11', '', '350000', null, '1', '', '', 'L', null, 'ao-sat-nach-xam-in-so-11-l108-258x399.jpg', '55', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('136', '6', 'Áo Ba Lỗ Xám Thêu ', '', '350000', null, '1', '', '', 'M', null, 'ao-sat-nach-xam-theu-l133-258x399.jpg', '57', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('137', '6', 'Áo Ba Lỗ Xám Thêu Ở Ngực', '', '350000', null, '1', '', '', 'XL', null, 'ao-sat-nach-xam-theu-o-nguc-l155-258x399.jpg', '59', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('138', '6', 'Áo Ba Lỗ Xanh Biển In Số ', '', '350000', null, '1', '', '', 'L', null, 'ao-sat-nach-xanh-bien-in-so-74-l88.jpg', '61', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('139', '6', 'Áo Ba Lỗ Xanh Ngọc Trắng', '', '350000', null, '1', '', '', 'M', null, 'ao-sat-nach-xanh-ngoc-vet-trang-l136-258x399.jpg', '63', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('140', '6', 'Áo Ba Lỗ In Chữ', '', '350000', '10', '1', '', '', 'XL', null, 'ao-thun-sat-nach-in-chu-p-l124-258x399.jpg', '65', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('141', '6', 'Áo Ba Lỗ Xám Thêu Số', '', '350000', null, '1', '', '', 'L', null, 'ao-thun-sat-nach-xam-theu-so-88-l120-258x399.jpg', '67', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('142', '7', 'Áo Khoác Da Rắn Nâu', '', '350000', null, '1', '', '', 'M', null, 'ao-khoac-da-ran-nau-m88-258x399.jpg', '69', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('143', '7', 'Áo Khoác Đỏ Đô', '', '350000', null, '1', '', '', 'XL', null, 'ao-khoac-do-do-m94-258x399.jpg', '71', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('144', '7', 'Áo Khoác Đỏ Đô Phối Cổ Xanh Đen ', '', '350000', null, '1', '', '', 'L', null, 'ao-khoac-do-do-phoi-co-xanh-den-m80-258x399.jpg', '73', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('145', '7', 'Áo Khoác Xanh Đen', '', '350000', null, '1', '', '', 'M', null, 'ao-khoac-gio-do-bo-tay-co-xanh-den-m86-258x399.jpg', '1', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('146', '7', 'Áo Khoác Gió Đồ Bộ Xanh Đen', '', '350000', null, '1', '', '', 'XL', null, 'ao-khoac-gio-do-bo-xanh-den-m106-258x399.jpg', '2', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('147', '7', 'Áo Khoác Gió Trắng', '', '350000', null, '1', '', '', 'L', null, 'ao-khoac-gio-trang-phoi-bo-soc-m87-258x399.jpg', '3', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('148', '7', 'Áo Khóac Gió Xanh Đen Có Sọc', '', '350000', null, '1', '', '', 'M', null, 'ao-khoac-gio-xanh-den-co-bo-soc-m89-258x399.jpg', '4', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('149', '7', 'Áo Khóa Gió Xanh Navy Bộ Xanh Đen', '', '350000', '10', '1', '', '', 'XL', null, 'ao-khoac-gio-xanh-navy-bo-xanh-den-m93-258x399.jpg', '5', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('150', '7', 'Áo Khoác Gió Xanh Nhạt', '', '150000', '10', '1', '', '', 'L', null, 'a1.jpg', '6', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('151', '7', 'Áo Khoác Gió Xanh Rêu', '', '350000', null, '1', '', '', 'M', null, 'ao-khoac-gio-xanh-reu-co-bo-m128-258x399.jpg', '7', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('152', '7', 'Áo Khoác Jean Xanh Bạc Wash', '', '350000', null, '1', '', '', 'XL', null, 'ao-khoac-jean-xanh-bac-wash-rach-m118-258x399.jpg', '8', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('153', '7', 'Áo Khoác Jean Xanh Wash Rách', '', '350000', null, '1', '', '', 'L', null, 'ao-khoac-jean-xanh-wash-rach-m116-258x399.jpg', '9', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('154', '7', 'Áo Khoác K29', '', '350000', null, '1', '', '', 'M', null, 'ao-khoac-k29-258x399.jpg', '10', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('155', '7', 'Áo Khoác K31', '', '350000', null, '1', '', '', 'XL', null, 'ao-khoac-k31-258x399.jpg', '11', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('156', '7', 'Áo Khoác K32', '', '350000', null, '1', '', '', 'L', null, 'ao-khoac-k32-258x399.jpg', '12', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('157', '7', 'Áo Khoác KaKi Đen', '', '350000', null, '1', '', '', 'M', null, 'ao-khoac-kaki-den-co-bo-m124-hinh-2-258x399.jpg', '13', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('158', '7', 'Áo Khoác KaKi Đen', '', '350000', null, '1', '', '', 'XL', null, 'ao-khoac-kaki-den-co-bo-m92-258x399.jpg', '14', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('159', '7', 'Áo Khoác Kaki Xanh Đen', '', '350000', null, '1', '', '', 'L', null, 'ao-khoac-kaki-do-bo-xanh-den-m98-258x399.jpg', '15', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('160', '7', 'Áo Khoác Kaki Kem Xanh Đen', '', '350000', null, '1', '', '', 'M', null, 'ao-khoac-kaki-kem-bo-xanh-den-m102-258x399.jpg', '16', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('161', '7', 'Áo Khoác Kaki Sọc Trắng Đen', '', '350000', '10', '1', '', '', 'XL', null, 'ao-khoac-kaki-soc-trang-den-m109-fix-258x399.jpg', '17', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('162', '7', 'Áo Khoác Kaki Sọc Xanh Trắng', '', '350000', null, '1', '', '', 'L', null, 'ao-khoac-kaki-soc-xanh-trang-m110-fix-258x399.jpg', '18', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('163', '7', 'Áo Khoác Kaki Trắng', '', '350000', null, '1', '', '', 'M', null, 'ao-khoac-kaki-trang-bo-soc-m101-258x399.jpg', '19', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('164', '7', 'Áo Khoác Kaki Trắng Sọc Đỏ', '', '350000', null, '1', '', '', 'XL', null, 'ao-khoac-kaki-trang-co-bo-soc-do-m111-258x399.jpg', '20', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('165', '7', 'Áo Khoác Kaki Trắng Đính Sticker', '', '350000', null, '1', '', '', 'L', null, 'ao-khoac-kaki-trang-dinh-sticker-m140-258x399.jpg', '21', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('166', '7', 'Áo Khoác Kaki Xám', '', '350000', null, '1', '', '', 'M', null, 'ao-khoac-kaki-xam-m91-258x399.jpg', '22', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('167', '7', 'Áo Khoác Kaki Xanh Bích In', '', '350000', null, '1', '', '', 'XL', null, 'ao-khoac-kaki-xanh-bich-in-08-m97-258x399.jpg', '23', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('168', '7', 'Áo Khoác Kaki Xanh Đen', '', '350000', null, '1', '', '', 'L', null, 'ao-khoac-kaki-xanh-den-bo-soc-m99-258x399.jpg', '24', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('169', '7', 'Áo Khoác Kaki Xanh Lá', '', '350000', null, '1', '', '', 'M', null, 'ao-khoac-kaki-xanh-la-m103-258x399.jpg', '25', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('170', '7', 'Áo Khoác Kaki Xanh Rêu ', '', '350000', '10', '1', '', '', 'XL', null, 'ao-khoac-kaki-xanh-reu-co-bo-m123-258x399.jpg', '2', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('171', '7', 'Áo Khoác Kaki Xanh Rêu ', '', '350000', null, '1', '', '', 'L', null, 'ao-khoac-kaki-xanh-reu-m133-258x399.jpg', '4', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('172', '7', 'Áo Khoác Kem', '', '350000', null, '1', '', '', 'M', null, 'ao-khoac-kem-m95-hinh-2-258x399.jpg', '6', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('173', '7', 'Áo Khoác Lính ', '', '350000', null, '1', '', '', 'XL', null, 'ao-khoac-linh-ran-ri-k33-258x399.jpg', '8', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('174', '7', 'Áo Khoác Phối Trắng Xám ', '', '350000', null, '1', '', '', 'L', null, 'ao-khoac-phoi-trang-xam-k24-258x399.jpg', '10', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('175', '7', 'Áo Khoác Thun Giả Jean Xanh ', '', '350000', null, '1', '', '', 'M', null, 'ao-khoac-thun-gia-jean-xanh-m104-258x399.jpg', '12', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('176', '7', 'Áo Khoác Trắng Thêu Chữ', '', '350000', null, '1', '', '', 'XL', null, 'ao-khoac-trang-bo-soc-theu-chu-m108-258x399.jpg', '14', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('177', '7', 'Áo Khoác Trắng', '', '350000', null, '1', '', '', 'L', null, 'ao-khoac-trang-k11-258x399.jpg', '16', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('178', '7', 'Áo Khoác Trắng Phối Viền Tay Vàng Đen', '', '350000', null, '1', '', '', 'M', null, 'ao-khoac-trang-phoi-vien-tay-vang-den-k19-258x399.jpg', '18', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('179', '7', 'Áo Khoác Phối Viền Tay Xanh Đỏ', '', '350000', null, '1', '', '', 'XL', null, 'ao-khoac-trang-phoi-vien-tay-xanh-do-k20-258x399.jpg', '20', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('180', '7', 'Áo Khoác Trắng Phối Xanh ', '', '350000', '10', '1', '', '', 'L', null, 'ao-khoac-trang-phoi-xanh-k18-258x399.jpg', '22', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('181', '7', 'Áo Khoác Xanh Bạc Hà Muối Tiêu', '', '350000', null, '1', '', '', 'M', null, 'ao-khoac-xanh-bac-ha-muoi-tieu-m135-258x399.jpg', '24', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('182', '7', 'Áo Khoác Xanh Biển Bộ Xanh Đen', '', '350000', null, '1', '', '', 'XL', null, 'ao-khoac-xanh-bien-bo-xanh-den-m100-1-258x399.jpg', '26', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('183', '8', 'Áo Vest Màu Đỏ Hồng', '', '350000', null, '1', '', '', 'L', null, 'vest-cuoi-chu-re-mau-do-hong-1-253x350.jpg', '28', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('184', '8', 'Vest Hàn Quốc Xanh Pastel', '', '350000', null, '1', '', '', 'M', null, 'vest-cuoi-han-quoc-xanh-pastel-4-233x350.jpg', '30', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('185', '8', 'Vest Nam 2 Nút', '', '350000', null, '1', '', '', 'XL', null, 'vest-nam-2-nut-xam-gach-1-253x350.jpg', '32', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('186', '8', 'Vest Nam 2 Nút Xanh Rêu', '', '350000', null, '1', '', '', 'L', null, 'vest-nam-2-nut-xam-xanh-reu-1-253x350.jpg', '34', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('187', '8', 'Vest Nam 2 Nút Xanh Sọc', '', '350000', null, '1', '', '', 'M', null, 'vest-nam-2-nut-xanh-soc-nhuyen-1-253x350.jpg', '36', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('188', '8', 'Vest Nam Đen ', '', '350000', null, '1', '', '', 'XL', null, 'vest-nam-den-vien-phi-bac-1-253x350.jpg', '38', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('189', '8', 'Vest Nam Hàn Quốc Xám Trắng', '', '350000', '10', '1', '', '', 'L', null, 'vest-nam-han-quoc-xam-trang-1-253x350.jpg', '40', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('190', '8', 'Vest Nam Đẹp', '', '350000', '10', '1', '', '', 'M', null, 'veston-nam-vestdep.net-213-230x350.jpg', '42', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('191', '3', 'Giầy buộc day công sở james-blanc da trơn', '', '350000', '10', '1', '', '', '38', null, 'giay-buoc-day-cong-so-james-blanc-da-tron-mau-canh-gian-jb-693_7_.jpg', '5', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('192', '3', 'Giầy buộc day công sở james-blanc da trơn đen', '', '350000', null, '1', '', '', '41', null, 'giay-buoc-day-cong-so-james-blanc-da-tron-mau-den-jb-6677_3_.jpg', '7', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('193', '3', 'Giầy buộc day công sở james-blanc da trơn đen áp', '', '350000', null, '1', '', '', '40', null, 'giay-buoc-day-cong-so-sanvado-da-tron-mau-den-ap-012_2_.jpg', '9', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('194', '3', 'Giầy buộc day công sở james sanvado', '', '350000', null, '1', '', '', '39', null, 'giay-buoc-day-cong-so-sanvado-hoa-tiet-in-van-ca-sau-mau-nau-hm-492_7_.jpg', '11', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('195', '3', 'Giầy buộc day công sở sanvado da trơn', '', '350000', '10', '1', '', '', '38', null, 'giay-buoc-day-sanvado-da-tron-mau-da-bo-kt-02-973_3_.jpg', '13', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('196', '3', 'Giầy buộc day thể thao da lông màu xanh', '', '350000', null, '1', '', '', '41', null, 'giay-buoc-day-the-thao-da-lon-mau-xanh-de-trang-gv-1015_4_.jpg', '15', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('197', '3', 'Giầy cao cổ savando da xanh rêu', '', '350000', null, '1', '', '', '40', null, 'giay-cao-co-sanvado-da-sap-xanh-reu-2379_4_.jpg', '17', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('198', '3', 'Giầy da nam có lưng martens da nâu', '', '350000', null, '1', '', '', '39', null, 'giay-da-nam-co-lung-dr-martens-da-san-mau-nau-1460_3_.jpg', '19', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('199', '3', 'Giầy da nam lười sanvado vân cá sấu đen', '', '350000', null, '1', '', '', '38', null, 'giay-da-nam-luoi-sanvado-van-ca-sau-den-kn-0033-3_6_.jpg', '21', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('200', '3', 'Giầy da nam lười sanvado vân cá sấu nâu', '', '350000', null, '1', '', '', '41', null, 'giay-da-nam-luoi-sanvado-van-ca-sau-nau-kn-0033-3.jpg', '23', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('201', '3', 'Giầy lười công sở cao cấp james da trơn đen', '', '350000', '10', '1', '', '', '40', null, 'giay-luoi-cong-so-cao-cap-james-blanc-da-tron-mau-den-jb-1017_5_.jpg', '25', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('202', '3', 'Giầy công sở sanvando da trơn màu đen', '', '350000', null, '1', '', '', '39', null, 'giay-luoi-cong-so-sanvado-da-tron-mau-den-gv-305_5_.jpg', '27', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('203', '3', 'Giầy công sở sanvando đế cao da trơn màu nâu', '', '350000', null, '1', '', '', '38', null, 'giay-luoi-cong-so-sanvado-de-cao-da-tron-mau-nau-pc-128-dc_3_.jpg', '29', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('204', '3', 'Giầy lười nam clark da lộn quai da màu đen', '', '350000', null, '1', '', '', '41', null, 'giay-luoi-nam-clark-da-lon-quai-da-mau-den-6054_6_.jpg', '31', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('205', '3', 'Giầy lười nam clark da lộn quai da màu xanh', '', '350000', null, '1', '', '', '40', null, 'giay-luoi-nam-clark-da-lon-quai-da-mau-xanh-6054_6_.jpg', '33', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('206', '3', 'Giầy lười nam clark da lộn quai da màu da bò', '', '350000', '10', '1', '', '', '39', null, 'giay-luoi-nam-clark-da-tron-quai-da-mau-da-bo-6054_4.jpg', '35', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('207', '3', 'Giầy lười nam clark da trơn quai da màu đen', '', '350000', null, '1', '', '', '38', null, 'giay-luoi-nam-clark-da-tron-quai-da-mau-den-6054_5.jpg', '37', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('208', '3', 'Giầy lười nam clark da trơn quai da màu nâu', '', '350000', null, '1', '', '', '41', null, 'giay-luoi-nam-clark-da-tron-quai-da-mau-nau-6054_5.jpg', '39', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('209', '3', 'Giầy lười nam clark da trơn quai da màu xanh', '', '350000', null, '1', '', '', '40', null, 'giay-luoi-nam-clark-da-tron-quai-da-mau-xanh-6054_5.jpg', '41', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('210', '3', 'Giầy lười nam công sở james-blanc da trơn màu nâu đậm', '', '350000', null, '1', '', '', '39', null, 'giay-luoi-nam-cong-so-james-blanc-da-tron-mau-nau-dam-jb-793_2_.jpg', '43', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('211', '3', 'Giầy lười nam công sở sanvando da trơn màu đen áp', '', '350000', null, '1', '', '', '38', null, 'giay-luoi-nam-cong-so-sanvado-da-tron-mau-den-ap-128_5.jpg', '45', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('212', '3', 'Giầy lười nam công sở sanvando da trơn màu đen áp', '', '350000', null, '1', '', '', '41', null, 'giay-luoi-nam-cong-so-sanvado-da-tron-mau-nau-ap-128_1_.jpg', '47', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('213', '3', 'Giầy lười nam công sở sanvando da dạp  trơn mầu nâu', '', '350000', null, '1', '', '', '40', null, 'giay-luoi-nam-cong-so-sanvado-da-tron-mau-nau-hm-1521_7_.jpg', '49', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('214', '3', 'Giầy lười nam công sở sanvando da đạp vân cá sấu  trơn màu nâu', '', '350000', null, '1', '', '', '39', null, 'giay-luoi-nam-sanvado-da-dap-van-ca-sau-mau-den-hm-491_3_.jpg', '51', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('215', '3', 'Giầy lười nam công sở sanvando da dạp vân cá sấu  trơn màu đen', '', '350000', null, '1', '', '', '38', null, 'giay-luoi-nam-sanvado-da-dap-van-ca-sau-mau-nau-hm-491_1_.jpg', '53', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('216', '3', 'Giầy lười nam sanvando da trơn đục màu đen', '', '350000', '10', '1', '', '', '41', null, 'giay-luoi-nam-sanvado-da-tron-duc-lo-mau-den-cs-359_5.jpg', '55', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('217', '3', 'Giầy lười nam sanvando da trơn đục màu nâu', '', '350000', null, '1', '', '', '40', null, 'giay-luoi-nam-sanvado-da-tron-duc-lo-mau-nau-cs-359_5.jpg', '57', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('218', '3', 'Giầy lười nam sanvando da trơn đục màu xanh', '', '350000', null, '1', '', '', '39', null, 'giay-luoi-nam-sanvado-da-tron-duc-lo-mau-xanh-cs-359_5.jpg', '59', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('219', '3', 'Giầy lười nam sanvando da trơn màu đen', '', '350000', null, '1', '', '', '38', null, 'giay-luoi-nam-sanvado-da-tron-mau-den-cs-624_5.jpg', '61', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('220', '3', 'Giầy lười nam sanvando da trơn màu nâu', '', '350000', null, '1', '', '', '41', null, 'giay-luoi-nam-sanvado-da-tron-mau-nau-cs-624_5.jpg', '63', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('221', '3', 'Giầy lười nam sanvando đen', '', '350000', null, '1', '', '', '40', null, 'giay-luoi-nam-sanvado-den-kn-0033_5_.jpg', '65', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('222', '3', 'Giầy lười nam sanvando nâu', '', '350000', '10', '1', '', '', '39', null, 'giay-luoi-nam-sanvado-nau-kn-0033_4_.jpg', '67', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('223', '3', 'Giầy lười nam thời trang james-blanc da trơn cổ dài màu nâu đậm', '', '350000', null, '1', '', '', '38', null, 'giay-luoi-nam-thoi-trang-james-blanc-da-tron-co-dai-mau-nau-dam-jb-792_6_.jpg', '69', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('224', '3', 'Giầy lười slip-on đa trơn màu xanh rêu', '', '350000', null, '1', '', '', '41', null, 'giay-luoi-slip-on-da-tron-mau-xanh-reu-gv-333_5_.jpg', '71', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('225', '3', 'Giầy lười slip-on đa trơn màu xanh thấm', '', '350000', null, '1', '', '', '40', null, 'giay-luoi-slip-on-da-tron-mau-xanh-than-gv-333_4_.jpg', '73', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('226', '3', 'Giây lười thời trang cao cấp jamas-blanc da trơn màu nâu', '', '350000', null, '1', '', '', '39', null, 'giay-luoi-thoi-trang-cap-cap-james-blanc-da-tron-mau-nau-jb-794_3_.jpg', '75', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('227', '3', 'Giây lười thời trang cao cấp da trơn màu nâu', '', '350000', null, '1', '', '', '38', null, 'giay-luoi-thoi-trang-cong-so-da-tron-mau-nau-th-040_6_.jpg', '77', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('228', '3', 'Giầy thời trang công sở sanvando da trơn màu đen', '', '350000', '10', '1', '', '', '41', null, 'giay-luoi-thoi-trang-cong-so-sanvado-da-tron-mau-den-gv-302_6_.jpg', '79', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('229', '3', 'Giầu lười thời trang sanvando da trơn màu nâu thường', '', '350000', null, '1', '', '', '40', null, 'giay-luoi-thoi-trang-sanvado-da-tron-mau-nau-bt-009_4_.jpg', '81', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('230', '3', 'Giầy nam buộc da lộn màu da bò', '', '350000', null, '1', '', '', '39', null, 'giay-nam-buoc-day-da-lon-mau-da-bo-du-3411_5.jpg', '83', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('231', '3', 'Giầy nam buộc da lộn màu đen', '', '350000', null, '1', '', '', '38', null, 'giay-nam-buoc-day-da-lon-mau-den-du-3411_5.jpg', '85', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('232', '3', 'Giầy nam buộc da lộn màu nâu', '', '350000', null, '1', '', '', '41', null, 'giay-nam-buoc-day-da-lon-mau-nau-du-3411_5.jpg', '87', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('233', '3', 'Giầy nam buộc da lộn màu xanh', '', '350000', null, '1', '', '', '40', null, 'giay-nam-buoc-day-da-lon-mau-xanh-du-3411_5.jpg', '2', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('234', '3', 'Giầy nam có lưng sanvado da trơn màu đen', '', '350000', null, '1', '', '', '39', null, 'giay-nam-co-lung-sanvado-da-tron-mau-den-hm-6688_5_.jpg', '3', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('235', '3', 'Giầy nam có lưng sanvado da trơn màu nâu', '', '350000', null, '1', '', '', '38', null, 'giay-nam-thoi-trang-sanvado-da-tron-mau-nau-hm-7054_2_.jpg', '4', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('236', '3', 'Giầy vải slip-on màu be', '', '350000', null, '1', '', '', '41', null, 'giay-vai-slip-on-mau-be-sg-321_6_.jpg', '5', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('237', '3', 'Giầy vải slip-on màu đen', '', '350000', null, '1', '', '', '40', null, 'giay-vai-slip-on-mau-den-sg-321_6_.jpg', '6', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('238', '3', 'Giầy vải slip-on màu ghi', '', '350000', null, '1', '', '', '39', null, 'giay-vai-slip-on-mau-ghi-sg-321_6_.jpg', '7', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('239', '3', 'Giầy vải slip-on màu xanh', '', '350000', null, '1', '', '', '39', null, 'giay-vai-slip-on-mau-xanh-sg-321_6_.jpg', '8', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('240', '10', 'Quần Jean đen', '', '350000', null, '1', '', '', '30', null, 'quan-jean-den-qj1475-8614.jpg', '9', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('241', '10', 'Quần Jean xanh đen đậm', '', '350000', null, '1', '', '', '40', null, 'quan-jean-xanh-den-dam-qj1468-8607.jpg', '10', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('242', '10', 'Quần Jean xanh đen đậm', '', '350000', null, '1', '', '', '39', null, 'quan-jean-xanh-den-dam-qj1470-8609.jpg', '11', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('243', '10', 'Quần Jean xanh đen', '', '350000', null, '1', '', '', '38', null, 'quan-jean-xanh-den-qj1459-8600.jpg', '12', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('244', '10', 'Quần Jean xanh đen', '', '350000', null, '1', '', '', '41', null, 'quan-jean-xanh-den-qj1461-8602.jpg', '13', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('245', '10', 'Quần Jean xanh đen', '', '350000', null, '1', '', '', '40', null, 'quan-jean-xanh-den-qj1464-8604.jpg', '14', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('246', '10', 'Quần Jean xanh đen', '', '350000', '10', '1', '', '', '39', null, 'quan-jean-xanh-den-qj1465-8605.jpg', '15', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('247', '10', 'Quần Jean xanh đen', '', '350000', null, '1', '', '', '38', null, 'quan-jean-xanh-den-qj1469-8608.jpg', '16', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('248', '10', 'Quần Jean xanh đen', '', '350000', null, '1', '', '', '41', null, 'quan-jean-xanh-den-qj1472-8611.jpg', '17', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('249', '10', 'Quần Jean xanh đen', '', '350000', null, '1', '', '', '40', null, 'quan-jean-xanh-den-qj1473-8612.jpg', '18', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('250', '10', 'Quần Jean xanh đen', '', '350000', null, '1', '', '', '39', null, 'quan-jean-xanh-den-qj1474-8613.jpg', '19', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('251', '10', 'Quần Jean xanh', '', '350000', null, '1', '', '', '39', null, 'quan-jean-xanh-qj1458-8599.jpg', '20', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('252', '10', 'Quần Jean xanh', '', '350000', '10', '1', '', '', '30', null, 'quan-jean-xanh-qj1460-8601.jpg', '21', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('253', '10', 'Quần Jean xanh', '', '350000', null, '1', '', '', '40', null, 'quan-jean-xanh-qj1462-8603.jpg', '22', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('254', '10', 'Quần Jean xanh', '', '350000', null, '1', '', '', '39', null, 'quan-jean-xanh-qj1466-8616.jpg', '23', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('255', '10', 'Quần Jean xanh', '', '350000', null, '1', '', '', '38', null, 'quan-jean-xanh-qj1467-8606.jpg', '24', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('256', '10', 'Quần Jean xanh', '', '350000', null, '1', '', '', '41', null, 'quan-jean-xanh-qj1471-8610.jpg', '25', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('257', '10', 'Quần Jean xanh', '', '350000', null, '1', '', '', '40', null, 'quan-jean-xanh-qj1476-8615.jpg', '26', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('258', '10', 'Quần Jean bạc', '', '350000', '10', '1', '', '', '39', null, 'quan-jean-bac-qj1449-8533.jpg', '27', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('259', '10', 'Quần Jean đen', '', '350000', null, '1', '', '', '38', null, 'quan-jean-den-qj1442-8527.jpg', '28', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('260', '10', 'Quần Jean đen', '', '350000', null, '1', '', '', '41', null, 'quan-jean-den-qj1445-8528.jpg', '29', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('261', '10', 'Quần Jean đen', '', '350000', null, '1', '', '', '40', null, 'quan-jean-den-qj1454-8596.jpg', '30', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('262', '10', 'Quần Jean xám chuột đậm', '', '350000', null, '1', '', '', '39', null, 'quan-jean-xam-chuot-dam-qj1455-8597.jpg', '31', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('263', '10', 'Quần Jean xám chuột đậm', '', '350000', null, '1', '', '', '39', null, 'quan-jean-xam-chuot-dam-qj1456-8598.jpg', '32', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('264', '10', 'Quần Jean xám chuột', '', '350000', null, '1', '', '', '30', null, 'quan-jean-xam-chuot-qj1445-8530.jpg', '33', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('265', '10', 'Quần Jean xanh đen đậm', '', '350000', null, '1', '', '', '40', null, 'quan-jean-xanh-den-dam-qj1452-8593.jpg', '34', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('266', '10', 'Quần Jean xanh đen đậm', '', '350000', null, '1', '', '', '39', null, 'quan-jean-xanh-den-dam-qj1453-8595.jpg', '2', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('267', '10', 'Quần Jean xanh đen', '', '350000', null, '1', '', '', '38', null, 'quan-jean-xanh-den-qj1439-8525.jpg', '4', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('268', '10', 'Quần Jean xanh đen', '', '350000', null, '1', '', '', '41', null, 'quan-jean-xanh-den-qj1441-8526.jpg', '6', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('269', '10', 'Quần Jean xanh đen', '', '350000', null, '1', '', '', '40', null, 'quan-jean-xanh-den-qj1445-8531.jpg', '8', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('270', '10', 'Quần Jean xanh đen', '', '350000', null, '1', '', '', '39', null, 'quan-jean-xanh-den-qj1448-8532.jpg', '10', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('271', '10', 'Quần Jean xanh đen', '', '350000', null, '1', '', '', '38', null, 'quan-jean-xanh-den-qj1451-8535.jpg', '12', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('272', '10', 'Quần Jean xanh đen', '', '350000', null, '1', '', '', '41', null, 'quan-jean-xanh-den-qj1452-8592.jpg', '14', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('273', '10', 'Quần Jean xanh dương đậm ', '', '350000', null, '1', '', '', '40', null, 'quan-jean-xanh-duong-dam-qj1452_2-8593.jpg', '16', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('274', '10', 'Quần Jean xanh', '', '350000', null, '1', '', '', '39', null, 'quan-jean-xanh-qj1445-8529.jpg', '18', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('275', '10', 'Quần Jean xanh', '', '350000', null, '1', '', '', '39', null, 'quan-jean-xanh-qj1450-8534.jpg', '20', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('276', '10', 'Quần Jean xanh', '', '350000', '10', '1', '', '', '30', null, 'quan-jean-xanh-qj1453-8594.jpg', '22', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('277', '10', 'Quần Jean Ống Đứng xanh đen', '', '350000', null, '1', '', '', '40', null, 'quan-jean-dung-xanh-den-qj1364-7316.jpg', '28', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('278', '10', 'Quần Jean Ống Đứng xanh dương đậm', '', '350000', null, '1', '', '', '39', null, 'quan-jean-dung-xanh-duong-dam-qj1364-7317.jpg', '30', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('279', '10', 'Quần Jean Ống Đứng xanh', '', '350000', null, '1', '', '', '38', null, 'quan-jean-dung-xanh-qj1364-7315.jpg', '32', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('280', '10', 'Quần Jean Rách xanh đen', '', '350000', null, '1', '', '', '41', null, 'quan-jean-rach-xanh-den-qj1247-4878.jpg', '44', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('281', '10', 'Quần Jean Rách xanh đen', '', '350000', null, '1', '', '', '40', null, 'quan-jean-rach-xanh-den-qj1250-4880.jpg', '46', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('282', '10', 'Quần Jean Rách xanh đen', '', '350000', '10', '1', '', '', '39', null, 'quan-jean-rach-xanh-den-qj1253-5646.jpg', '48', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('283', '10', 'Quần Jean Rách xanh đen', '', '350000', null, '1', '', '', '38', null, 'quan-jean-rach-xanh-den-qj1264-5656.jpg', '50', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('284', '10', 'Quần Jean Rách xanh đen', '', '350000', null, '1', '', '', '41', null, 'quan-jean-rach-xanh-den-qj1271-5663.jpg', '52', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('285', '10', 'Quần Jean Rách xanh đen', '', '350000', null, '1', '', '', '40', null, 'quan-jean-rach-xanh-den-qj1318-6090.jpg', '54', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('286', '10', 'Quần Jean Rách xanh dương đậm', '', '350000', null, '1', '', '', '39', null, 'quan-jean-rach-xanh-duong-dam-qj1250-4881.jpg', '56', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('287', '10', 'Quần Jean Rách xanh dương đậm', '', '350000', null, '1', '', '', '39', null, 'quan-jean-rach-xanh-duong-dam-qj1318-6091.jpg', '58', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('288', '10', 'Quần Jean Rách xanh dương', '', '350000', '10', '1', '', '', '30', null, 'quan-jean-rach-xanh-duong-qj1342-6983.jpg', '60', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('289', '10', 'Quần Jean Skinny Rách xanh dương', '', '350000', null, '1', '', '', '40', null, 'quan-jean-skinny-rach-xanh-duong-qj1377-7588.jpg', '62', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('290', '10', 'Quần Jean Skinny xanh dương', '', '350000', null, '1', '', '', '39', null, 'quan-jean-skinny-xanh-duong-qj1361-7313.jpg', '64', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('291', '10', 'Quần Jean xanh đen', '', '350000', null, '1', '', '', '38', null, 'quan-jean-xanh-den-qj1249-4879.jpg', '66', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('292', '10', 'Quần Jean xanh dương đậm', '', '350000', null, '1', '', '', '41', null, 'quan-jean-xanh-duong-dam-qj1252-4883.jpg', '3', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('293', '10', 'Quần Jean xanh dương', '', '350000', null, '1', '', '', '40', null, 'quan-jean-xanh-duong-qj1250-4882.jpg', '5', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('294', '11', 'Quần Kaki đen', '', '350000', null, '1', '', '', '39', null, 'quan-kaki-den-qk161-8267.jpg', '11', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('295', '11', 'Quần Kaki đỏ mận', '', '350000', null, '1', '', '', '38', null, 'quan-kaki-do-man-qk162-8273.jpg', '17', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('296', '11', 'Quần Kaki màu kem', '', '350000', null, '1', '', '', '41', null, 'quan-kaki-mau-kem-qk163-8536.jpg', '23', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('297', '11', 'Quần Kaki màu rêu', '', '350000', null, '1', '', '', '40', null, 'quan-kaki-mau-reu-qk161-8268.jpg', '25', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('298', '11', 'Quần Kaki màu xám', '', '350000', null, '1', '', '', '39', null, 'quan-kaki-mau-xam-qk161-8269.jpg', '27', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('299', '11', 'Quần Kaki nâu', '', '350000', null, '1', '', '', '39', null, 'quan-kaki-nau-qk161-8591.jpg', '29', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('300', '11', 'Quần Kaki nâu', '', '350000', null, '1', '', '', '30', null, 'quan-kaki-nau-qk163-8537.jpg', '31', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('301', '11', 'Quần Kaki trắng kem', '', '350000', null, '1', '', '', '40', null, 'quan-kaki-trang-kem-qk162-8274.jpg', '33', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('302', '11', 'Quần Kaki xám Chuột', '', '350000', null, '1', '', '', '39', null, 'quan-kaki-xam-chuot-qk163-8539.jpg', '35', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('303', '11', 'Quần Kaki xanh Biển', '', '350000', null, '1', '', '', '38', null, 'quan-kaki-xanh-bien-qk163-8538.jpg', '37', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('304', '11', 'Quần Kaki xanh Cổ Vịt', '', '350000', null, '1', '', '', '41', null, 'quan-kaki-xanh-co-vit-qk161-8270.jpg', '39', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('305', '11', 'Quần Kaki xanh đen', '', '350000', null, '1', '', '', '40', null, 'quan-kaki-xanh-den-qk161-8271.jpg', '41', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('306', '11', 'Quần Kaki xanh đen', '', '350000', '10', '1', '', '', '39', null, 'quan-kaki-xanh-den-qk162-8314.jpg', '43', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('307', '11', 'Quần Kaki xanh rêu', '', '350000', null, '1', '', '', '38', null, 'quan-kaki-xanh-reu-qk163-8540.jpg', '45', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('308', '11', 'Quần Jogger đỏ Mận', '', '350000', null, '1', '', '', '41', null, 'quan-jogger-do-man-j05-8304.jpg', '51', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('309', '11', 'Quần Jogger Kaki đen', '', '350000', null, '1', '', '', '40', null, 'quan-jogger-kaki-den-j06-8586.jpg', '53', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('310', '11', 'Quần Jogger Kaki đỏ ', '', '350000', null, '1', '', '', '39', null, 'quan-jogger-kaki-do-do-j06-8585.jpg', '55', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('311', '11', 'Quần Jogger Kaki xám Chuột ', '', '350000', null, '1', '', '', '39', null, 'quan-jogger-kaki-xam-chuot-j06-8584.jpg', '61', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('312', '11', 'Quần Jogger Kaki xanh Biển ', '', '350000', '10', '1', '', '', '30', null, 'quan-jogger-kaki-xanh-bien-j06-8589.jpg', '63', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('313', '11', 'Quần Jogger Kaki xanh đen ', '', '350000', null, '1', '', '', '40', null, 'quan-jogger-kaki-xanh-den-j06-8590.jpg', '65', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('314', '11', 'Quần Jogger xám ', '', '350000', null, '1', '', '', '39', null, 'quan-jogger-xam-j05-8326.jpg', '67', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('315', '11', 'Quần Jogger xanh Cổ Vịt ', '', '350000', null, '1', '', '', '38', null, 'quan-jogger-xanh-co-vit-j05-8303.jpg', '69', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('316', '11', 'Quần Jogger xanh đen ', '', '350000', null, '1', '', '', '41', null, 'quan-jogger-xanh-den-j05-8327.jpg', '71', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('317', '12', 'Quần Tây đen Cao Cấp ', '', '350000', null, '1', '', '', '40', null, 'quan-tay-den-cao-cap-qt45-7263.jpg', '2', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('318', '12', 'Quần Tây đen co giãn đỏ đô ', '', '350000', '10', '1', '', '', '39', null, 'quan-tay-den-co-gian-do-do-qt42-7033.jpg', '3', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('319', '12', 'Quần Tây đen co giãn ', '', '350000', null, '1', '', '', '38', null, 'quan-tay-den-co-gian-qt42-7032.jpg', '4', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('320', '12', 'Quần Tây đen ', '', '350000', null, '1', '', '', '41', null, 'quan-tay-den-qt62-8383.jpg', '5', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('321', '12', 'Quần Tây đỏ mận co giãn ', '', '350000', null, '1', '', '', '40', null, 'quan-tay-do-man-co-gian-qt42-7296.jpg', '6', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('322', '12', 'Quần Tây màu bò đậm co giãn ', '', '350000', null, '1', '', '', '39', null, 'quan-tay-mau-bo-dam-co-gian-qt42-7202.jpg', '7', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('323', '12', 'Quần Tây màu cafe co giãn phối túi ', '', '350000', null, '1', '', '', '39', null, 'quan-tay-mau-cafe-co-gian-phoi-tui-qt43-7090.jpg', '8', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('324', '12', 'Quần Tây màu kem ', '', '350000', null, '1', '', '', '30', null, 'quan-tay-mau-kem-qt43-8545.jpg', '9', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('325', '12', 'Quần Tây nâu nhạt ', '', '350000', null, '1', '', '', '40', null, 'quan-tay-nau-nhat-qt43-8546.jpg', '10', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('326', '12', 'Quần Tây nâu ', '', '350000', null, '1', '', '', '39', null, 'quan-tay-nau-qt62-8384.jpg', '11', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('327', '12', 'Quần Tây trắng ', '', '350000', null, '1', '', '', '38', null, 'quan-tay-trang-qt42-8392.jpg', '12', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('328', '12', 'Quần Tây trắng ', '', '350000', null, '1', '', '', '41', null, 'quan-tay-trang-qt42-8393.jpg', '13', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('329', '12', 'Quần Tây xám Chuột co giãn ', '', '350000', null, '1', '', '', '40', null, 'quan-tay-xam-chuot-co-gian-qt42-7542.jpg', '14', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('330', '12', 'Quần Tây xám Chuột co giãn ', '', '350000', null, '1', '', '', '39', null, 'quan-tay-xam-chuot-co-gian-qt42-7543.jpg', '15', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('331', '12', 'Quần Tây xanh Cổ Vịt ', '', '350000', null, '1', '', '', '38', null, 'quan-tay-xanh-co-vit-qt42-8394.jpg', '16', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('332', '12', 'Quần Tây xanh Cổ Vịt ', '', '350000', null, '1', '', '', '41', null, 'quan-tay-xanh-co-vit-qt62-8385.jpg', '17', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('333', '12', 'Quần Tây xanh đen Cao Cấp ', '', '350000', null, '1', '', '', '40', null, 'quan-tay-xanh-den-cao-cap-qt45-7262.jpg', '18', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('334', '12', 'Quần Tây xanh đen co giãn phối túi ', '', '350000', null, '1', '', '', '39', null, 'quan-tay-xanh-den-co-gian-phoi-tui-qt43-6932.jpg', '19', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('335', '12', 'Quần Tây xanh đen co giãn ', '', '350000', null, '1', '', '', '39', null, 'quan-tay-xanh-den-co-gian-qt42-7295.jpg', '20', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('336', '12', 'Quần Tây xanh rêu co giãn phối túi ', '', '350000', '10', '1', '', '', '30', null, 'quan-tay-xanh-reu-co-gian-phoi-tui-qt43-6933.jpg', '21', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('337', '13', 'Quần Short Jean đen ', '', '350000', null, '1', '', '', '40', null, 'quan-short-jean-den-qs67-6757.jpg', '25', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('338', '13', 'Quần Short Jean đen ', '', '350000', null, '1', '', '', '39', null, 'quan-short-jean-den-qs71-6761.jpg', '2', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('339', '13', 'Quần Short Jean đen ', '', '350000', null, '1', '', '', '38', null, 'quan-short-jean-den-qs87-7927.jpg', '4', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('340', '13', 'Quần Short Jean xám ', '', '350000', null, '1', '', '', '41', null, 'quan-short-jean-xam-qs85-7898.jpg', '6', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('341', '13', 'Quần Short Jean xanh da trời ', '', '350000', null, '1', '', '', '40', null, 'quan-short-jean-xanh-da-troi-qs67-6758.jpg', '8', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('342', '13', 'Quần Short Jean xanh da trời ', '', '350000', '10', '1', '', '', '39', null, 'quan-short-jean-xanh-da-troi-qs69-6760.jpg', '10', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('343', '13', 'Quần Short Jean xanh đen đậm ', '', '350000', null, '1', '', '', '38', null, 'quan-short-jean-xanh-den-dam-qs82-7842.jpg', '12', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('344', '13', 'Quần Short Jean xanh đen đậm ', '', '350000', null, '1', '', '', '41', null, 'quan-short-jean-xanh-den-dam-qs90-8137.jpg', '14', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('345', '13', 'Quần Short Jean xanh đen ', '', '350000', null, '1', '', '', '40', null, 'quan-short-jean-xanh-den-qs82-7841.jpg', '16', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('346', '13', 'Quần Short Jean xanh đen ', '', '350000', null, '1', '', '', '39', null, 'quan-short-jean-xanh-den-qs83-7865.jpg', '18', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('347', '13', 'Quần Short Jean xanh đen ', '', '350000', null, '1', '', '', '39', null, 'quan-short-jean-xanh-den-qs86-7899.jpg', '20', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('348', '13', 'Quần Short Jean xanh đen ', '', '350000', '10', '1', '', '', '30', null, 'quan-short-jean-xanh-den-qs90-8136.jpg', '22', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('349', '13', 'Quần Short Jean xanh dương ', '', '350000', null, '1', '', '', '40', null, 'quan-short-jean-xanh-duong-qs83-7843.jpg', '24', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('350', '13', 'Quần Short Jean xanh ', '', '350000', null, '1', '', '', '39', null, 'quan-short-jean-xanh-qs68-6759.jpg', '26', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('351', '13', 'Quần Short Jean xanh ', '', '350000', null, '1', '', '', '38', null, 'quan-short-jean-xanh-qs82-7857.JPG', '28', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('352', '13', 'Quần Short Jean xanh ', '', '350000', null, '1', '', '', '41', null, 'quan-short-jean-xanh-qs84-7897.jpg', '30', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('353', '13', 'Quần Short Jean xanh ', '', '350000', null, '1', '', '', '40', null, 'quan-short-jean-xanh-qs92-8543.jpg', '32', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('354', '13', 'Quần Short Jean xanh ', '', '350000', null, '1', '', '', '39', null, 'quan-short-jean-xanh-qs93-8544.jpg', '34', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('355', '13', 'Quần Short Kaki đen', '', '350000', null, '1', '', '', '38', null, 'quan-short-kaki-den-qs72-6767.jpg', '8', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('356', '13', 'Quần Short Kaki đỏ nâu', '', '350000', null, '1', '', '', '41', null, 'quan-short-kaki-do-nau-qs72-6762.jpg', '10', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('357', '13', 'Quần Short Kaki kem', '', '350000', null, '1', '', '', '40', null, 'quan-short-kaki-kem-qs76-7579.jpg', '12', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('358', '13', 'Quần Short Kaki trắng kem', '', '350000', null, '1', '', '', '39', null, 'quan-short-kaki-trang-kem-qs76-7578.jpg', '14', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('359', '13', 'Quần Short Kaki trắng xám', '', '350000', null, '1', '', '', '39', null, 'quan-short-kaki-trang-xam-qs81-7582.jpg', '16', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('360', '13', 'Quần Short Kaki vàng kem', '', '350000', null, '1', '', '', '30', null, 'quan-short-kaki-vang-kem-qs76-8138.jpg', '18', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('361', '13', 'Quần Short Kaki vàng kem', '', '350000', null, '1', '', '', '40', null, 'quan-short-kaki-vang-kem-qs88-8139.jpg', '20', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('362', '13', 'Quần Short Kaki xám xanh', '', '350000', null, '1', '', '', '39', null, 'quan-short-kaki-xam-xanh-qs81-7583.jpg', '22', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('363', '13', 'Quần Short Kaki xanh bích', '', '350000', null, '1', '', '', '38', null, 'quan-short-kaki-xanh-bich-qs72-6763.jpg', '24', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('364', '13', 'Quần Short Kaki xanh Cổ Vịt', '', '350000', null, '1', '', '', '41', null, 'quan-short-kaki-xanh-co-vit-qs72-7645.jpg', '26', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('365', '13', 'Quần Short Kaki xanh da trời', '', '350000', null, '1', '', '', '40', null, 'quan-short-kaki-xanh-da-troi-qs76-7577.jpg', '28', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('366', '13', 'Quần Short Kaki xanh da trời', '', '350000', '10', '1', '', '', '39', null, 'quan-short-kaki-xanh-da-troi-qs79-7581.jpg', '30', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('367', '13', 'Quần Short Kaki xanh lá cây', '', '350000', null, '1', '', '', '38', null, 'quan-short-kaki-xanh-la-cay-qs72-6765.jpg', '32', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('368', '13', 'Quần Short thun đen ', '', '350000', null, '1', '', '', '41', null, 'quan-short-thun-den-qs45-4822.jpg', '34', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('369', '13', 'Quần Short thun đen có logo ', '', '350000', null, '1', '', '', '40', null, 'quan-short-thun-den-qs48-4825.jpg', '30', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('370', '13', 'Quần Short thun xanh đen có logo ', '', '350000', null, '1', '', '', '39', null, 'quan-short-thun-xanh-den-qs42-4819.jpg', '32', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('371', '13', 'Quần Short thun xanh ngọc ', '', '350000', null, '1', '', '', '39', null, 'quan-short-thun-xanh-ngoc-qs34-4489.jpg', '34', '2017-04-06 08:32:32');
INSERT INTO `product` VALUES ('374', '7', 'Áo Khoác Gió Xanh Nhạt', null, '150000', '10', '1', null, null, null, null, '', '0', '0000-00-00 00:00:00');
INSERT INTO `product` VALUES ('375', '7', 'Áo Khoác Gió Xanh Nhạt', null, '150000', '10', '1', null, null, null, null, '', '0', '0000-00-00 00:00:00');
INSERT INTO `product` VALUES ('376', '7', 'Áo Khoác Gió Xanh Nhạt', null, '150000', '10', '1', null, null, null, null, '', '0', '0000-00-00 00:00:00');
INSERT INTO `product` VALUES ('377', '7', 'Áo Khoác Gió Xanh Nhạt', null, '150000', '10', '1', null, null, null, null, '', '0', '0000-00-00 00:00:00');
INSERT INTO `product` VALUES ('378', '7', 'Áo Khoác Gió Xanh Nhạt', null, '150000', '10', '1', null, null, null, null, '', '0', '0000-00-00 00:00:00');
INSERT INTO `product` VALUES ('379', '7', 'Áo Khoác Gió Xanh Nhạt', null, '150000', '10', '1', null, null, null, null, '', '0', '0000-00-00 00:00:00');
INSERT INTO `product` VALUES ('382', '5', 'Áo sơ mi trắng đen', null, '1200000', '15', '15', null, null, null, null, 'a1.jpg', '0', '0000-00-00 00:00:00');

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `RoleID` int(11) NOT NULL AUTO_INCREMENT,
  `RoleName` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Description` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`RoleID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES ('1', 'Người quản trị hệ thống', null);
INSERT INTO `role` VALUES ('2', 'Nhân viên', null);
