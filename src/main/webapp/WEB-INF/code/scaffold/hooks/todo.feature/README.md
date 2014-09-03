# hooks

此处主要是介绍如何实现增加、修改、删除数据之前或之后所进行的操作。

```js
exports.hooks = {
    beforeCreate: {
        defaults: function(hooksTodo){
            hooksTodo.desc = '这是我创建之前改的描述';
        }
    },
    beforeUpdate: {
        ...
    },
    beforeRemove: {
        ...
    },
    afterCreate: {
        ...
    }
    afterUpdate: {
        ...
    },
    afterRemove: {
        ...
    }
};
```
代码说明：
1. `beforeCreate` 新增操作数据库之前进入当前函数，进行一些数据自动录入及其他相关操作等。

2. `beforeUpdate` 编辑操作数据库之前进入当前函数，进行一些数据自动录入及其他相关操作等。

3. `beforeRemove` 删除操作数据库之前进入当前函数，进行一些其他相关操作等。

4. `afterCreate` 新增操作数据库之后进入当前函数，进行一些其他相关操作等。

5. `afterUpdate` 编辑操作数据库之后进入当前函数，进行一些其他相关操作等。

6. `afterRemove` 删除操作数据库之后进入当前函数，进行一些其他相关操作等。


