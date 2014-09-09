#扩展树的事件

本章主要介绍如何给树组件添加事件。

##1. 配置树的事件属性

首先，在树的基础扩展属性`exports.tree`中添加事件属性，我们以节点的点击和拖拽事件为例：

样例代码：
```javascript
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

##2. 树的事件方法

事件方法写在前台的同名scaffold.js文件中的handles中。

###2.1 拖拽事件`onDrop`

样例代码：
```javascript
define(['jquery'], function ($) {
    return {
        handlers: {
            cityClicked: function(feature, view, tree, e, treeId, treeNode) {
                ···
                app.success('您点击了' + treeNode.name);
                ···
            }
        }
    };
});
```
###2.2 点击事件 `onClick`

样例代码：
```javascript
define(['jquery'], function ($) {
    return {
        handlers: {
            cityMoved: function(e, treeId, treeNodes, targetNode) {
            ......
            },
            toggleMove: function(e) {
                ......
            }
        }
    };
});
```
