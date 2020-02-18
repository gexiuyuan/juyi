/*
 Navicat Premium Data Transfer

 Source Server         : xiangyi
 Source Server Type    : MySQL
 Source Server Version : 100137
 Source Host           : localhost:3306
 Source Schema         : juyi

 Target Server Type    : MySQL
 Target Server Version : 100137
 File Encoding         : 65001

 Date: 17/02/2020 10:45:49
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for activity
-- ----------------------------
DROP TABLE IF EXISTS `activity`;
CREATE TABLE `activity`  (
  `activity_id` int(10) NULL DEFAULT NULL,
  `organization` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci NULL DEFAULT NULL,
  `person` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci NULL DEFAULT NULL,
  `telephone` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci NULL DEFAULT NULL,
  `address` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci NULL DEFAULT NULL,
  `introduce` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci NULL DEFAULT NULL,
  `title` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci NULL DEFAULT NULL,
  `subtitle` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci NULL DEFAULT NULL,
  `reciver` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci NULL DEFAULT NULL,
  `pulishtime` datetime(0) NULL DEFAULT NULL,
  `stoptime` datetime(0) NULL DEFAULT NULL,
  `volunteertime` time(0) NULL DEFAULT NULL,
  `offtime` datetime(0) NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_mysql500_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of activity
-- ----------------------------
INSERT INTO `activity` VALUES (0, '向日葵爱心助学志愿者协会', '何越兰', '18905719797', '杭州市余杭去五常街道西溪艺术集合27栋', '这是向日葵爱心伙伴十周年聚会活动，我们将发起为大山里的孩子的教室里捐赠图书角，有书可读，读上好书是我们对孩子们最大的祝福，在下一个十年，我们希望把向日葵的花朵栽种到孩子们的每个教师，让原本空荡荡的教室变得更加温馨，让孩子们可以每月至少读1本书！', '公益聚会', '为大山里的孩子捐书', '138 8783 5471', '2020-02-01 20:36:47', '2020-02-01 17:00:40', '00:00:00', NULL);
INSERT INTO `activity` VALUES (1, '北山街道曲院社区工委', '邱佳琪', '15158100380', '浙江省杭州市西湖区白沙泉路46号曲院社区', '曲院社区垃圾分类志愿活动早班主要是在早上7点30分到8点30分之间，在曙光路沿线站房开展垃圾分类督导，帮助居民完成正确分类。', '环境保护', '曲院社区垃圾分类志愿服务', '159 2504 6945', NULL, '2020-02-01 16:58:00', '00:00:00', NULL);
INSERT INTO `activity` VALUES (2, '花开岭', '汪丽丽', '18768112165', '富阳公交站', '2020年富阳区“青春志愿行·温暖回家路”春运志愿服务活动。活动时间:1.6，1.13，1.19，上午7:00-9:00。活动内容:咨询向导、安检协助、行李帮提、老弱帮扶等志愿服务活动。', '大型活动', '花开岭青春志愿行.温暖回家路', '138 8783 5471', NULL, '2020-02-01 17:15:28', '00:00:00', NULL);
INSERT INTO `activity` VALUES (4, '小开心', '小路', '138 8783 5471', '自贡', 'hello', '天', NULL, '138 8783 5471', '2020-02-16 17:51:47', '2020-02-16 21:00:16', '11:08:29', NULL);
INSERT INTO `activity` VALUES (5, '指派', '胡小双', '111 1111 1111', '广州', '很好', '敬老院', NULL, '138 8783 5471', '2020-02-17 00:10:53', '2020-02-17 00:11:40', '08:47:00', '2020-02-17 16:09:45');
INSERT INTO `activity` VALUES (5, '杭州市党群服务中心', '胡小爽', '0571 8791 0314', '杭州市', '杭州市党群服务中心面向社会群体公开招募志愿者啦！具体招募要求如下：\r\n\r\n一、服务时间地点\r\n\r\n1.时间：8：45-17:00（含中餐）\r\n\r\n2.地点：杭州市党群服务中心（城市阳台）', '杭州市堂群服务中心志', '大型活动', NULL, '2020-02-17 00:22:16', NULL, NULL, '2020-02-17 00:22:32');
INSERT INTO `activity` VALUES (6, '房贷首付', '分段式', '111 1111 1111', 'fds', 'fdsf', '分段式', NULL, NULL, '2020-02-17 09:30:41', NULL, NULL, '2020-02-17 01:30:27');
INSERT INTO `activity` VALUES (7, '东林', '隔墙', '138 8783 5471', '哈尔滨市', '党群服务中心面向社会群体公开招募志愿者啦！具体招募要求如下：\n', '敬老院', NULL, NULL, '2020-02-17 10:38:33', NULL, NULL, '2020-02-17 05:37:18');

-- ----------------------------
-- Table structure for organizes
-- ----------------------------
DROP TABLE IF EXISTS `organizes`;
CREATE TABLE `organizes`  (
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci NOT NULL,
  `qq` int(25) NULL DEFAULT NULL,
  PRIMARY KEY (`name`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_mysql500_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of organizes
-- ----------------------------
INSERT INTO `organizes` VALUES ('北山街道宝石社区团工委', 2147483647);
INSERT INTO `organizes` VALUES ('杭州市上城区情欲公益服务中心', 1986261536);
INSERT INTO `organizes` VALUES ('浙江省向日葵爱心学助志愿者协会', 1756518237);

-- ----------------------------
-- Table structure for pulishusers
-- ----------------------------
DROP TABLE IF EXISTS `pulishusers`;
CREATE TABLE `pulishusers`  (
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci NULL DEFAULT NULL,
  `credit` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci NULL DEFAULT NULL,
  `nickname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci NULL DEFAULT NULL,
  PRIMARY KEY (`phone`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_mysql500_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of pulishusers
-- ----------------------------
INSERT INTO `pulishusers` VALUES ('159 2504 6945', '4d5abf8b48776f6cc4f6f9c647feeb22', NULL, NULL);

-- ----------------------------
-- Table structure for rootuser
-- ----------------------------
DROP TABLE IF EXISTS `rootuser`;
CREATE TABLE `rootuser`  (
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_mysql500_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of rootuser
-- ----------------------------
INSERT INTO `rootuser` VALUES ('root', 'admin');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `phone` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci NOT NULL COMMENT '志愿者电话号码',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci NULL DEFAULT NULL COMMENT '密码',
  `credit` int(100) NULL DEFAULT NULL,
  `volunteertime` time(0) NULL DEFAULT NULL,
  `nickname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci NULL DEFAULT NULL,
  `special` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci NULL DEFAULT NULL,
  `major` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci NULL DEFAULT NULL,
  `experience` int(10) NULL DEFAULT NULL,
  PRIMARY KEY (`phone`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_mysql500_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('138 8783 5471', 'c4ca4238a0b923820dcc509a6f75849b', 100, '11:08:29', '小金鱼', '打乒乓球', '新馆', 0);
INSERT INTO `users` VALUES ('159 2504 6945', '5923699847bb77c1416ba8ebf940f248', 100, '16:29:38', '小金鱼', '打篮球', '软件工程', 0);
INSERT INTO `users` VALUES ('189 4506 7428', '4d5abf8b48776f6cc4f6f9c647feeb22', 100, '16:30:51', '喜哦', '唱作', '专业', 0);
INSERT INTO `users` VALUES ('189 4508 3358', 'c4ca4238a0b923820dcc509a6f75849b', 100, '00:00:00', NULL, NULL, NULL, NULL);

SET FOREIGN_KEY_CHECKS = 1;
