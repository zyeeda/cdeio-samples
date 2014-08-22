#操作按钮

此处主要介绍如何修改操作按钮的属性以及添加自定义按钮。

##属性

系统在页面上会默认配置一些常用的增删改查的操作按钮来满足业务需要，我们也可以通过修改默认操作按钮的属性，实现个性化的业务需要。

样例代码：
```javascript
exports.operators = {
    //默认按钮(添加)
    add: {label: '添加', icon: 'icon-plus', group: '10-add', style: 'btn-success', show: 'always', order: 100},
    show: {label: '查看', icon: 'icon-eye-open', group: '20-selected', style: 'btn-grey', show: 'single-selected', order: 100},
};
```
操作按钮的属性配置在`exports.operators`中，以添加按钮为例，`label`属性是按钮在页面上显示的名称；`icon`属性是按钮的图标样式；`group`属性是按钮的分组信息，`10-add`：前面的数字一样，即是同一分组，后面是分组的名称；`style`属性是按钮显示的样式；`show`属性是按钮的显示方式，比如`always`：一直显示，`single-selected`：点击选中列表数据时显示；`order`属性是按钮在分组中的排序，根据值的大小从左到右进行排序。

##自定义按钮

有时根据不同的业务的需求，我们需要添加自定义的按钮。

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
