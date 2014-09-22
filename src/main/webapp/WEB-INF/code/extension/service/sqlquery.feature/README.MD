本例主要介绍如何基于平台自定义数据库查询。

平台提供了基于 Hibernate 的 orm 配置自定义数据库操作方法的功能，通过 manager 调用 orm 配置文件中定义的 `named-query` 方法的名称实现。具体的代码实现包括三部分，首先是定义 orm 文件，然后是在 persisiten.xml 文件中配置 orm 文件，最后是在 service 中调用 named-query。

### 定义 orm 文件
在 `META-INF/mappings/extension/service/` 下新建 `task.orm.xml` ,内容以下：
```xml
<?xml version="1.0" encoding="UTF-8"?>
<entity-mappings xmlns="http://java.sun.com/xml/ns/persistence/orm"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://java.sun.com/xml/ns/persistence/orm http://www.oracle.com/webfolder/technetwork/jsc/xml/ns/persistence/orm_2_0.xsd" version="2.0">
    <named-query name="getTaskById">
        <query>
            select t from Task t where t.id = :id
        </query>
    </named-query>
</entity-mappings>
```
示例中配置了一个名叫 `getTaskById` 的 named-query 方法，该方法接受输入参数 id ，并从 Task 对象对应的数据库表中查询出满足条件的搜有数据。

### 配置 orm 文件
接下来在将 `task.orm.xml` 配置到 `src/main/resources/META-INF/` 下的 `persistent.xml` 中，示例代码如下：
```xml
...
    <persistence-unit name="default" transaction-type="JTA">
        <mapping-file>META-INF/mappings/extension/service/task.orm.xml</mapping-file>
    </persistence-unit>
...
```
通过将 `task.orm.xml` 配置到 `persistent.xml` 中，平台在启动的时候会自动加载 `task.orm.xml` 中定义的 named-query 方法。

### 调用 named-query 方法
最后，在自定义 service.js 中调用 named-query 方法的示例代码如下：
```javascript
exports.createService = function() {
    return {
        getById: mark('managers', Task).mark('tx').on(function (taskMgr, id) {
            return taskMgr.getTaskById({id: id}, {firstResult: 0, maxResults: 1});
        })
    };
};
```
示例中定义了 service 方法 `getById` ,通过 `taskMgr.getTaskById` 调用在 orm 中配置的 named-query 方法 `getTaskById`。
