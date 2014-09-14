#扩展后台(SQL 查询)

本章主要介绍如何基于平台自定义数据库查询。

在平台中，更新数据可以在有事务管理的 sevice 方法内部对持久态的实体对象属性进行编辑，在 hibernate sessions 缓存被清空时会自动保存数据；

删除与新增方法由于比较简单，平台的 manager 已经提供；

查询数据功能在不同的业务中通常会有各种需求，本文主要讲如何按照不同的业务需求查询语句。

###1. 编写 和配置orm 文件

首先需要在 orm 文件中编写 `hql` 语句，如文件名称为 `myfile.orm.xml`，存放路径为 `WEB-INF/classes/META-INF/mappings/extension/service/task.orm.xml`，则需要在

```xml
<?xml version="1.0" encoding="UTF-8"?>
<entity-mappings xmlns="http://java.sun.com/xml/ns/persistence/orm"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://java.sun.com/xml/ns/persistence/orm http://www.oracle.com/webfolder/technetwork/jsc/xml/ns/persistence/orm_2_0.xsd"
    version="2.0">

    <named-query name="getTaskById">
        <query>
            select t from Task t where t.id = :id
        </query>
    </named-query>

</entity-mappings>
```

在编写 orm 文件之后需要将文件路径配置到 `persistence.xml` 文件中。

```xml
...
    <persistence-unit name="default" transaction-type="JTA">
        <mapping-file>META-INF/mappings/extension/service/task.orm.xml</mapping-file>
    </persistence-unit>
...
```

###2. 如何使用manager 调用

####2.1 系统内置 manager

```javascript
var {mark}   = require('coala/mark');

var {Task} = com.zyeeda.coala.example.extension.service.entity;

exports.createService = function() {
    return {
        myFunction1: mark('managers', Tasj).mark('tx').on(function (taskMgr, param) {
            var task;

            task = taskMgr.getTaskById({id: param.id}, {firstResult: 0, maxResults: 1});
            ...
        })
    };
};
```

基于某个实体 mark 到的 manager 可以直接调用任何一个 orm 文件中的 `named-query`。

方法的第一个参数是一个 object，里面是 hql 语句中需要传入的参数，第二个参数也是 object，里面存放的是 hql 语句查询数据的起始位置和查询数据的数量。

####2.2 自定义 manager

```javascript
var {mark}   = require('coala/mark');

exports.createService = function() {
    return {
        myFunction1: mark('managers', 'extension/diyrouter').mark('tx').on(function (manager, param) {
            var task;

            task = manager.getTaskById(param.id);
            ...
        })
    };
};
```

在 orm 文件中的 `named-query` 和自定义 manager 内部的方法名称重复时，manager 会调用其内部的方法，而不会调用 orm 中的 named-query。

**注：关于如何自定义 manager，请阅读 扩展->后台->基础 中的说明。**
