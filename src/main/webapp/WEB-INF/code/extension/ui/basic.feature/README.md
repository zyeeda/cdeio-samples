本例主要介绍如何给按钮添加响应事件。

在 `动态脚手架 -> 操作按钮` 中介绍过如何添加按钮，那么接下来本例将介绍如何给自定义按钮添加前端响应事件。

在后端 scaffold.js 文件中定义按钮：
```javascript
exports.enableFrontendExtension = true;
exports.operators = {
    trash: { label: '回收站', icon: 'icon-trash', group: '30-tips', order: 10, show: 'always', style: 'btn btn-grey' }
};
```
在前端 scaffold.js 文件中配置按钮的响应事件：
```javascript
define([], function () {
    return {
        handlers: {
            trash: function () {
                app.info('这是个回收站按钮');
            }
        }
    };
})
```
后端  scaffold.js 文件中定义了名为 `trash` 的按钮，前端 scaffold.js 文件中定义了按钮 `trash` 对应的响应事件，该事件在按钮点击的时候会弹一个内容为 “ 这是个回收站按钮 ” 的提示框。

<span class="badge badge-warning">注</span>&nbsp; ：后端 scaffold.js 文件中 `enableFrontendExtension = true` 启用前台交互扩展，这样就可以给按钮添加事件了。





