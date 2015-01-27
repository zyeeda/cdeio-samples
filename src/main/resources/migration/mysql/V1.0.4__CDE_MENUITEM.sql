# ************************************************************
# Sequel Pro SQL dump
# Version 4096
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: 127.0.0.1 (MySQL 5.6.20)
# Database: cdeio-samples
# Generation Time: 2014-09-22 14:11:05 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table CDE_MENUITEM
# ------------------------------------------------------------

LOCK TABLES `CDE_MENUITEM` WRITE;
/*!40000 ALTER TABLE `CDE_MENUITEM` DISABLE KEYS */;

INSERT INTO `CDE_MENUITEM` (`F_ID`, `F_DESC`, `F_ICON`, `F_NAME`, `F_OPENED`, `F_OPTION`, `F_PATH`, `F_RANK`, `F_PARENT_ID`)
VALUES
	('100','动态脚手架','icon-key','动态脚手架',0,NULL,'#',25,NULL),
	('100001001','基础','undefined','基础',0,NULL,'#',30,'100'),
	('100001001001','最简配置','green icon-key','最简配置',0,NULL,'#feature/scaffold/basic/scaffold:basic-todo',35,'100001001'),
	('100001001002','Json 序列化','green icon-key','Json 序列化',0,NULL,'#feature/scaffold/basic/scaffold:todo',40,'100001001'),
	('100001001003','标签','green icon-bookmark','标签',0,NULL,'#feature/scaffold/basic/scaffold:tag',45,'100001001'),
	('100001002','列表','undefined','列表',0,NULL,'#',50,'100'),
	('100001002001','基础','green icon-key','基础',0,NULL,'#feature/scaffold/grid/scaffold:todo',55,'100001002'),
	('100001002002001','过滤器','green icon-filter','过滤器',0,NULL,'#feature/scaffold/grid/scaffold:grid-user',60,'100001002'),
	('100001002002002','查询条件','green icon-key','查询条件',0,NULL,'#feature/scaffold/grid/scaffold:user',65,'100001002'),
	('100001003','树','undefined','树',0,NULL,'#',70,'100'),
	('100001003001','基础','green icon-key','基础',0,NULL,'#feature/scaffold/tree/scaffold:basic',75,'100001003'),
	('100001004','表单','undefined','表单',0,NULL,'#',95,'100'),
	('100001004001','基础','green icon-key','基础',0,NULL,'#feature/scaffold/form/scaffold:user',100,'100001004'),
	('100001004002','分组','green icon-key','分组',0,NULL,'#feature/scaffold/form/scaffold:todo',105,'100001004'),
	('100001004003','页签','green icon-key','页签',0,NULL,'#feature/scaffold/form/scaffold:project',110,'100001004'),
	('100001005','操作按钮','undefined','操作按钮',0,NULL,'#feature/scaffold/button/scaffold:basic',115,'100'),
	('100001006','hooks','undefined','hooks',0,NULL,'#feature/scaffold/hooks/scaffold:todo',120,'100'),
	('100001007','自定义验证规则','undefined','自定义验证规则',0,NULL,'#feature/scaffold/validators/scaffold:user',125,'100'),
	('100001008','工作流','undefined','工作流',0,NULL,'#/',130,'100'),
	('100001009','字段','undefined','字段',0,NULL,'#',80,'100'),
	('100001009001','基础','green icon-key','基础',0,NULL,'#feature/scaffold/field/scaffold:todo',85,'100001009'),
	('100001009002','GridPicker','green icon-key','GridPicker',0,NULL,'#feature/scaffold/field/scaffold:task',305,'100001009'),	
	('100001009008','验证规则','green icon-key','验证规则',0,NULL,'#feature/scaffold/field/scaffold:account',90,'100001009'),
	('300001','任务','green icon-key','任务',0,NULL,'#/',135,'100001008'),
	('300001001','人工任务','green icon-key','人工任务',0,NULL,'#feature/generate/bpm/task/scaffold:userTask',140,'300001'),
	('300001002','召回','green icon-key','召回',0,NULL,'#feature/generate/bpm/task/scaffold:callback',145,'300001'),
	('300001003','回退','green icon-key','回退',0,NULL,'#feature/generate/bpm/task/scaffold:reject',150,'300001'),
	('300002','网关','green icon-key','网关',0,NULL,'#/',155,'100001008'),
	('300002001','排他网关','green icon-key','排他网关',0,NULL,'#feature/generate/bpm/gateway/scaffold:exclusive',160,'300002'),
	('300002002','并行网关','green icon-key','并行网关',0,NULL,'#feature/generate/bpm/gateway/scaffold:parallel',165,'300002'),
	('300003','监听','green icon-key','监听',0,NULL,'#/',170,'100001008'),
	('300003001','流程监听','green icon-key','流程监听',0,NULL,'#feature/generate/bpm/listener/scaffold:execution',175,'300003'),
	('300003002','任务监听','green icon-key','任务监听',0,NULL,'#feature/generate/bpm/listener/scaffold:task',180,'300003'),
	('300004','子流程','green icon-key','子流程',0,NULL,'#/',185,'100001008'),
	('300004001','嵌入式子流程','green icon-key','嵌入式子流程',0,NULL,'#feature/generate/bpm/subprocess/scaffold:embedded',190,'300004'),
	('300005','多实例','green icon-key','多实例',0,NULL,'#/',195,'100001008'),
	('300005001','子流程','green icon-key','子流程',0,NULL,'#feature/generate/bpm/multiple/scaffold:subprocess',200,'300005'),
	('300005002','人工任务','green icon-key','人工任务',0,NULL,'#feature/generate/bpm/multiple/scaffold:userTask',205,'300005'),
	('400','扩展','icon-key','扩展',0,NULL,'#',210,NULL),
	('400001','后端功能','undefined','后端功能',0,NULL,'#/',215,'400'),
	('400001001','基础','green icon-key','基础',0,NULL,'#feature/extension/service/scaffold:basic',220,'400001'),
	('400001003','文件下载','green icon-cloud-download','文件下载',0,NULL,'#feature/extension/service/scaffold:downloadfile',225,'400001'),
	('400001004','文件上传','green icon-cloud-upload','文件上传',0,NULL,'#feature/extension/service/scaffold:uploadfile',230,'400001'),
	('400001005','SQL 查询','green icon-key','SQL 查询',0,NULL,'#feature/extension/service/scaffold:sqlquery',235,'400001'),
	('400002','前端界面','undefined','前端界面',0,NULL,'#/',240,'400'),
	('400002001','基础','green icon-key','基础',0,NULL,'#feature/extension/ui/scaffold:basic',245,'400002'),
	('400002002','路由','green icon-key','路由',0,NULL,'#feature/extension/ui/scaffold:router',250,'400002'),
	('400002004','自定义表单视图','green icon-key','自定义表单视图',0,NULL,'#feature/extension/ui/scaffold:custom-form',255,'400002'),
	('400002005','自定义视图','green icon-key','自定义视图',0,NULL,'#feature/extension/ui/custom-view',260,'400002'),
	('400002006','回调','green icon-key','回调',0,NULL,'#feature/extension/ui/scaffold:call-back',265,'400002'),
	('400003','树','undefined','树',0,NULL,'#',270,'400'),
	('400003001','图标','green icon-key','图标',0,NULL,'#feature/extension/tree/scaffold:icon',275,'400003'),
	('400003002','事件','green icon-key','事件',0,NULL,'#feature/extension/tree/scaffold:event',280,'400003'),
	('500','报表','icon-bar-chart','报表',0,NULL,'#',285,NULL),
	('500001','基础','undefined','基础',0,NULL,'#report/birt-examples/basic',290,'500'),
	('500002','参数','undefined','参数',0,NULL,'#report/birt-examples/params',295,'500'),
	('500003','自定义参数','undefined','自定义参数',0,NULL,'#report/birt-examples/custom-params',300,'500'),
	('700','欢迎','icon-home','欢迎',0,NULL,'#',0,NULL),
	('800','实体','icon-key','实体',0,NULL,'#',5,NULL),
	('800002','JPA','undefined','JPA',0,NULL,'#feature/entity/scaffold:foo',15,'800'),
	('800003','Scaffold 注解','undefined','Scaffold 注解',0,NULL,'#feature/entity/scaffold:test',10,'800'),
	('800004','Bean Validation','undefined','Bean Validation',0,NULL,'#feature/entity/scaffold:bar',20,'800');

/*!40000 ALTER TABLE `CDE_MENUITEM` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
