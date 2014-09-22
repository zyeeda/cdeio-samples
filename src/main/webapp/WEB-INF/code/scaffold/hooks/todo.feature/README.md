本例主要介绍如何通过平台预定义的 hooks 进行自定义消息事件处理。

平台对添加、修改和删除功能提供了预定的事件前置和后置的 hooks，开发者可以根据自身的需求调用这些 hooks 添加自己的处理方法。

代码示例如下：

```js
exports.hooks = {
    beforeCreate: {
        defaults: function(hooksTodo){
            hooksTodo.desc = '这是我创建之前改的描述';
        }
    },
    beforeUpdate: {
        defaults: function(hooksTodo){
            hooksTodo.desc = '这是我修改之前改的描述';
        }
    },
    afterUpdate: {
        defaults: function(hooksTodo){
             throw '这是更新之后执行的函数';
        }
    }
};
```

示例代码中定义了 hooksTodo 实体的创建前置处理、修改前置处理和修改后置处理。其中，`beforeCreate` 定义了在添加 hooksTodo 前将 desc 字段的值改成  “ 这是我创建之前改的描述 ” ；`beforeUpdate` 定义了在修改 hooksTodo 前将 desc 字段的值改成  “ 这是我修改之前改的描述 ” ；`afterUpdate` 定义了在修改 hooksTodo 后将抛出消息 “ 这是更新之后执行的函数 ” 。

<span class="badge badge-warning">注</span>&nbsp; ：如需了解更多的预定义 hooks ，请参考 API 文档。