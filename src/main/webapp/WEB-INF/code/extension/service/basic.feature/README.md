本例主要介绍如何基于 Cdeio 代码结构来扩动态脚手架的功能。

 Cdeio 提供了自定义 router 、 service 和 manager 的方法，开发者可以通过自定义来实现更强大和复杂的业务功能。

###自定义 router

自定义 router 主要用来定义自己的路由地址和路由处理方法。自定义路由有两种方法，一种是在 scaffold 基础上扩展，另一种方法是定义单独定义 router 文件。

####1. 在 scaffold 基础上扩展
通过在 scaffold 中配置 `doWithRouter` 可以实现扩展 router 的功能， 自定义路由路径和处理方法就定义在`doWithRouter` 中。
示例代码如下：
```javascript
exports.doWithRouter = function(router) {
    router.post('/', mark('services', 'extension/service/basic').on(function (basicSvc, request) {
        var person, data;

        data = request.params;
        person = basicSvc.saveEntity(data);

        return json(person, exports.filters.defaults);
    }));
};
```
示例代码定义了一个新增对象的路由地址，路由地址为 `invoke/scaffold/extension/service/basic/`。
数据从 request 中获取，并调用 service `extension/service/basic` 来保存到数据库，然后数据会被序列化成 Json 格式后返回。

####2. 单独定义 router 文件
 Cdeio 也提供了单独定义 `router.js` 文件的方法来扩展 router，示例代码如下：
```javascript
router.put('/password/:id', mark('services', 'extension/diyrouter').on(function (svc, request, id) {
    var data,
        result,
        filter;

    data = request.params;
    result = svc.changePassword(data, id);
    filter = exports.filters.defaults;

    if (result.violations) {
        return json(result, _.extend({ status: 422 }, filter));
    }

    return json(result, filter);
}));
```
示例代码中定义一个修改 password 的路由地址，路由地址为 `invoke/extension/diyrouter/aid`( aid 表示数据库记录的 ID)。
通过传入的 id ，调用 service `extension/diyrouter` 修改对应记录的 password 字段，修改失败会返回 422 的状态码，如果修改成功就返回 Json 序列化的记录。

### 自定义 service

通过定义单独的 service.js 文件来实现自定义 service，通过配置 `createService` 调用 manager 来实现自己的业务处理逻辑。示例代码如下：
```javascript
exports.createService = function() {
    return {
        changePassword: mark('managers', 'extension/diyrouter').mark('tx').on(function (manager, data, id) {
            var person,
                context;

            person = manager.getPersonById(id);
            context = createValidationContext();

            if (data.oldPassword !== person.password) {
                context.addViolation({ message: '原密码不正确', properties: 'oldPassword' });
            }

            if (context.hasViolations()) {
                return { violations: context.collectViolations() };
            }

            person.password = data.newPassword;
            return manager.merge(person);
        })
    };
};
```
示例代码中实现了一个名为 `changePassword` 的service ，这个 service 调用 manager `extension/diyrouter` 来做数据库操作，并且用 `mark('tx')` 来启用事务处理。通过传入的 id 字段查询 person 对象，如果原密码验证不通过则返回提示信息，如果原密码验证通过就将新密码修改并入库。


### 自定义 manager
自定义 manager 的时候需要单独定义 manager.js 文件，并且在文件中定义 `createManager` 来创建 manager 的方法，示例代码如下：
```javascript
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
        }
    });

    return personMgr;
};
```
示例代码最终返回了一个 `personMgr` 对象，这个对象是一个 manager 实例。`personMgr` 对象中定义了一个根据 id 查询 Person 实体所对应的数据库记录的方法 `getPersonById`,这个方法将返回一个 Person 对象。
