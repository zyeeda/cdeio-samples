本例主要介绍如何实现自定义数据验证规则。

 Cdeio 提供了 `validators` 组件用于配置自定义数据验证方法，主要是为了保证数据库的完整性，比如增加、编辑用户信息时验证用户名是否已存在。

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
        defaults: function(context, validatorsUser, request){
            context.addViolation({ message: '这是编辑验证' });
        }
    },
    remove: {
        defaults: function(context, validatorsUser, request){
            if(validatorsUser.status === '启用')
            context.addViolation({ message: '不能删除状态为启用的用户'});
        }
    }
};

```
示例代码中配置了 validatorsUser 对象的添加、修改和删除时的验证规则，添加时会判断 name 字段时候为空字符串，如果为空字符串则返回消息 “ 名字不能为空 ”；修改时会返回消息 “ 这是编辑验证 ”；删除时会判断 status 字段是否等于字符串 “ 启用 ”，如果等于则返回消息 “ 不能删除状态为启用的用户 ”。


