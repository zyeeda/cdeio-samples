# validators

此处主要介绍如何实现增加、修改、删除等操作验证。

```js
exports.validators = {
    create: {
        defaults: function(context, validatorsUser, request){
            if(validatorsUser.name === '')
            context.addViolation({ message: '名字不能为空' });
        }
    },
    update: {
        ...
    },
    remove: {
        ...
    }
};
```
在此处主要是进行一些数据操作验证，此处的验证通常是为了保证数据库的完整性，比如增加、编辑用户信息时验证用户名是否已存在。

代码说明：

1.`create` 为新增数据验证。

2.`update` 为编辑数据验证。

3.`remove` 为删除数据验证。

