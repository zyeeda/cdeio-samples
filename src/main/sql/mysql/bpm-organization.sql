-- delete from zda_account;
-- delete from zda_department;

INSERT INTO `ZDA_DEPARTMENT` (`F_ID`, `F_DELETED`, `F_NAME`, `F_PATH`, `F_RANK`, `F_PARENT_ID`, `F_CODE`) VALUES('d-1001', 0, '研发部', null, null, null, null);
INSERT INTO `ZDA_DEPARTMENT` (`F_ID`, `F_DELETED`, `F_NAME`, `F_PATH`, `F_RANK`, `F_PARENT_ID`, `F_CODE`) VALUES('d-1002', 0, '人资部', null, null, null, null);
INSERT INTO `ZDA_DEPARTMENT` (`F_ID`, `F_DELETED`, `F_NAME`, `F_PATH`, `F_RANK`, `F_PARENT_ID`, `F_CODE`) VALUES('d-1003', 0, '综合部', null, null, null, null);
INSERT INTO `ZDA_DEPARTMENT` (`F_ID`, `F_DELETED`, `F_NAME`, `F_PATH`, `F_RANK`, `F_PARENT_ID`, `F_CODE`) VALUES('d-1004', 0, '财务部', null, null, null, null);
INSERT INTO `ZDA_DEPARTMENT` (`F_ID`, `F_DELETED`, `F_NAME`, `F_PATH`, `F_RANK`, `F_PARENT_ID`, `F_CODE`) VALUES('d-1009', 0, '领导', null, null, null, null);

INSERT INTO `ZDA_ACCOUNT` (`F_ID`, `F_ACCOUNT_NAME`, `F_DELETED`, `F_DISABLED`, `F_EMAIL`, `F_MOBILE`, `F_PASSWORD`, `F_REALNAME`, `F_TELEPHONE`, `F_DEPARTMENT_ID`) values ('tom', 'tom', 0, 0, null, null, 'tom', 'tom', null, 'd-1001');
INSERT INTO `ZDA_ACCOUNT` (`F_ID`, `F_ACCOUNT_NAME`, `F_DELETED`, `F_DISABLED`, `F_EMAIL`, `F_MOBILE`, `F_PASSWORD`, `F_REALNAME`, `F_TELEPHONE`, `F_DEPARTMENT_ID`) values ('luffy', 'luffy', 0, 0, null, null, 'luffy', 'luffy', null, 'd-1001');
INSERT INTO `ZDA_ACCOUNT` (`F_ID`, `F_ACCOUNT_NAME`, `F_DELETED`, `F_DISABLED`, `F_EMAIL`, `F_MOBILE`, `F_PASSWORD`, `F_REALNAME`, `F_TELEPHONE`, `F_DEPARTMENT_ID`) values ('zoro', 'zoro', 0, 0, null, null, 'zoro', 'zoro', null, 'd-1002');
INSERT INTO `ZDA_ACCOUNT` (`F_ID`, `F_ACCOUNT_NAME`, `F_DELETED`, `F_DISABLED`, `F_EMAIL`, `F_MOBILE`, `F_PASSWORD`, `F_REALNAME`, `F_TELEPHONE`, `F_DEPARTMENT_ID`) values ('nami', 'nami', 0, 0, null, null, 'nami', 'nami', null, 'd-1003');
INSERT INTO `ZDA_ACCOUNT` (`F_ID`, `F_ACCOUNT_NAME`, `F_DELETED`, `F_DISABLED`, `F_EMAIL`, `F_MOBILE`, `F_PASSWORD`, `F_REALNAME`, `F_TELEPHONE`, `F_DEPARTMENT_ID`) values ('robin', 'robin', 0, 0, null, null, 'robin', 'robin', null, 'd-1003');
INSERT INTO `ZDA_ACCOUNT` (`F_ID`, `F_ACCOUNT_NAME`, `F_DELETED`, `F_DISABLED`, `F_EMAIL`, `F_MOBILE`, `F_PASSWORD`, `F_REALNAME`, `F_TELEPHONE`, `F_DEPARTMENT_ID`) values ('franky', 'franky',  0, 0, null, null, 'franky', 'franky', null, 'd-1004');
INSERT INTO `ZDA_ACCOUNT` (`F_ID`, `F_ACCOUNT_NAME`, `F_DELETED`, `F_DISABLED`, `F_EMAIL`, `F_MOBILE`, `F_PASSWORD`, `F_REALNAME`, `F_TELEPHONE`, `F_DEPARTMENT_ID`) values ('sanji', 'sanji', 0, 0, null, null, 'sanji', 'sanji', null, 'd-1004');
INSERT INTO `ZDA_ACCOUNT` (`F_ID`, `F_ACCOUNT_NAME`, `F_DELETED`, `F_DISABLED`, `F_EMAIL`, `F_MOBILE`, `F_PASSWORD`, `F_REALNAME`, `F_TELEPHONE`, `F_DEPARTMENT_ID`) values ('chopper', 'chopper', 0, 0, null, null, 'chopper', 'chopper', null, 'd-1004');
INSERT INTO `ZDA_ACCOUNT` (`F_ID`, `F_ACCOUNT_NAME`, `F_DELETED`, `F_DISABLED`, `F_EMAIL`, `F_MOBILE`, `F_PASSWORD`, `F_REALNAME`, `F_TELEPHONE`, `F_DEPARTMENT_ID`) values ('usopp', 'usopp', 0, 0, null, null, 'usopp', 'usopp', null, 'd-1009');
INSERT INTO `ZDA_ACCOUNT` (`F_ID`, `F_ACCOUNT_NAME`, `F_DELETED`, `F_DISABLED`, `F_EMAIL`, `F_MOBILE`, `F_PASSWORD`, `F_REALNAME`, `F_TELEPHONE`, `F_DEPARTMENT_ID`) values ('brook', 'brook', 0, 0, null, null, 'brook', 'brook', null, 'd-1009');

