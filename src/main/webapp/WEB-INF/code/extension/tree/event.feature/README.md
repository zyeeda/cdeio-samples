本例主要介绍如何给树组件添加事件。

 Cdeio 提供了给树添加自定义事件的方法，通过自定义事件可以在树的操作中实现自己的操作逻辑和功能。
本例首先会介绍如何定义树的事件，然后会介绍如何调用定义的事件。

### 定义事件

事件方法定义在前端的 scaffold.js 文件中，示例代码如下：
```javascript
define(['jquery'], function ($) {
    return {
        handlers: {
            cityClicked: function(feature, view, tree, e, treeId, treeNode) {
                app.success('您点击了一个节点');
            },
            cityMoved: function(e, treeId, treeNodes, targetNode) {
                app.success('一个节点被拖动了');
            }
        }
    };
});
```
示例代码中定义了两个事件处理方法，分别是 `cityClicked` 和 `cityMoved` 。`cityClicked` 被调用是会弹出提示信息 “ 您点击了一个节点 ”，`cityMoved` 被调用是会弹出提示信息 “ 一个节点被拖动了 ”。

### 调用事件

定义事件处理方法之后需要在后端的 scaffold.js 文件中进行调用，示例代码如下：
```javascript
exports.enableFrontendExtension = true;
exports.tree = {
    isAsync: true,
    root: '中国',
    edit: {
        drag: {
            autoExpandTrigger: true
        },
        showRemoveBtn: false,
        showRenameBtn: false
    }
    callback: {
        'onDrop': 'cityMoved'
    },
    events: {
        'scaffold/tree/advanced#tree:onClick': 'cityClicked'
    },
    defaultOrder: 'name-asc'
};
```
示例中定义了根节点为 “ 中国 ”，该树的节点执行拖动操作后会调用 `cityMoved` 方法，执行节点点击操作后会调用 `cityClicked` 方法。



