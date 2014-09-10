# hooks

本章主要介绍如何实现消息传递过程中的事件处理及消息处理的类型。

代码示例如下：

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

处理类型说明：

`beforeCreate`： 新增操作数据库之前进入此函数。

`beforeUpdate`： 编辑操作数据库之前进入此函数。

`beforeRemove`： 删除操作数据库之前进入此函数。

`afterCreate`： 新增操作数据库之后进入此函数。

`afterUpdate`： 编辑操作数据库之后进入此函数。

`afterRemove`： 删除操作数据库之后进入此函数。


