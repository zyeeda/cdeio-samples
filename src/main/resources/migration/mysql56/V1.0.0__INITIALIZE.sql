-- MySQL dump 10.13  Distrib 5.6.20, for osx10.9 (x86_64)
--
-- Host: localhost    Database: cdeio-samples
-- ------------------------------------------------------
-- Server version	5.6.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `cdeio-samples`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `cdeio-samples` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `cdeio-samples`;

--
-- Table structure for table `ACT_GE_BYTEARRAY`
--

DROP TABLE IF EXISTS `ACT_GE_BYTEARRAY`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ACT_GE_BYTEARRAY` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `REV_` int(11) DEFAULT NULL,
  `NAME_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `DEPLOYMENT_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `BYTES_` longblob,
  `GENERATED_` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`ID_`),
  KEY `ACT_FK_BYTEARR_DEPL` (`DEPLOYMENT_ID_`),
  CONSTRAINT `ACT_FK_BYTEARR_DEPL` FOREIGN KEY (`DEPLOYMENT_ID_`) REFERENCES `ACT_RE_DEPLOYMENT` (`ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ACT_GE_PROPERTY`
--

DROP TABLE IF EXISTS `ACT_GE_PROPERTY`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ACT_GE_PROPERTY` (
  `NAME_` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `VALUE_` varchar(300) COLLATE utf8_bin DEFAULT NULL,
  `REV_` int(11) DEFAULT NULL,
  PRIMARY KEY (`NAME_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ACT_HI_ACTINST`
--

DROP TABLE IF EXISTS `ACT_HI_ACTINST`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ACT_HI_ACTINST` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL,
  `PROC_DEF_ID_` varchar(64) COLLATE utf8_bin NOT NULL,
  `PROC_INST_ID_` varchar(64) COLLATE utf8_bin NOT NULL,
  `EXECUTION_ID_` varchar(64) COLLATE utf8_bin NOT NULL,
  `ACT_ID_` varchar(255) COLLATE utf8_bin NOT NULL,
  `TASK_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `CALL_PROC_INST_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `ACT_NAME_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `ACT_TYPE_` varchar(255) COLLATE utf8_bin NOT NULL,
  `ASSIGNEE_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `START_TIME_` datetime(3) NOT NULL,
  `END_TIME_` datetime(3) DEFAULT NULL,
  `DURATION_` bigint(20) DEFAULT NULL,
  `TENANT_ID_` varchar(255) COLLATE utf8_bin DEFAULT '',
  PRIMARY KEY (`ID_`),
  KEY `ACT_IDX_HI_ACT_INST_START` (`START_TIME_`),
  KEY `ACT_IDX_HI_ACT_INST_END` (`END_TIME_`),
  KEY `ACT_IDX_HI_ACT_INST_PROCINST` (`PROC_INST_ID_`,`ACT_ID_`),
  KEY `ACT_IDX_HI_ACT_INST_EXEC` (`EXECUTION_ID_`,`ACT_ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ACT_HI_ATTACHMENT`
--

DROP TABLE IF EXISTS `ACT_HI_ATTACHMENT`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ACT_HI_ATTACHMENT` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL,
  `REV_` int(11) DEFAULT NULL,
  `USER_ID_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `NAME_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `DESCRIPTION_` varchar(4000) COLLATE utf8_bin DEFAULT NULL,
  `TYPE_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `TASK_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `PROC_INST_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `URL_` varchar(4000) COLLATE utf8_bin DEFAULT NULL,
  `CONTENT_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ACT_HI_COMMENT`
--

DROP TABLE IF EXISTS `ACT_HI_COMMENT`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ACT_HI_COMMENT` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL,
  `TYPE_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `TIME_` datetime(3) NOT NULL,
  `USER_ID_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `TASK_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `PROC_INST_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `ACTION_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `MESSAGE_` varchar(4000) COLLATE utf8_bin DEFAULT NULL,
  `FULL_MSG_` longblob,
  PRIMARY KEY (`ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ACT_HI_DETAIL`
--

DROP TABLE IF EXISTS `ACT_HI_DETAIL`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ACT_HI_DETAIL` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL,
  `TYPE_` varchar(255) COLLATE utf8_bin NOT NULL,
  `PROC_INST_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `EXECUTION_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `TASK_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `ACT_INST_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `NAME_` varchar(255) COLLATE utf8_bin NOT NULL,
  `VAR_TYPE_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `REV_` int(11) DEFAULT NULL,
  `TIME_` datetime(3) NOT NULL,
  `BYTEARRAY_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `DOUBLE_` double DEFAULT NULL,
  `LONG_` bigint(20) DEFAULT NULL,
  `TEXT_` varchar(4000) COLLATE utf8_bin DEFAULT NULL,
  `TEXT2_` varchar(4000) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`ID_`),
  KEY `ACT_IDX_HI_DETAIL_PROC_INST` (`PROC_INST_ID_`),
  KEY `ACT_IDX_HI_DETAIL_ACT_INST` (`ACT_INST_ID_`),
  KEY `ACT_IDX_HI_DETAIL_TIME` (`TIME_`),
  KEY `ACT_IDX_HI_DETAIL_NAME` (`NAME_`),
  KEY `ACT_IDX_HI_DETAIL_TASK_ID` (`TASK_ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ACT_HI_IDENTITYLINK`
--

DROP TABLE IF EXISTS `ACT_HI_IDENTITYLINK`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ACT_HI_IDENTITYLINK` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `GROUP_ID_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `TYPE_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `USER_ID_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `TASK_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `PROC_INST_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`ID_`),
  KEY `ACT_IDX_HI_IDENT_LNK_USER` (`USER_ID_`),
  KEY `ACT_IDX_HI_IDENT_LNK_TASK` (`TASK_ID_`),
  KEY `ACT_IDX_HI_IDENT_LNK_PROCINST` (`PROC_INST_ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ACT_HI_PROCINST`
--

DROP TABLE IF EXISTS `ACT_HI_PROCINST`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ACT_HI_PROCINST` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL,
  `PROC_INST_ID_` varchar(64) COLLATE utf8_bin NOT NULL,
  `BUSINESS_KEY_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `PROC_DEF_ID_` varchar(64) COLLATE utf8_bin NOT NULL,
  `START_TIME_` datetime(3) NOT NULL,
  `END_TIME_` datetime(3) DEFAULT NULL,
  `DURATION_` bigint(20) DEFAULT NULL,
  `START_USER_ID_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `START_ACT_ID_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `END_ACT_ID_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `SUPER_PROCESS_INSTANCE_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `DELETE_REASON_` varchar(4000) COLLATE utf8_bin DEFAULT NULL,
  `TENANT_ID_` varchar(255) COLLATE utf8_bin DEFAULT '',
  PRIMARY KEY (`ID_`),
  UNIQUE KEY `PROC_INST_ID_` (`PROC_INST_ID_`),
  KEY `ACT_IDX_HI_PRO_INST_END` (`END_TIME_`),
  KEY `ACT_IDX_HI_PRO_I_BUSKEY` (`BUSINESS_KEY_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ACT_HI_TASKINST`
--

DROP TABLE IF EXISTS `ACT_HI_TASKINST`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ACT_HI_TASKINST` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL,
  `PROC_DEF_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `TASK_DEF_KEY_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `PROC_INST_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `EXECUTION_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `NAME_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `PARENT_TASK_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `DESCRIPTION_` varchar(4000) COLLATE utf8_bin DEFAULT NULL,
  `OWNER_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `ASSIGNEE_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `START_TIME_` datetime(3) NOT NULL,
  `CLAIM_TIME_` datetime(3) DEFAULT NULL,
  `END_TIME_` datetime(3) DEFAULT NULL,
  `DURATION_` bigint(20) DEFAULT NULL,
  `DELETE_REASON_` varchar(4000) COLLATE utf8_bin DEFAULT NULL,
  `PRIORITY_` int(11) DEFAULT NULL,
  `DUE_DATE_` datetime(3) DEFAULT NULL,
  `FORM_KEY_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `CATEGORY_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `TENANT_ID_` varchar(255) COLLATE utf8_bin DEFAULT '',
  PRIMARY KEY (`ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ACT_HI_VARINST`
--

DROP TABLE IF EXISTS `ACT_HI_VARINST`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ACT_HI_VARINST` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL,
  `PROC_INST_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `EXECUTION_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `TASK_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `NAME_` varchar(255) COLLATE utf8_bin NOT NULL,
  `VAR_TYPE_` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `REV_` int(11) DEFAULT NULL,
  `BYTEARRAY_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `DOUBLE_` double DEFAULT NULL,
  `LONG_` bigint(20) DEFAULT NULL,
  `TEXT_` varchar(4000) COLLATE utf8_bin DEFAULT NULL,
  `TEXT2_` varchar(4000) COLLATE utf8_bin DEFAULT NULL,
  `CREATE_TIME_` datetime(3) DEFAULT NULL,
  `LAST_UPDATED_TIME_` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`ID_`),
  KEY `ACT_IDX_HI_PROCVAR_PROC_INST` (`PROC_INST_ID_`),
  KEY `ACT_IDX_HI_PROCVAR_NAME_TYPE` (`NAME_`,`VAR_TYPE_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ACT_ID_GROUP`
--

DROP TABLE IF EXISTS `ACT_ID_GROUP`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ACT_ID_GROUP` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `REV_` int(11) DEFAULT NULL,
  `NAME_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `TYPE_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ACT_ID_INFO`
--

DROP TABLE IF EXISTS `ACT_ID_INFO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ACT_ID_INFO` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `REV_` int(11) DEFAULT NULL,
  `USER_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `TYPE_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `KEY_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `VALUE_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `PASSWORD_` longblob,
  `PARENT_ID_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ACT_ID_MEMBERSHIP`
--

DROP TABLE IF EXISTS `ACT_ID_MEMBERSHIP`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ACT_ID_MEMBERSHIP` (
  `USER_ID_` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `GROUP_ID_` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  PRIMARY KEY (`USER_ID_`,`GROUP_ID_`),
  KEY `ACT_FK_MEMB_GROUP` (`GROUP_ID_`),
  CONSTRAINT `ACT_FK_MEMB_GROUP` FOREIGN KEY (`GROUP_ID_`) REFERENCES `ACT_ID_GROUP` (`ID_`),
  CONSTRAINT `ACT_FK_MEMB_USER` FOREIGN KEY (`USER_ID_`) REFERENCES `ACT_ID_USER` (`ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ACT_ID_USER`
--

DROP TABLE IF EXISTS `ACT_ID_USER`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ACT_ID_USER` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `REV_` int(11) DEFAULT NULL,
  `FIRST_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `LAST_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `EMAIL_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `PWD_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `PICTURE_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ACT_RE_DEPLOYMENT`
--

DROP TABLE IF EXISTS `ACT_RE_DEPLOYMENT`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ACT_RE_DEPLOYMENT` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `NAME_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `CATEGORY_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `TENANT_ID_` varchar(255) COLLATE utf8_bin DEFAULT '',
  `DEPLOY_TIME_` timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ACT_RE_MODEL`
--

DROP TABLE IF EXISTS `ACT_RE_MODEL`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ACT_RE_MODEL` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL,
  `REV_` int(11) DEFAULT NULL,
  `NAME_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `KEY_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `CATEGORY_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `CREATE_TIME_` timestamp(3) NULL DEFAULT NULL,
  `LAST_UPDATE_TIME_` timestamp(3) NULL DEFAULT NULL,
  `VERSION_` int(11) DEFAULT NULL,
  `META_INFO_` varchar(4000) COLLATE utf8_bin DEFAULT NULL,
  `DEPLOYMENT_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `EDITOR_SOURCE_VALUE_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `EDITOR_SOURCE_EXTRA_VALUE_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `TENANT_ID_` varchar(255) COLLATE utf8_bin DEFAULT '',
  PRIMARY KEY (`ID_`),
  KEY `ACT_FK_MODEL_SOURCE` (`EDITOR_SOURCE_VALUE_ID_`),
  KEY `ACT_FK_MODEL_SOURCE_EXTRA` (`EDITOR_SOURCE_EXTRA_VALUE_ID_`),
  KEY `ACT_FK_MODEL_DEPLOYMENT` (`DEPLOYMENT_ID_`),
  CONSTRAINT `ACT_FK_MODEL_DEPLOYMENT` FOREIGN KEY (`DEPLOYMENT_ID_`) REFERENCES `ACT_RE_DEPLOYMENT` (`ID_`),
  CONSTRAINT `ACT_FK_MODEL_SOURCE` FOREIGN KEY (`EDITOR_SOURCE_VALUE_ID_`) REFERENCES `ACT_GE_BYTEARRAY` (`ID_`),
  CONSTRAINT `ACT_FK_MODEL_SOURCE_EXTRA` FOREIGN KEY (`EDITOR_SOURCE_EXTRA_VALUE_ID_`) REFERENCES `ACT_GE_BYTEARRAY` (`ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ACT_RE_PROCDEF`
--

DROP TABLE IF EXISTS `ACT_RE_PROCDEF`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ACT_RE_PROCDEF` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL,
  `REV_` int(11) DEFAULT NULL,
  `CATEGORY_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `NAME_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `KEY_` varchar(255) COLLATE utf8_bin NOT NULL,
  `VERSION_` int(11) NOT NULL,
  `DEPLOYMENT_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `RESOURCE_NAME_` varchar(4000) COLLATE utf8_bin DEFAULT NULL,
  `DGRM_RESOURCE_NAME_` varchar(4000) COLLATE utf8_bin DEFAULT NULL,
  `DESCRIPTION_` varchar(4000) COLLATE utf8_bin DEFAULT NULL,
  `HAS_START_FORM_KEY_` tinyint(4) DEFAULT NULL,
  `SUSPENSION_STATE_` int(11) DEFAULT NULL,
  `TENANT_ID_` varchar(255) COLLATE utf8_bin DEFAULT '',
  PRIMARY KEY (`ID_`),
  UNIQUE KEY `ACT_UNIQ_PROCDEF` (`KEY_`,`VERSION_`,`TENANT_ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ACT_RU_EVENT_SUBSCR`
--

DROP TABLE IF EXISTS `ACT_RU_EVENT_SUBSCR`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ACT_RU_EVENT_SUBSCR` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL,
  `REV_` int(11) DEFAULT NULL,
  `EVENT_TYPE_` varchar(255) COLLATE utf8_bin NOT NULL,
  `EVENT_NAME_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `EXECUTION_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `PROC_INST_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `ACTIVITY_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `CONFIGURATION_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `CREATED_` timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `PROC_DEF_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `TENANT_ID_` varchar(255) COLLATE utf8_bin DEFAULT '',
  PRIMARY KEY (`ID_`),
  KEY `ACT_IDX_EVENT_SUBSCR_CONFIG_` (`CONFIGURATION_`),
  KEY `ACT_FK_EVENT_EXEC` (`EXECUTION_ID_`),
  CONSTRAINT `ACT_FK_EVENT_EXEC` FOREIGN KEY (`EXECUTION_ID_`) REFERENCES `ACT_RU_EXECUTION` (`ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ACT_RU_EXECUTION`
--

DROP TABLE IF EXISTS `ACT_RU_EXECUTION`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ACT_RU_EXECUTION` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `REV_` int(11) DEFAULT NULL,
  `PROC_INST_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `BUSINESS_KEY_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `PARENT_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `PROC_DEF_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `SUPER_EXEC_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `ACT_ID_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `IS_ACTIVE_` tinyint(4) DEFAULT NULL,
  `IS_CONCURRENT_` tinyint(4) DEFAULT NULL,
  `IS_SCOPE_` tinyint(4) DEFAULT NULL,
  `IS_EVENT_SCOPE_` tinyint(4) DEFAULT NULL,
  `SUSPENSION_STATE_` int(11) DEFAULT NULL,
  `CACHED_ENT_STATE_` int(11) DEFAULT NULL,
  `TENANT_ID_` varchar(255) COLLATE utf8_bin DEFAULT '',
  PRIMARY KEY (`ID_`),
  KEY `ACT_IDX_EXEC_BUSKEY` (`BUSINESS_KEY_`),
  KEY `ACT_FK_EXE_PROCINST` (`PROC_INST_ID_`),
  KEY `ACT_FK_EXE_PARENT` (`PARENT_ID_`),
  KEY `ACT_FK_EXE_SUPER` (`SUPER_EXEC_`),
  KEY `ACT_FK_EXE_PROCDEF` (`PROC_DEF_ID_`),
  CONSTRAINT `ACT_FK_EXE_PARENT` FOREIGN KEY (`PARENT_ID_`) REFERENCES `ACT_RU_EXECUTION` (`ID_`),
  CONSTRAINT `ACT_FK_EXE_PROCDEF` FOREIGN KEY (`PROC_DEF_ID_`) REFERENCES `ACT_RE_PROCDEF` (`ID_`),
  CONSTRAINT `ACT_FK_EXE_PROCINST` FOREIGN KEY (`PROC_INST_ID_`) REFERENCES `ACT_RU_EXECUTION` (`ID_`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ACT_FK_EXE_SUPER` FOREIGN KEY (`SUPER_EXEC_`) REFERENCES `ACT_RU_EXECUTION` (`ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ACT_RU_IDENTITYLINK`
--

DROP TABLE IF EXISTS `ACT_RU_IDENTITYLINK`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ACT_RU_IDENTITYLINK` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `REV_` int(11) DEFAULT NULL,
  `GROUP_ID_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `TYPE_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `USER_ID_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `TASK_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `PROC_INST_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `PROC_DEF_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`ID_`),
  KEY `ACT_IDX_IDENT_LNK_USER` (`USER_ID_`),
  KEY `ACT_IDX_IDENT_LNK_GROUP` (`GROUP_ID_`),
  KEY `ACT_IDX_ATHRZ_PROCEDEF` (`PROC_DEF_ID_`),
  KEY `ACT_FK_TSKASS_TASK` (`TASK_ID_`),
  KEY `ACT_FK_IDL_PROCINST` (`PROC_INST_ID_`),
  CONSTRAINT `ACT_FK_ATHRZ_PROCEDEF` FOREIGN KEY (`PROC_DEF_ID_`) REFERENCES `ACT_RE_PROCDEF` (`ID_`),
  CONSTRAINT `ACT_FK_IDL_PROCINST` FOREIGN KEY (`PROC_INST_ID_`) REFERENCES `ACT_RU_EXECUTION` (`ID_`),
  CONSTRAINT `ACT_FK_TSKASS_TASK` FOREIGN KEY (`TASK_ID_`) REFERENCES `ACT_RU_TASK` (`ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ACT_RU_JOB`
--

DROP TABLE IF EXISTS `ACT_RU_JOB`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ACT_RU_JOB` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL,
  `REV_` int(11) DEFAULT NULL,
  `TYPE_` varchar(255) COLLATE utf8_bin NOT NULL,
  `LOCK_EXP_TIME_` timestamp(3) NULL DEFAULT NULL,
  `LOCK_OWNER_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `EXCLUSIVE_` tinyint(1) DEFAULT NULL,
  `EXECUTION_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `PROCESS_INSTANCE_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `PROC_DEF_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `RETRIES_` int(11) DEFAULT NULL,
  `EXCEPTION_STACK_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `EXCEPTION_MSG_` varchar(4000) COLLATE utf8_bin DEFAULT NULL,
  `DUEDATE_` timestamp(3) NULL DEFAULT NULL,
  `REPEAT_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `HANDLER_TYPE_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `HANDLER_CFG_` varchar(4000) COLLATE utf8_bin DEFAULT NULL,
  `TENANT_ID_` varchar(255) COLLATE utf8_bin DEFAULT '',
  PRIMARY KEY (`ID_`),
  KEY `ACT_FK_JOB_EXCEPTION` (`EXCEPTION_STACK_ID_`),
  CONSTRAINT `ACT_FK_JOB_EXCEPTION` FOREIGN KEY (`EXCEPTION_STACK_ID_`) REFERENCES `ACT_GE_BYTEARRAY` (`ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ACT_RU_TASK`
--

DROP TABLE IF EXISTS `ACT_RU_TASK`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ACT_RU_TASK` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `REV_` int(11) DEFAULT NULL,
  `EXECUTION_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `PROC_INST_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `PROC_DEF_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `NAME_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `PARENT_TASK_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `DESCRIPTION_` varchar(4000) COLLATE utf8_bin DEFAULT NULL,
  `TASK_DEF_KEY_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `OWNER_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `ASSIGNEE_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `DELEGATION_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `PRIORITY_` int(11) DEFAULT NULL,
  `CREATE_TIME_` timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  `DUE_DATE_` datetime(3) DEFAULT NULL,
  `CATEGORY_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `SUSPENSION_STATE_` int(11) DEFAULT NULL,
  `TENANT_ID_` varchar(255) COLLATE utf8_bin DEFAULT '',
  PRIMARY KEY (`ID_`),
  KEY `ACT_IDX_TASK_CREATE` (`CREATE_TIME_`),
  KEY `ACT_FK_TASK_EXE` (`EXECUTION_ID_`),
  KEY `ACT_FK_TASK_PROCINST` (`PROC_INST_ID_`),
  KEY `ACT_FK_TASK_PROCDEF` (`PROC_DEF_ID_`),
  CONSTRAINT `ACT_FK_TASK_EXE` FOREIGN KEY (`EXECUTION_ID_`) REFERENCES `ACT_RU_EXECUTION` (`ID_`),
  CONSTRAINT `ACT_FK_TASK_PROCDEF` FOREIGN KEY (`PROC_DEF_ID_`) REFERENCES `ACT_RE_PROCDEF` (`ID_`),
  CONSTRAINT `ACT_FK_TASK_PROCINST` FOREIGN KEY (`PROC_INST_ID_`) REFERENCES `ACT_RU_EXECUTION` (`ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ACT_RU_VARIABLE`
--

DROP TABLE IF EXISTS `ACT_RU_VARIABLE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ACT_RU_VARIABLE` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL,
  `REV_` int(11) DEFAULT NULL,
  `TYPE_` varchar(255) COLLATE utf8_bin NOT NULL,
  `NAME_` varchar(255) COLLATE utf8_bin NOT NULL,
  `EXECUTION_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `PROC_INST_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `TASK_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `BYTEARRAY_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `DOUBLE_` double DEFAULT NULL,
  `LONG_` bigint(20) DEFAULT NULL,
  `TEXT_` varchar(4000) COLLATE utf8_bin DEFAULT NULL,
  `TEXT2_` varchar(4000) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`ID_`),
  KEY `ACT_IDX_VARIABLE_TASK_ID` (`TASK_ID_`),
  KEY `ACT_FK_VAR_EXE` (`EXECUTION_ID_`),
  KEY `ACT_FK_VAR_PROCINST` (`PROC_INST_ID_`),
  KEY `ACT_FK_VAR_BYTEARRAY` (`BYTEARRAY_ID_`),
  CONSTRAINT `ACT_FK_VAR_BYTEARRAY` FOREIGN KEY (`BYTEARRAY_ID_`) REFERENCES `ACT_GE_BYTEARRAY` (`ID_`),
  CONSTRAINT `ACT_FK_VAR_EXE` FOREIGN KEY (`EXECUTION_ID_`) REFERENCES `ACT_RU_EXECUTION` (`ID_`),
  CONSTRAINT `ACT_FK_VAR_PROCINST` FOREIGN KEY (`PROC_INST_ID_`) REFERENCES `ACT_RU_EXECUTION` (`ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_BAR`
--

DROP TABLE IF EXISTS `CDEIO_BAR`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_BAR` (
  `F_ID` varchar(255) NOT NULL,
  `F_ADDRESS` varchar(255) DEFAULT NULL,
  `F_AGE` int(11) DEFAULT NULL,
  `F_EMAIL` varchar(255) DEFAULT NULL,
  `F_MOBILE` varchar(255) DEFAULT NULL,
  `F_NAME` varchar(500) DEFAULT NULL,
  `F_FOO` varchar(255) DEFAULT NULL,
  `F_PARENT` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`F_ID`),
  KEY `FK_9bav0c3xcamqvd50h7ho2s1gd` (`F_FOO`),
  KEY `FK_4tvl7399jh6nif2m46ycxbfas` (`F_PARENT`),
  CONSTRAINT `FK_4tvl7399jh6nif2m46ycxbfas` FOREIGN KEY (`F_PARENT`) REFERENCES `CDEIO_BAR` (`F_ID`),
  CONSTRAINT `FK_9bav0c3xcamqvd50h7ho2s1gd` FOREIGN KEY (`F_FOO`) REFERENCES `CDEIO_FOO` (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_BASIC_TODO`
--

DROP TABLE IF EXISTS `CDEIO_BASIC_TODO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_BASIC_TODO` (
  `F_ID` varchar(255) NOT NULL,
  `F_DESCRIPTION` varchar(350) DEFAULT NULL,
  `F_NAME` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_DATA_TENANT`
--

DROP TABLE IF EXISTS `CDEIO_DATA_TENANT`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_DATA_TENANT` (
  `F_ID` varchar(255) NOT NULL,
  `F_DATA_ID` varchar(40) DEFAULT NULL,
  `F_DATA_TYPE` varchar(100) DEFAULT NULL,
  `TENANT_ID` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`F_ID`),
  KEY `FK_p1rxg5e90i9i5amo8i1b6e7tj` (`TENANT_ID`),
  CONSTRAINT `FK_p1rxg5e90i9i5amo8i1b6e7tj` FOREIGN KEY (`TENANT_ID`) REFERENCES `CDEIO_TENANT` (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_DOCUMENT`
--

DROP TABLE IF EXISTS `CDEIO_DOCUMENT`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_DOCUMENT` (
  `F_ID` varchar(255) NOT NULL,
  `F_DESC` varchar(2000) DEFAULT NULL,
  `F_NAME` varchar(20) DEFAULT NULL,
  `F_SIZE` double DEFAULT NULL,
  `F_TYPE` varchar(10) DEFAULT NULL,
  `ATTACHMENT_ID` varchar(255) DEFAULT NULL,
  `F_FOLDER` varchar(255) DEFAULT NULL,
  `F_PROJECT` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`F_ID`),
  KEY `FK_me5htpuls24rohy7mc6dmifcv` (`ATTACHMENT_ID`),
  KEY `FK_dh8yp1bmdkdumflwvjrfvd6q0` (`F_FOLDER`),
  KEY `FK_b4bjr3gmvkmp8f288gh8a3s3n` (`F_PROJECT`),
  CONSTRAINT `FK_b4bjr3gmvkmp8f288gh8a3s3n` FOREIGN KEY (`F_PROJECT`) REFERENCES `CDEIO_PROJECT` (`F_ID`),
  CONSTRAINT `FK_dh8yp1bmdkdumflwvjrfvd6q0` FOREIGN KEY (`F_FOLDER`) REFERENCES `CDEIO_FOLDER` (`F_ID`),
  CONSTRAINT `FK_me5htpuls24rohy7mc6dmifcv` FOREIGN KEY (`ATTACHMENT_ID`) REFERENCES `ZDA_ATTACHMENT` (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_EXTENSION_ADVANCED_TREE`
--

DROP TABLE IF EXISTS `CDEIO_EXTENSION_ADVANCED_TREE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_EXTENSION_ADVANCED_TREE` (
  `F_ID` varchar(255) NOT NULL,
  `F_CREATED_TIME` datetime DEFAULT NULL,
  `F_CREATOR` varchar(50) DEFAULT NULL,
  `F_CREATOR_NAME` varchar(30) DEFAULT NULL,
  `F_LAST_MODIFIED_TIME` datetime DEFAULT NULL,
  `F_LAST_MODIFIER` varchar(50) DEFAULT NULL,
  `F_LAST_MODIFIER_NAME` varchar(30) DEFAULT NULL,
  `F_NAME` varchar(500) DEFAULT NULL,
  `F_TYPE` varchar(255) DEFAULT NULL,
  `F_PARENT_ID` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`F_ID`),
  KEY `FK_i0fskiu5mnwc3eak6bgso39se` (`F_PARENT_ID`),
  CONSTRAINT `FK_i0fskiu5mnwc3eak6bgso39se` FOREIGN KEY (`F_PARENT_ID`) REFERENCES `CDEIO_EXTENSION_ADVANCED_TREE` (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_FIELD_ACCOUNT`
--

DROP TABLE IF EXISTS `CDEIO_FIELD_ACCOUNT`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_FIELD_ACCOUNT` (
  `F_ID` varchar(255) NOT NULL,
  `F_ACCOUNT` varchar(255) DEFAULT NULL,
  `F_CREDITCARD` varchar(255) DEFAULT NULL,
  `F_EMAIL` varchar(255) DEFAULT NULL,
  `F_NAME` varchar(100) DEFAULT NULL,
  `F_PASSWORD` varchar(255) DEFAULT NULL,
  `F_PASSWORD2` varchar(255) DEFAULT NULL,
  `F_SALARY` double DEFAULT NULL,
  `F_URL` varchar(255) DEFAULT NULL,
  `F_YEAR` int(11) DEFAULT NULL,
  PRIMARY KEY (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_FIELD_PROJECT`
--

DROP TABLE IF EXISTS `CDEIO_FIELD_PROJECT`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_FIELD_PROJECT` (
  `F_ID` varchar(255) NOT NULL,
  `F_NAME` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_FIELD_TAG`
--

DROP TABLE IF EXISTS `CDEIO_FIELD_TAG`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_FIELD_TAG` (
  `F_ID` varchar(255) NOT NULL,
  `F_CREATED_TIME` datetime DEFAULT NULL,
  `F_CREATOR` varchar(50) DEFAULT NULL,
  `F_CREATOR_NAME` varchar(30) DEFAULT NULL,
  `F_LAST_MODIFIED_TIME` datetime DEFAULT NULL,
  `F_LAST_MODIFIER` varchar(50) DEFAULT NULL,
  `F_LAST_MODIFIER_NAME` varchar(30) DEFAULT NULL,
  `F_DESC` varchar(260) DEFAULT NULL,
  `F_NAME` varchar(30) DEFAULT NULL,
  `F_PARENT` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`F_ID`),
  KEY `FK_kvh221rsrayqde0cyeldky7d9` (`F_PARENT`),
  CONSTRAINT `FK_kvh221rsrayqde0cyeldky7d9` FOREIGN KEY (`F_PARENT`) REFERENCES `CDEIO_FIELD_TAG` (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_FIELD_TODO`
--

DROP TABLE IF EXISTS `CDEIO_FIELD_TODO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_FIELD_TODO` (
  `F_ID` varchar(255) NOT NULL,
  `F_DESCRIPTION` varchar(4000) DEFAULT NULL,
  `F_LEVEL` varchar(255) DEFAULT NULL,
  `F_NAME` varchar(60) DEFAULT NULL,
  `F_START_TIME` date DEFAULT NULL,
  `F_ATTCHMENT_ID` varchar(255) DEFAULT NULL,
  `F_PROJECT` varchar(255) DEFAULT NULL,
  `F_Tag` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`F_ID`),
  KEY `FK_fwu70vd9ggvn6iykhallmab7r` (`F_ATTCHMENT_ID`),
  KEY `FK_qrsg8b7tyk4f5op8u37knpivd` (`F_PROJECT`),
  KEY `FK_8aclducx3k5f0idth8t51mjof` (`F_Tag`),
  CONSTRAINT `FK_8aclducx3k5f0idth8t51mjof` FOREIGN KEY (`F_Tag`) REFERENCES `CDEIO_FIELD_TAG` (`F_ID`),
  CONSTRAINT `FK_fwu70vd9ggvn6iykhallmab7r` FOREIGN KEY (`F_ATTCHMENT_ID`) REFERENCES `ZDA_ATTACHMENT` (`F_ID`),
  CONSTRAINT `FK_qrsg8b7tyk4f5op8u37knpivd` FOREIGN KEY (`F_PROJECT`) REFERENCES `CDEIO_FIELD_PROJECT` (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_FIELD_USER`
--

DROP TABLE IF EXISTS `CDEIO_FIELD_USER`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_FIELD_USER` (
  `F_ID` varchar(255) NOT NULL,
  `F_BIRTHDAY` datetime DEFAULT NULL,
  `F_CODE` varchar(500) DEFAULT NULL,
  `F_EMAIL` varchar(255) DEFAULT NULL,
  `F_NAME` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_FOLDER`
--

DROP TABLE IF EXISTS `CDEIO_FOLDER`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_FOLDER` (
  `F_ID` varchar(255) NOT NULL,
  `F_DESC` varchar(2000) DEFAULT NULL,
  `F_NAME` varchar(100) DEFAULT NULL,
  `F_OPEN` tinyint(1) DEFAULT NULL,
  `F_PARENT` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`F_ID`),
  KEY `FK_58khpvhu3maxrs70f9xwo4vs4` (`F_PARENT`),
  CONSTRAINT `FK_58khpvhu3maxrs70f9xwo4vs4` FOREIGN KEY (`F_PARENT`) REFERENCES `CDEIO_FOLDER` (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_FOO`
--

DROP TABLE IF EXISTS `CDEIO_FOO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_FOO` (
  `F_ID` varchar(255) NOT NULL,
  `F_CREATE_TIME` datetime DEFAULT NULL,
  `F_DESC` varchar(2000) DEFAULT NULL,
  `F_DISABLED` tinyint(1) DEFAULT NULL,
  `F_EMAIL` varchar(255) DEFAULT NULL,
  `F_NAME` varchar(20) DEFAULT NULL,
  `F_STATUS` int(11) DEFAULT NULL,
  `ATTACHMENT_ID` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`F_ID`),
  KEY `FK_ai0k2jutduhg4y2bqfb1d3og7` (`ATTACHMENT_ID`),
  CONSTRAINT `FK_ai0k2jutduhg4y2bqfb1d3og7` FOREIGN KEY (`ATTACHMENT_ID`) REFERENCES `ZDA_ATTACHMENT` (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_FORM_PROJECT`
--

DROP TABLE IF EXISTS `CDEIO_FORM_PROJECT`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_FORM_PROJECT` (
  `F_ID` varchar(255) NOT NULL,
  `F_COST` decimal(23,2) DEFAULT NULL,
  `F_DESC` varchar(255) DEFAULT NULL,
  `F_INTRO` varchar(255) DEFAULT NULL,
  `F_NAME` varchar(255) DEFAULT NULL,
  `F_PEOPLE` varchar(255) DEFAULT NULL,
  `F_START_DATE` date DEFAULT NULL,
  PRIMARY KEY (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_FORM_TODO`
--

DROP TABLE IF EXISTS `CDEIO_FORM_TODO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_FORM_TODO` (
  `F_ID` varchar(255) NOT NULL,
  `F_DESCRIPTION` varchar(350) DEFAULT NULL,
  `F_NAME` varchar(60) DEFAULT NULL,
  `F_START_TIME` date DEFAULT NULL,
  `F_STATUS` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_FORM_USER`
--

DROP TABLE IF EXISTS `CDEIO_FORM_USER`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_FORM_USER` (
  `F_ID` varchar(255) NOT NULL,
  `F_BIRTHDAY` datetime DEFAULT NULL,
  `F_EMAIL` varchar(255) DEFAULT NULL,
  `F_NAME` varchar(80) DEFAULT NULL,
  `F_CODE` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_GENERATE_BPM_GATEWAY_EXCLUSIVE`
--

DROP TABLE IF EXISTS `CDEIO_GENERATE_BPM_GATEWAY_EXCLUSIVE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_GENERATE_BPM_GATEWAY_EXCLUSIVE` (
  `F_ID` varchar(255) NOT NULL,
  `PROCESS_DEFINITION_ID` varchar(255) DEFAULT NULL,
  `PROCESS_INSTANCE_ID` varchar(255) DEFAULT NULL,
  `STATUS` varchar(255) DEFAULT NULL,
  `SUBMITTER` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `workingLife` int(11) DEFAULT NULL,
  PRIMARY KEY (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_GENERATE_BPM_GATEWAY_PARALLEL`
--

DROP TABLE IF EXISTS `CDEIO_GENERATE_BPM_GATEWAY_PARALLEL`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_GENERATE_BPM_GATEWAY_PARALLEL` (
  `F_ID` varchar(255) NOT NULL,
  `PROCESS_DEFINITION_ID` varchar(255) DEFAULT NULL,
  `PROCESS_INSTANCE_ID` varchar(255) DEFAULT NULL,
  `STATUS` varchar(255) DEFAULT NULL,
  `SUBMITTER` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_GENERATE_BPM_LISTENER_EXECUTION`
--

DROP TABLE IF EXISTS `CDEIO_GENERATE_BPM_LISTENER_EXECUTION`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_GENERATE_BPM_LISTENER_EXECUTION` (
  `F_ID` varchar(255) NOT NULL,
  `PROCESS_DEFINITION_ID` varchar(255) DEFAULT NULL,
  `PROCESS_INSTANCE_ID` varchar(255) DEFAULT NULL,
  `STATUS` varchar(255) DEFAULT NULL,
  `SUBMITTER` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_GENERATE_BPM_LISTENER_TASK`
--

DROP TABLE IF EXISTS `CDEIO_GENERATE_BPM_LISTENER_TASK`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_GENERATE_BPM_LISTENER_TASK` (
  `F_ID` varchar(255) NOT NULL,
  `PROCESS_DEFINITION_ID` varchar(255) DEFAULT NULL,
  `PROCESS_INSTANCE_ID` varchar(255) DEFAULT NULL,
  `STATUS` varchar(255) DEFAULT NULL,
  `SUBMITTER` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_GENERATE_BPM_MULTIPLE_SUBPROCESS`
--

DROP TABLE IF EXISTS `CDEIO_GENERATE_BPM_MULTIPLE_SUBPROCESS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_GENERATE_BPM_MULTIPLE_SUBPROCESS` (
  `F_ID` varchar(255) NOT NULL,
  `PROCESS_DEFINITION_ID` varchar(255) DEFAULT NULL,
  `PROCESS_INSTANCE_ID` varchar(255) DEFAULT NULL,
  `STATUS` varchar(255) DEFAULT NULL,
  `SUBMITTER` varchar(255) DEFAULT NULL,
  `cycle` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `money` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `planner` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_GENERATE_BPM_MULTIPLE_USERTASK`
--

DROP TABLE IF EXISTS `CDEIO_GENERATE_BPM_MULTIPLE_USERTASK`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_GENERATE_BPM_MULTIPLE_USERTASK` (
  `F_ID` varchar(255) NOT NULL,
  `PROCESS_DEFINITION_ID` varchar(255) DEFAULT NULL,
  `PROCESS_INSTANCE_ID` varchar(255) DEFAULT NULL,
  `STATUS` varchar(255) DEFAULT NULL,
  `SUBMITTER` varchar(255) DEFAULT NULL,
  `cycle` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `money` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `planner` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_GENERATE_BPM_SUBPROCESS_EMBEDDED`
--

DROP TABLE IF EXISTS `CDEIO_GENERATE_BPM_SUBPROCESS_EMBEDDED`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_GENERATE_BPM_SUBPROCESS_EMBEDDED` (
  `F_ID` varchar(255) NOT NULL,
  `PROCESS_DEFINITION_ID` varchar(255) DEFAULT NULL,
  `PROCESS_INSTANCE_ID` varchar(255) DEFAULT NULL,
  `STATUS` varchar(255) DEFAULT NULL,
  `SUBMITTER` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `workingLife` int(11) DEFAULT NULL,
  PRIMARY KEY (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_GENERATE_BPM_TASK_CALLBACK`
--

DROP TABLE IF EXISTS `CDEIO_GENERATE_BPM_TASK_CALLBACK`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_GENERATE_BPM_TASK_CALLBACK` (
  `F_ID` varchar(255) NOT NULL,
  `PROCESS_DEFINITION_ID` varchar(255) DEFAULT NULL,
  `PROCESS_INSTANCE_ID` varchar(255) DEFAULT NULL,
  `STATUS` varchar(255) DEFAULT NULL,
  `SUBMITTER` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_GENERATE_BPM_TASK_REJECT`
--

DROP TABLE IF EXISTS `CDEIO_GENERATE_BPM_TASK_REJECT`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_GENERATE_BPM_TASK_REJECT` (
  `F_ID` varchar(255) NOT NULL,
  `PROCESS_DEFINITION_ID` varchar(255) DEFAULT NULL,
  `PROCESS_INSTANCE_ID` varchar(255) DEFAULT NULL,
  `STATUS` varchar(255) DEFAULT NULL,
  `SUBMITTER` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_GENERATE_BPM_TASK_USERTASK`
--

DROP TABLE IF EXISTS `CDEIO_GENERATE_BPM_TASK_USERTASK`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_GENERATE_BPM_TASK_USERTASK` (
  `F_ID` varchar(255) NOT NULL,
  `PROCESS_DEFINITION_ID` varchar(255) DEFAULT NULL,
  `PROCESS_INSTANCE_ID` varchar(255) DEFAULT NULL,
  `STATUS` varchar(255) DEFAULT NULL,
  `SUBMITTER` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_GRID_TODO`
--

DROP TABLE IF EXISTS `CDEIO_GRID_TODO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_GRID_TODO` (
  `F_ID` varchar(255) NOT NULL,
  `F_DESC` varchar(255) DEFAULT NULL,
  `F_NAME` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_GRID_USER`
--

DROP TABLE IF EXISTS `CDEIO_GRID_USER`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_GRID_USER` (
  `F_ID` varchar(255) NOT NULL,
  `F_BIRTHDAY` datetime DEFAULT NULL,
  `F_CODE` varchar(500) DEFAULT NULL,
  `F_EMAIL` varchar(255) DEFAULT NULL,
  `F_NAME` varchar(80) DEFAULT NULL,
  `F_SEX` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_HOOKS_TODO`
--

DROP TABLE IF EXISTS `CDEIO_HOOKS_TODO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_HOOKS_TODO` (
  `F_ID` varchar(255) NOT NULL,
  `F_DESC` varchar(255) DEFAULT NULL,
  `F_NAME` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_PROJECT`
--

DROP TABLE IF EXISTS `CDEIO_PROJECT`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_PROJECT` (
  `F_ID` varchar(255) NOT NULL,
  `F_DESC` varchar(2000) DEFAULT NULL,
  `F_NAME` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_SCAFFOLD_BASIC_TREE`
--

DROP TABLE IF EXISTS `CDEIO_SCAFFOLD_BASIC_TREE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_SCAFFOLD_BASIC_TREE` (
  `F_ID` varchar(255) NOT NULL,
  `F_CREATED_TIME` datetime DEFAULT NULL,
  `F_CREATOR` varchar(50) DEFAULT NULL,
  `F_CREATOR_NAME` varchar(30) DEFAULT NULL,
  `F_LAST_MODIFIED_TIME` datetime DEFAULT NULL,
  `F_LAST_MODIFIER` varchar(50) DEFAULT NULL,
  `F_LAST_MODIFIER_NAME` varchar(30) DEFAULT NULL,
  `F_NAME` varchar(500) DEFAULT NULL,
  `F_PARENT_ID` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`F_ID`),
  KEY `FK_njhe3cgmdqf2o9xehdm6rod87` (`F_PARENT_ID`),
  CONSTRAINT `FK_njhe3cgmdqf2o9xehdm6rod87` FOREIGN KEY (`F_PARENT_ID`) REFERENCES `CDEIO_SCAFFOLD_BASIC_TREE` (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_SCAFFOLD_OPERATE_BUTTON`
--

DROP TABLE IF EXISTS `CDEIO_SCAFFOLD_OPERATE_BUTTON`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_SCAFFOLD_OPERATE_BUTTON` (
  `F_ID` varchar(255) NOT NULL,
  `F_DESCRIPTION` varchar(255) DEFAULT NULL,
  `F_NAME` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_SENIORGRID_USER`
--

DROP TABLE IF EXISTS `CDEIO_SENIORGRID_USER`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_SENIORGRID_USER` (
  `F_ID` varchar(255) NOT NULL,
  `F_BIRTHDAY` datetime DEFAULT NULL,
  `F_CODE` int(11) DEFAULT NULL,
  `F_EMAIL` varchar(255) DEFAULT NULL,
  `F_NAME` varchar(80) DEFAULT NULL,
  `F_SEX` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_SERVICE_DATAFILE`
--

DROP TABLE IF EXISTS `CDEIO_SERVICE_DATAFILE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_SERVICE_DATAFILE` (
  `F_ID` varchar(255) NOT NULL,
  `F_CODE` varchar(500) DEFAULT NULL,
  `F_NAME` varchar(500) DEFAULT NULL,
  `F_SUMMARY` varchar(4000) DEFAULT NULL,
  `F_ATTACHMENT_ID` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`F_ID`),
  KEY `FK_gq4dkpbcpwrjfshm9jjl7vyj7` (`F_ATTACHMENT_ID`),
  CONSTRAINT `FK_gq4dkpbcpwrjfshm9jjl7vyj7` FOREIGN KEY (`F_ATTACHMENT_ID`) REFERENCES `ZDA_ATTACHMENT` (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_SERVICE_PERSON`
--

DROP TABLE IF EXISTS `CDEIO_SERVICE_PERSON`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_SERVICE_PERSON` (
  `F_ID` varchar(255) NOT NULL,
  `F_DESC` varchar(2000) DEFAULT NULL,
  `F_NAME` varchar(100) DEFAULT NULL,
  `F_PASSWORD` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_SERVICE_TASK`
--

DROP TABLE IF EXISTS `CDEIO_SERVICE_TASK`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_SERVICE_TASK` (
  `F_ID` varchar(255) NOT NULL,
  `F_DESC` varchar(2000) DEFAULT NULL,
  `F_NAME` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_TAG`
--

DROP TABLE IF EXISTS `CDEIO_TAG`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_TAG` (
  `F_ID` varchar(255) NOT NULL,
  `F_DESC` varchar(260) DEFAULT NULL,
  `F_NAME` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_TENANT`
--

DROP TABLE IF EXISTS `CDEIO_TENANT`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_TENANT` (
  `F_ID` varchar(255) NOT NULL,
  `F_DATA_ID` varchar(40) DEFAULT NULL,
  `F_TYPE` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_TEST`
--

DROP TABLE IF EXISTS `CDEIO_TEST`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_TEST` (
  `F_ID` varchar(255) NOT NULL,
  `F_DESC` varchar(2000) DEFAULT NULL,
  `F_NAME` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_TEST_TREE`
--

DROP TABLE IF EXISTS `CDEIO_TEST_TREE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_TEST_TREE` (
  `F_ID` varchar(255) NOT NULL,
  `F_NAME` varchar(200) DEFAULT NULL,
  `F_PARENT` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`F_ID`),
  KEY `FK_9yfqufakdy4ydxh02t220adtf` (`F_PARENT`),
  CONSTRAINT `FK_9yfqufakdy4ydxh02t220adtf` FOREIGN KEY (`F_PARENT`) REFERENCES `CDEIO_TEST_TREE` (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_TODO`
--

DROP TABLE IF EXISTS `CDEIO_TODO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_TODO` (
  `F_ID` varchar(255) NOT NULL,
  `F_DESCRIPTION` varchar(350) DEFAULT NULL,
  `F_NAME` varchar(60) DEFAULT NULL,
  `F_BASICUSER` varchar(255) DEFAULT NULL,
  `F_PARENT_ID` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`F_ID`),
  KEY `FK_k87hgih6kebcbk9dbtq8otesh` (`F_BASICUSER`),
  KEY `FK_csptys2epy927qpv4mtadd44b` (`F_PARENT_ID`),
  CONSTRAINT `FK_csptys2epy927qpv4mtadd44b` FOREIGN KEY (`F_PARENT_ID`) REFERENCES `CDEIO_TODO` (`F_ID`),
  CONSTRAINT `FK_k87hgih6kebcbk9dbtq8otesh` FOREIGN KEY (`F_BASICUSER`) REFERENCES `CDEIO_USER` (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_UI_BASIC`
--

DROP TABLE IF EXISTS `CDEIO_UI_BASIC`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_UI_BASIC` (
  `F_ID` varchar(255) NOT NULL,
  `F_DESC` varchar(2000) DEFAULT NULL,
  `F_NAME` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_UI_CALL_BACK`
--

DROP TABLE IF EXISTS `CDEIO_UI_CALL_BACK`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_UI_CALL_BACK` (
  `F_ID` varchar(255) NOT NULL,
  `F_DETAIL_TYPE` varchar(100) DEFAULT NULL,
  `F_NAME` varchar(100) DEFAULT NULL,
  `F_TYPE` varchar(100) DEFAULT NULL,
  `F_ROUTER_ID` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`F_ID`),
  KEY `FK_1wpcjvpntcmfqbrkq8qmhophb` (`F_ROUTER_ID`),
  CONSTRAINT `FK_1wpcjvpntcmfqbrkq8qmhophb` FOREIGN KEY (`F_ROUTER_ID`) REFERENCES `CDEIO_UI_ROUTER` (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_UI_CUSTOM_FORM`
--

DROP TABLE IF EXISTS `CDEIO_UI_CUSTOM_FORM`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_UI_CUSTOM_FORM` (
  `F_ID` varchar(255) NOT NULL,
  `F_APPLICANT` varchar(100) DEFAULT NULL,
  `F_APPLY_TIME` date DEFAULT NULL,
  `F_AUX_APPEARANCE` tinyint(1) DEFAULT NULL,
  `F_AUX_REMARK` varchar(100) DEFAULT NULL,
  `F_DESC` varchar(2000) DEFAULT NULL,
  `F_MAIN_APPEARANCE` tinyint(1) DEFAULT NULL,
  `F_MAIN_REMARK` varchar(100) DEFAULT NULL,
  `F_NAME` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_UI_INLINE_GRID`
--

DROP TABLE IF EXISTS `CDEIO_UI_INLINE_GRID`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_UI_INLINE_GRID` (
  `F_ID` varchar(255) NOT NULL,
  `F_DESC` varchar(2000) DEFAULT NULL,
  `F_NAME` varchar(100) DEFAULT NULL,
  `F_STATUS` varchar(100) DEFAULT NULL,
  `F_CALL_BACK_ID` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`F_ID`),
  KEY `FK_ifcbyf403t05adg21gddoa6xy` (`F_CALL_BACK_ID`),
  CONSTRAINT `FK_ifcbyf403t05adg21gddoa6xy` FOREIGN KEY (`F_CALL_BACK_ID`) REFERENCES `CDEIO_UI_CALL_BACK` (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_UI_ROUTER`
--

DROP TABLE IF EXISTS `CDEIO_UI_ROUTER`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_UI_ROUTER` (
  `F_ID` varchar(255) NOT NULL,
  `F_DESC` varchar(2000) DEFAULT NULL,
  `F_NAME` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_USER`
--

DROP TABLE IF EXISTS `CDEIO_USER`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_USER` (
  `F_ID` varchar(255) NOT NULL,
  `F_BIRTHDAY` datetime DEFAULT NULL,
  `F_CODE` varchar(500) DEFAULT NULL,
  `F_EMAIL` varchar(255) DEFAULT NULL,
  `F_NAME` varchar(80) DEFAULT NULL,
  `F_AGE` int(11) DEFAULT NULL,
  `F_PASSWD` varchar(30) DEFAULT NULL,
  `F_PHONE` varchar(15) DEFAULT NULL,
  `F_SEX` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_USER_TENANT`
--

DROP TABLE IF EXISTS `CDEIO_USER_TENANT`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_USER_TENANT` (
  `F_ID` varchar(255) NOT NULL,
  `TENANT_ID` varchar(255) DEFAULT NULL,
  `USER_ID` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`F_ID`),
  KEY `FK_7n14pk555upilpkfiejna57jl` (`TENANT_ID`),
  KEY `FK_ah0ivsaxwpfsodohc65blqaxf` (`USER_ID`),
  CONSTRAINT `FK_7n14pk555upilpkfiejna57jl` FOREIGN KEY (`TENANT_ID`) REFERENCES `CDEIO_TENANT` (`F_ID`),
  CONSTRAINT `FK_ah0ivsaxwpfsodohc65blqaxf` FOREIGN KEY (`USER_ID`) REFERENCES `CDEIO_USER` (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CDEIO_VALIDATORS_USER`
--

DROP TABLE IF EXISTS `CDEIO_VALIDATORS_USER`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CDEIO_VALIDATORS_USER` (
  `F_ID` varchar(255) NOT NULL,
  `F_NAME` varchar(255) DEFAULT NULL,
  `F_STATUS` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `QRTZ_BLOB_TRIGGERS`
--

DROP TABLE IF EXISTS `QRTZ_BLOB_TRIGGERS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `QRTZ_BLOB_TRIGGERS` (
  `SCHED_NAME` varchar(120) NOT NULL,
  `TRIGGER_NAME` varchar(200) NOT NULL,
  `TRIGGER_GROUP` varchar(200) NOT NULL,
  `BLOB_DATA` blob,
  PRIMARY KEY (`SCHED_NAME`,`TRIGGER_NAME`,`TRIGGER_GROUP`),
  CONSTRAINT `qrtz_blob_triggers_ibfk_1` FOREIGN KEY (`SCHED_NAME`, `TRIGGER_NAME`, `TRIGGER_GROUP`) REFERENCES `QRTZ_TRIGGERS` (`SCHED_NAME`, `TRIGGER_NAME`, `TRIGGER_GROUP`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `QRTZ_CALENDARS`
--

DROP TABLE IF EXISTS `QRTZ_CALENDARS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `QRTZ_CALENDARS` (
  `SCHED_NAME` varchar(120) NOT NULL,
  `CALENDAR_NAME` varchar(200) NOT NULL,
  `CALENDAR` blob NOT NULL,
  PRIMARY KEY (`SCHED_NAME`,`CALENDAR_NAME`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `QRTZ_CRON_TRIGGERS`
--

DROP TABLE IF EXISTS `QRTZ_CRON_TRIGGERS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `QRTZ_CRON_TRIGGERS` (
  `SCHED_NAME` varchar(120) NOT NULL,
  `TRIGGER_NAME` varchar(200) NOT NULL,
  `TRIGGER_GROUP` varchar(200) NOT NULL,
  `CRON_EXPRESSION` varchar(200) NOT NULL,
  `TIME_ZONE_ID` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`SCHED_NAME`,`TRIGGER_NAME`,`TRIGGER_GROUP`),
  CONSTRAINT `qrtz_cron_triggers_ibfk_1` FOREIGN KEY (`SCHED_NAME`, `TRIGGER_NAME`, `TRIGGER_GROUP`) REFERENCES `QRTZ_TRIGGERS` (`SCHED_NAME`, `TRIGGER_NAME`, `TRIGGER_GROUP`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `QRTZ_FIRED_TRIGGERS`
--

DROP TABLE IF EXISTS `QRTZ_FIRED_TRIGGERS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `QRTZ_FIRED_TRIGGERS` (
  `SCHED_NAME` varchar(120) NOT NULL,
  `ENTRY_ID` varchar(95) NOT NULL,
  `TRIGGER_NAME` varchar(200) NOT NULL,
  `TRIGGER_GROUP` varchar(200) NOT NULL,
  `INSTANCE_NAME` varchar(200) NOT NULL,
  `FIRED_TIME` bigint(13) NOT NULL,
  `SCHED_TIME` bigint(13) NOT NULL,
  `PRIORITY` int(11) NOT NULL,
  `STATE` varchar(16) NOT NULL,
  `JOB_NAME` varchar(200) DEFAULT NULL,
  `JOB_GROUP` varchar(200) DEFAULT NULL,
  `IS_NONCONCURRENT` varchar(1) DEFAULT NULL,
  `REQUESTS_RECOVERY` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`SCHED_NAME`,`ENTRY_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `QRTZ_JOB_DETAILS`
--

DROP TABLE IF EXISTS `QRTZ_JOB_DETAILS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `QRTZ_JOB_DETAILS` (
  `SCHED_NAME` varchar(120) NOT NULL,
  `JOB_NAME` varchar(200) NOT NULL,
  `JOB_GROUP` varchar(200) NOT NULL,
  `DESCRIPTION` varchar(250) DEFAULT NULL,
  `JOB_CLASS_NAME` varchar(250) NOT NULL,
  `IS_DURABLE` varchar(1) NOT NULL,
  `IS_NONCONCURRENT` varchar(1) NOT NULL,
  `IS_UPDATE_DATA` varchar(1) NOT NULL,
  `REQUESTS_RECOVERY` varchar(1) NOT NULL,
  `JOB_DATA` blob,
  PRIMARY KEY (`SCHED_NAME`,`JOB_NAME`,`JOB_GROUP`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `QRTZ_LOCKS`
--

DROP TABLE IF EXISTS `QRTZ_LOCKS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `QRTZ_LOCKS` (
  `SCHED_NAME` varchar(120) NOT NULL,
  `LOCK_NAME` varchar(40) NOT NULL,
  PRIMARY KEY (`SCHED_NAME`,`LOCK_NAME`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `QRTZ_PAUSED_TRIGGER_GRPS`
--

DROP TABLE IF EXISTS `QRTZ_PAUSED_TRIGGER_GRPS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `QRTZ_PAUSED_TRIGGER_GRPS` (
  `SCHED_NAME` varchar(120) NOT NULL,
  `TRIGGER_GROUP` varchar(200) NOT NULL,
  PRIMARY KEY (`SCHED_NAME`,`TRIGGER_GROUP`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `QRTZ_SCHEDULER_STATE`
--

DROP TABLE IF EXISTS `QRTZ_SCHEDULER_STATE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `QRTZ_SCHEDULER_STATE` (
  `SCHED_NAME` varchar(120) NOT NULL,
  `INSTANCE_NAME` varchar(200) NOT NULL,
  `LAST_CHECKIN_TIME` bigint(13) NOT NULL,
  `CHECKIN_INTERVAL` bigint(13) NOT NULL,
  PRIMARY KEY (`SCHED_NAME`,`INSTANCE_NAME`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `QRTZ_SIMPLE_TRIGGERS`
--

DROP TABLE IF EXISTS `QRTZ_SIMPLE_TRIGGERS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `QRTZ_SIMPLE_TRIGGERS` (
  `SCHED_NAME` varchar(120) NOT NULL,
  `TRIGGER_NAME` varchar(200) NOT NULL,
  `TRIGGER_GROUP` varchar(200) NOT NULL,
  `REPEAT_COUNT` bigint(7) NOT NULL,
  `REPEAT_INTERVAL` bigint(12) NOT NULL,
  `TIMES_TRIGGERED` bigint(10) NOT NULL,
  PRIMARY KEY (`SCHED_NAME`,`TRIGGER_NAME`,`TRIGGER_GROUP`),
  CONSTRAINT `qrtz_simple_triggers_ibfk_1` FOREIGN KEY (`SCHED_NAME`, `TRIGGER_NAME`, `TRIGGER_GROUP`) REFERENCES `QRTZ_TRIGGERS` (`SCHED_NAME`, `TRIGGER_NAME`, `TRIGGER_GROUP`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `QRTZ_SIMPROP_TRIGGERS`
--

DROP TABLE IF EXISTS `QRTZ_SIMPROP_TRIGGERS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `QRTZ_SIMPROP_TRIGGERS` (
  `SCHED_NAME` varchar(120) NOT NULL,
  `TRIGGER_NAME` varchar(200) NOT NULL,
  `TRIGGER_GROUP` varchar(200) NOT NULL,
  `STR_PROP_1` varchar(512) DEFAULT NULL,
  `STR_PROP_2` varchar(512) DEFAULT NULL,
  `STR_PROP_3` varchar(512) DEFAULT NULL,
  `INT_PROP_1` int(11) DEFAULT NULL,
  `INT_PROP_2` int(11) DEFAULT NULL,
  `LONG_PROP_1` bigint(20) DEFAULT NULL,
  `LONG_PROP_2` bigint(20) DEFAULT NULL,
  `DEC_PROP_1` decimal(13,4) DEFAULT NULL,
  `DEC_PROP_2` decimal(13,4) DEFAULT NULL,
  `BOOL_PROP_1` varchar(1) DEFAULT NULL,
  `BOOL_PROP_2` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`SCHED_NAME`,`TRIGGER_NAME`,`TRIGGER_GROUP`),
  CONSTRAINT `qrtz_simprop_triggers_ibfk_1` FOREIGN KEY (`SCHED_NAME`, `TRIGGER_NAME`, `TRIGGER_GROUP`) REFERENCES `QRTZ_TRIGGERS` (`SCHED_NAME`, `TRIGGER_NAME`, `TRIGGER_GROUP`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `QRTZ_TRIGGERS`
--

DROP TABLE IF EXISTS `QRTZ_TRIGGERS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `QRTZ_TRIGGERS` (
  `SCHED_NAME` varchar(120) NOT NULL,
  `TRIGGER_NAME` varchar(200) NOT NULL,
  `TRIGGER_GROUP` varchar(200) NOT NULL,
  `JOB_NAME` varchar(200) NOT NULL,
  `JOB_GROUP` varchar(200) NOT NULL,
  `DESCRIPTION` varchar(250) DEFAULT NULL,
  `NEXT_FIRE_TIME` bigint(13) DEFAULT NULL,
  `PREV_FIRE_TIME` bigint(13) DEFAULT NULL,
  `PRIORITY` int(11) DEFAULT NULL,
  `TRIGGER_STATE` varchar(16) NOT NULL,
  `TRIGGER_TYPE` varchar(8) NOT NULL,
  `START_TIME` bigint(13) NOT NULL,
  `END_TIME` bigint(13) DEFAULT NULL,
  `CALENDAR_NAME` varchar(200) DEFAULT NULL,
  `MISFIRE_INSTR` smallint(2) DEFAULT NULL,
  `JOB_DATA` blob,
  PRIMARY KEY (`SCHED_NAME`,`TRIGGER_NAME`,`TRIGGER_GROUP`),
  KEY `SCHED_NAME` (`SCHED_NAME`,`JOB_NAME`,`JOB_GROUP`),
  CONSTRAINT `qrtz_triggers_ibfk_1` FOREIGN KEY (`SCHED_NAME`, `JOB_NAME`, `JOB_GROUP`) REFERENCES `QRTZ_JOB_DETAILS` (`SCHED_NAME`, `JOB_NAME`, `JOB_GROUP`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ZDA_ACCOUNT`
--

DROP TABLE IF EXISTS `ZDA_ACCOUNT`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ZDA_ACCOUNT` (
  `F_ID` varchar(255) NOT NULL,
  `F_ACCOUNT_NAME` varchar(30) DEFAULT NULL,
  `F_DELETED` tinyint(1) DEFAULT NULL,
  `F_DISABLED` tinyint(1) DEFAULT NULL,
  `F_EMAIL` varchar(100) DEFAULT NULL,
  `F_MOBILE` varchar(30) DEFAULT NULL,
  `F_PASSWORD` varchar(60) DEFAULT NULL,
  `F_REALNAME` varchar(30) DEFAULT NULL,
  `F_TELEPHONE` varchar(30) DEFAULT NULL,
  `F_DEPARTMENT_ID` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`F_ID`),
  KEY `FK_9ry2m4qbnae3pda1hsj17byrc` (`F_DEPARTMENT_ID`),
  CONSTRAINT `FK_9ry2m4qbnae3pda1hsj17byrc` FOREIGN KEY (`F_DEPARTMENT_ID`) REFERENCES `ZDA_DEPARTMENT` (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ZDA_ATTACHMENT`
--

DROP TABLE IF EXISTS `ZDA_ATTACHMENT`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ZDA_ATTACHMENT` (
  `F_ID` varchar(255) NOT NULL,
  `F_CONTENT_TYPE` varchar(255) DEFAULT NULL,
  `F_CREATE_TIME` datetime DEFAULT NULL,
  `F_DRAFT` tinyint(1) DEFAULT NULL,
  `F_FILENAME` varchar(255) DEFAULT NULL,
  `F_PATH` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ZDA_DEPARTMENT`
--

DROP TABLE IF EXISTS `ZDA_DEPARTMENT`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ZDA_DEPARTMENT` (
  `F_ID` varchar(255) NOT NULL,
  `F_CODE` varchar(3000) DEFAULT NULL,
  `F_DELETED` tinyint(1) DEFAULT NULL,
  `F_NAME` varchar(30) DEFAULT NULL,
  `F_PATH` varchar(3000) DEFAULT NULL,
  `F_RANK` int(11) DEFAULT NULL,
  `F_PARENT_ID` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`F_ID`),
  KEY `FK_bu37q6kbfl2j6fuxury44u479` (`F_PARENT_ID`),
  CONSTRAINT `FK_bu37q6kbfl2j6fuxury44u479` FOREIGN KEY (`F_PARENT_ID`) REFERENCES `ZDA_DEPARTMENT` (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ZDA_FIELD_TODO_ATTACHMENT`
--

DROP TABLE IF EXISTS `ZDA_FIELD_TODO_ATTACHMENT`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ZDA_FIELD_TODO_ATTACHMENT` (
  `F_TODO_ID` varchar(255) NOT NULL,
  `F_ATTACHMENT_ID` varchar(255) NOT NULL,
  UNIQUE KEY `UK_o1gvoxjl3o468fgj3ae0msoh2` (`F_ATTACHMENT_ID`),
  KEY `FK_o1gvoxjl3o468fgj3ae0msoh2` (`F_ATTACHMENT_ID`),
  KEY `FK_hnp9t1mvb8ndddotcc5m5pyd3` (`F_TODO_ID`),
  CONSTRAINT `FK_hnp9t1mvb8ndddotcc5m5pyd3` FOREIGN KEY (`F_TODO_ID`) REFERENCES `CDEIO_FIELD_TODO` (`F_ID`),
  CONSTRAINT `FK_o1gvoxjl3o468fgj3ae0msoh2` FOREIGN KEY (`F_ATTACHMENT_ID`) REFERENCES `ZDA_ATTACHMENT` (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ZDA_FIELD_TODO_USER`
--

DROP TABLE IF EXISTS `ZDA_FIELD_TODO_USER`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ZDA_FIELD_TODO_USER` (
  `F_TODO_ID` varchar(255) NOT NULL,
  `F_USER_ID` varchar(255) NOT NULL,
  KEY `FK_aa40rnh8j3pqoqx370sgcnqee` (`F_USER_ID`),
  KEY `FK_e12la1f338oyc8xhdgne9w2bu` (`F_TODO_ID`),
  CONSTRAINT `FK_aa40rnh8j3pqoqx370sgcnqee` FOREIGN KEY (`F_USER_ID`) REFERENCES `CDEIO_FIELD_USER` (`F_ID`),
  CONSTRAINT `FK_e12la1f338oyc8xhdgne9w2bu` FOREIGN KEY (`F_TODO_ID`) REFERENCES `CDEIO_FIELD_TODO` (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ZDA_FORM_TODO_USER`
--

DROP TABLE IF EXISTS `ZDA_FORM_TODO_USER`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ZDA_FORM_TODO_USER` (
  `F_TODO_ID` varchar(255) NOT NULL,
  `F_USER_ID` varchar(255) NOT NULL,
  KEY `FK_80xnx3dnop92hsxpw22sbi1k5` (`F_USER_ID`),
  KEY `FK_gv6ncva4iq9o037uu29rue2v6` (`F_TODO_ID`),
  CONSTRAINT `FK_80xnx3dnop92hsxpw22sbi1k5` FOREIGN KEY (`F_USER_ID`) REFERENCES `CDEIO_FORM_TODO` (`F_ID`),
  CONSTRAINT `FK_gv6ncva4iq9o037uu29rue2v6` FOREIGN KEY (`F_TODO_ID`) REFERENCES `CDEIO_FORM_USER` (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ZDA_MENUITEM`
--

DROP TABLE IF EXISTS `ZDA_MENUITEM`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ZDA_MENUITEM` (
  `F_ID` varchar(255) NOT NULL,
  `F_DESC` varchar(2000) DEFAULT NULL,
  `F_ICON` varchar(100) DEFAULT NULL,
  `F_NAME` varchar(100) DEFAULT NULL,
  `F_OPENED` tinyint(1) DEFAULT NULL,
  `F_OPTION` varchar(2000) DEFAULT NULL,
  `F_PATH` varchar(200) DEFAULT NULL,
  `F_RANK` int(11) DEFAULT NULL,
  `F_PARENT_ID` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`F_ID`),
  KEY `FK_2rtc2uly8yio82ifrbek1gwaf` (`F_PARENT_ID`),
  CONSTRAINT `FK_2rtc2uly8yio82ifrbek1gwaf` FOREIGN KEY (`F_PARENT_ID`) REFERENCES `ZDA_MENUITEM` (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ZDA_PERMISSION`
--

DROP TABLE IF EXISTS `ZDA_PERMISSION`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ZDA_PERMISSION` (
  `F_ID` varchar(255) NOT NULL,
  `F_DESC` varchar(2000) DEFAULT NULL,
  `F_NAME` varchar(100) DEFAULT NULL,
  `F_SCAFFOLD` tinyint(1) DEFAULT NULL,
  `F_VALUE` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ZDA_ROLE`
--

DROP TABLE IF EXISTS `ZDA_ROLE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ZDA_ROLE` (
  `F_ID` varchar(255) NOT NULL,
  `F_DESC` varchar(2000) DEFAULT NULL,
  `F_SCAFFOLD` tinyint(1) DEFAULT NULL,
  `F_NAME` varchar(30) DEFAULT NULL,
  `F_DEPARTMENT_ID` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`F_ID`),
  KEY `FK_f6kbmi33qah2xgjo27s15e8hl` (`F_DEPARTMENT_ID`),
  CONSTRAINT `FK_f6kbmi33qah2xgjo27s15e8hl` FOREIGN KEY (`F_DEPARTMENT_ID`) REFERENCES `ZDA_DEPARTMENT` (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ZDA_ROLE_ACCOUNT`
--

DROP TABLE IF EXISTS `ZDA_ROLE_ACCOUNT`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ZDA_ROLE_ACCOUNT` (
  `F_ACCOUNT_ID` varchar(255) NOT NULL,
  `F_ROLE_ID` varchar(255) NOT NULL,
  PRIMARY KEY (`F_ACCOUNT_ID`,`F_ROLE_ID`),
  KEY `FK_oqy4a1nuqic9qq44nmtem5pj1` (`F_ROLE_ID`),
  KEY `FK_k79cnwc1bidiygsb3hrabgilr` (`F_ACCOUNT_ID`),
  CONSTRAINT `FK_k79cnwc1bidiygsb3hrabgilr` FOREIGN KEY (`F_ACCOUNT_ID`) REFERENCES `ZDA_ACCOUNT` (`F_ID`),
  CONSTRAINT `FK_oqy4a1nuqic9qq44nmtem5pj1` FOREIGN KEY (`F_ROLE_ID`) REFERENCES `ZDA_ROLE` (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ZDA_ROLE_PERMISSION`
--

DROP TABLE IF EXISTS `ZDA_ROLE_PERMISSION`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ZDA_ROLE_PERMISSION` (
  `F_ROLE_ID` varchar(255) NOT NULL,
  `F_PERMISSION_ID` varchar(255) NOT NULL,
  PRIMARY KEY (`F_ROLE_ID`,`F_PERMISSION_ID`),
  KEY `FK_hwutwg79f1o8mutmbg1d7f8u9` (`F_PERMISSION_ID`),
  KEY `FK_aq8khw8l2ox2gu3shqi8gebqy` (`F_ROLE_ID`),
  CONSTRAINT `FK_aq8khw8l2ox2gu3shqi8gebqy` FOREIGN KEY (`F_ROLE_ID`) REFERENCES `ZDA_ROLE` (`F_ID`),
  CONSTRAINT `FK_hwutwg79f1o8mutmbg1d7f8u9` FOREIGN KEY (`F_PERMISSION_ID`) REFERENCES `ZDA_PERMISSION` (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ZDA_SETTINGITEM`
--

DROP TABLE IF EXISTS `ZDA_SETTINGITEM`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ZDA_SETTINGITEM` (
  `F_ID` varchar(255) NOT NULL,
  `F_DESC` varchar(2000) DEFAULT NULL,
  `F_NAME` varchar(200) DEFAULT NULL,
  `F_VALUE` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-09-22 20:24:05