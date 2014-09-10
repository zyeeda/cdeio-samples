#操作按钮

本章主要介绍如何修改默认按钮的属性以及添加自定义按钮。

##修改默认按钮属性

平台默认定义的按钮有add、show、edit、refresh和del，分别是添加、查看、编辑、刷新和删除。

通过修改默认操作按钮的属性，可以实现个性化的业务需求。

如果需要重新定义或者覆盖这几个按钮，在`operators`中定义同名的按钮即可，示例代码如下：

```javascript
exports.operators = {
    add: {label: '添加', icon: 'icon-plus', group: '10-add', style: 'btn-success', show: 'always', order: 100},
    show: {label: '查看', icon: 'icon-eye-open', group: '20-selected', style: 'btn-grey', show: 'single-selected', order: 100},
};
```

上面的代码覆盖了add和show两个按钮，通过修改add和show中的属性值可以到达定制按钮的目的。

按钮的参数说明如下：

`label`：按钮在页面上显示的名称；

`icon`：按钮的图标样式；

`group`：`-`前为分组的排序值，后为分组名称；

`style`：按钮显示的样式；

`show`：按钮的显示方式，默认值是`single-selected`，`always`表示一直显示，`single-selected`表示点击选中列表数据时显示；

`order`：按钮在分组中的排序，根据值的大小从左到右进行排序。

##自定义按钮

平台还提供了添加自定义按钮的功能，通过简单的配置就可以实现。

添加自定义按钮需要在后台对按钮进行定义，同时也需要在前台编写按钮对应的响应事件。

###1. 在后台定义按钮

```javascript
//与前台交互属性配置
exports.enableFrontendExtension = true;

exports.operators = {
    //自定义按钮
    buttonOne: {label: '按钮一', icon: 'icon-comment-alt', group: '40-other', style: 'btn-yellow', show: 'always', order: 300}
};
```

###2. 在前台编写按钮事件

```javascript
define([
    'jquery'
], function ($) {
    return {
        handlers: {
            buttonOne: function () {
                ......
            }
        }
    };
});
```

**注：按钮事件的方法名和按钮的名字是一致的**
