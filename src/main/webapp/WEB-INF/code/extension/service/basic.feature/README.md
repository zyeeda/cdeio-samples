#扩展后台

本章主要介绍如何基于平台的自动生成来扩展现有功能。

尽管 scaffold 可以快速生成添、删、改、查等基本功能，但仍无法满足复杂业务场景的需求。

如果要实现更强大的功能，就必须在现有 scaffold 的基础上进行扩展。

后台的扩展可以在三个层面上进行：

首先是扩展路由。扩展路由有两种方法，一种是基于 scaffold来扩展；另一种是单独扩展，即前端界面直接与路由进行交互；

其次是自定义service，即扩展现有的业务逻辑层。

最后是自定义manager，即实现自定义的数据访问。

###扩展路由

####1 在 scaffold 基础上扩展

首先在 scaffold 文件中，暴露 `doWithRouter` 方法。

doWithRouter是系统内置的一个约定方法，该方法接收一个 router 参数作为输入。

此router参数为平台内部维护，用户无需定义。

然后在doWithRouter方法中定义具体的路由逻辑代码即可。

当系统加载scaffold文件，会自动自动调用doWithRouter方法。

示例代码如下：

```javascript
exports.doWithRouter = function(router) {
    router.get('/:id', function (request, id) {
        ...
    });
};
```

在上面的代码中，scaffold对外提供了 `doWithRouter` 方法，并传入 router 参数，在这个方法内，添加了一个到 `/:id` 路径的 get 请求。

假如当前 `scaffold.js` 的目录为 `app/extension/service/basic.feature`，则此路由的访问路径为 `invoke/scaffold/extension/service/basic/aid`。

####2 单独扩展

系统还提供了一种单独写 `router.js` 文件的方法，示例代码如下：

```javascript
var router = exports.router = createRouter();

router.get('/:id', function (request, id) {
    ...
});
```

在上面的代码中，同样添加了一个 `/:id` 路径的 get 请求。

假如当前 `router.js` 的目录为 `app/extension/diyrouter`，则此路由的访问路径为 `invoke/extension/diyrouter/aid`。

### 为路由添加业务逻辑

####1 调用 service

一般在写路由时会有一些处理业务的需求, 业务逻辑层代码通常写在 `service` 文件中。

系统通过 `mark` 可以引入自定义的 service ，示例代码如下：

```javascript
router.get('/:id', mark('services', 'extension/service/basic').on(function (service, request, id) {
    ...
}));
```

mark service 是利用 service 文件路径来寻找 service 文件的。

上例中，系统会先在 `app/extension/service/basic.feature` 目录下去找 `service.js` 文件。

如果有则使用此文件，如果没有，再去 `app/extension/service/basic` 目录下子目录中找，如果两个目录都没有 `service.js` 文件，则系统会有错误提示。

####2 如何定义 service

在service文件中必须要有 `createService` 方法以供文件可以被 `mark` 到，示例代码如下：

```javascript
var {mark}   = require('coala/mark');

exports.createService = function() {
    return {
        myFunction1: function (param) {
            ...
        },
        myFunction2: function (param) {
            ...
        }
    };
};
```

####3 调用系统内置 manager

在 service 文件处理业务的时候可能会涉及到数据操作，系统中关于数据访问及操作的功能在 `manager.js` 文件中，示例代码如下：

```javascript
var {mark}   = require('coala/mark');

var {Person} = com.zyeeda.coala.example.extension.service.entity;

exports.createService = function() {
    return {
        myFunction1: mark('managers', Person).mark('tx').on(function (personMgr, param) {
            ...
        })
    };
};
```

mark后的manager会默认包含如 `find(id)`、`removeById(id)` 等常用数据查询或操作方法。

当manager中的方法涉及到 `新增、修改或删除` 数据操作时，需要加入 `mark('tx')`，为当前的 service 方法添加事务管理。

** 注:  关于 `manager` 中包含的更多方法和 `mark('tx')` 的更多用法，请查阅 api 文档 **

####4 调用自定义 manager

如果系统提供的 manager 无法满足业务场景的需要时，还可以自定义 `manager.js` 文件来访问及操作数据库，示例代码如下：

```javascript
var {mark}   = require('coala/mark');

exports.createService = function() {
    return {
        myFunction1: mark('managers', 'extension/service/basic').mark('tx').on(function (manager, param) {
            ...
        })
    };
};
```

同 mark service 一样，在 mark manager 时，如果传入的参数是字符串，系统会便默认理解为是 manager 文件路径。

如示例代码，系统会去 `app/extension/service/basic.feature` 目录下去找 ` manager.js` 文件，如果有则使用此文件，如果没有，再夏季目录下找。

如果下级目录也没有 `manager.js` 文件，则系统会有错误提示。

####5 如何定义 manager

自定义manager时要求 `manager.js` 文件中必须有 `createManager` 方法，示例代码如下：

```javascript
var {mark}  = require('coala/mark');
var manager = require('coala/manager');

exports.createManager = function(){
    var personMgr,
        sql,
        query, person;

    sql = 'from Person p where p.id = :id';

    personMgr = manager.createManager();
    personMgr.mixin({
        getPersonById: function(em, id){
            query = em.createQuery(sql);
            query.setParameter('id', id);

            person = query.getSingleResult();

            return person;
        },
        myFunction1: function(em){
            ...
        }
    });

    return personMgr;
};
```

以上代码在 manager 文件中 createManager 方法返回了一个对象。

首先利用系统生成一个 manager，然后调用系统提供的 `mixin` 方法来扩展一个或多个自定义的方法。

比如以上代码中的 `getPersonById`，第一个参数是 `entityManager`，后面的参数即为调用此方法时需要传入的参数，以上写法在当前 manager 被 mark 的时候便可以直接调用 mixin 中写的方法。

** 注：entityManager 由 JPA 提供 **
