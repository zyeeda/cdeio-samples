# validators

本章主要介绍如何实现数据验证。

平台提供了`validators`组件用于配置数据验证方法，主要是为了保证数据库的完整性，比如增加、编辑用户信息时验证用户名是否已存在。

代码示例如下：

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

示例说明：

`create` 为新增数据验证。

`update` 为编辑数据验证。

`remove` 为删除数据验证。

