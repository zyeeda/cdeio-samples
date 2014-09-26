本例主要介绍如何给操作添加回调方法。

 Cdeio 预定义了很多回调方法，通过在前端的 scaffold.js 文件中配置这些回调方法可以实现操作的自定义处理逻辑，示例代码如下：
```javascript
define([
    'jquery',
    'cdeio/core/util'
], function ($, util) {
    return {
        afterCloseDialog: function(dialogType, v, data) {
            app.success('into afterCloseDialog success');
        },
        beforeShowDialog: function(dialogType, v){
            app.success('into beforeShowDialog success');
            return true;
        }
       }
});
```
示例代码配置了两个预定义回调函数 `afterCloseDialog` 和 `beforeShowDialog` ，`afterCloseDialog`在添加、编辑页面点击确定按钮之后调用，`beforeShowDialog`在点击添加、编辑、查看按钮前调的。

<span class="badge badge-warning">注</span>&nbsp;: 要了解更多的 Cdeio 预定义回调函数请参考 API 文档。


