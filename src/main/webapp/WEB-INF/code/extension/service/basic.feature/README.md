##扩展后台

尽管 scaffold 可以快速生成添、删、改、查等基本功能，但仍无法满足任意业务场景的需要。如果想在保留 scaffold 自动生成能力的基础之上添加更多的功能，就需要在现有 scaffold 的基础上进行扩展。

后台的扩展可以在三个层面上进行，首先是扩展路由，扩展路由有两种方法，一种是基于 scaffold 来扩展，另一种是单独扩展，而前端界面直接与路由进行交互；然后如果业务逻辑也需要扩展，就扩展现有的业务逻辑层代码，即自定义 service；最后倘若数据访问层的代码也需要扩展的话，就需要继续自定义 manager 以获得完全自主访问数据的能力。

###1. 扩展路由

####1.1 在 scaffold 基础上扩展

首先在 scaffold 文件中，暴露 `doWithRouter` 方法。doWithRouter 是系统内置的一个方法约定，该方法接收一个 router 参数作为输入。当系统加载 scaffold 文件并找到 doWithRouter 方法的时候，就会调用其内部维护的 router 对象为参数调用此方法，在此方法内，开发人员可以添加自己的路由逻辑：

```javascript
exports.doWithRouter = function(router) {
    router.get('/:id', function (request, id) {
        ...
    });
};
```

在上面的代码中，scaffold export 了 `doWithRouter` 方法，并传入 router 参数，在这个方法内，添加了一个到 `/:id` 路径的 get 请求。假如当前 `scaffold.js` 的目录为 `app/extension/service/basic.feature`，则此路由的访问路径为 `invoke/scaffold/extension/service/basic/aid`。

####1.2 单独扩展

系统还提供了一种单独写 `router.js` 文件的方法：

```javascript
var router = exports.router = createRouter();

router.get('/:id', function (request, id) {
    ...
});
```

在上面的代码中，同样添加了一个 `/:id` 路径的 get 请求。假如当前 `router.js` 的目录为 `app/extension/diyrouter`，则此路由的访问路径为 `invoke/extension/diyrouter/aid`。

###2. 为路由添加业务逻辑

####2.1 调用 service

一般在写路由时会有一些处理业务的需求, 业务逻辑层代码通常写在 `service` 文件中。系统通过 `mark` 可以引入自定义的 service :

```javascript
router.get('/:id', mark('services', 'extension/service/basic').on(function (service, request, id) {
    ...
}));
```

mark service 是利用 service 文件路径来寻找 service 文件的，在以上写法中，系统会先在 `app/extension/service/basic.feature` 目录下去找 `service.js` 文件，如果有则使用此文件，如果没有，再去 `app/extension/service/basic` 目录下找，如果两个目录都没有 `service.js` 文件，则系统会有错误提示。

####2.2 如何定义 service

在service文件中必须要有 `createService` 方法以供文件可以被 `mark` 到:

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

####2.3 调用系统内置 manager

在 service 文件处理业务的时候可能会涉及到数据操作，系统中关于数据访问及操作的功能在 `manager.js` 文件中:

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

基于某个实体 mark 到的 manager 已经包含如 `find(id)`、`removeById(id)` 等较常用的查询或操作当前实体所对应数据库表的方法。当 `service.js` 文件中某个方法调用到某个 manager，并且有涉及到 `新增、修改或删除` 数据操作时，需要加入 `mark('tx')`，为当前的 service 方法添加事务管理。

** 注:  关于 `manager` 中包含的更多方法和 `mark('tx')` 的更多用法，请查阅 api 文档 **

####2.4 调用自定义 manager

如果有特殊并且极复杂的需求，系统提供的 manager 无法满足业务场景的需要时，还可以自定义 `manager.js` 文件来访问及操作数据库:

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

同 mark service 一样，在 mark manager 时，如果传入的参数是字符串，系统会便默认理解为是 manager 文件路径，然后先在 `app/extension/service/basic.feature` 目录下去找 ` manager.js` 文件，如果有则使用此文件，如果没有，再去 `app/extension/service/basic` 目录下找，如果两个目录都没有 `manager.js` 文件，则系统会有错误提示。

####2.5 如何定义 manager

mark manager 时要求 `manager.js` 文件中必须有 `createManager` 方法：

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

以上代码在 manager 文件中 createManager 方法返回了一个对象，首先利用系统生成一个 manager，然后调用系统提供的 `mixin` 方法来扩展一个或多个自定义的方法，比如以上代码中的 `getPersonById`，第一个参数是 `entityManager`，后面的参数即为调用此方法时需要传入的参数，以上写法在当前 manager 被 mark 的时候便可以直接调用 mixin 中写的方法。

** 注：entityManager 由 JPA 提供 **
