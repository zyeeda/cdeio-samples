#基础
##目的：前台与后台怎样交互，通过自定义按钮来说明其功能
###1. 在后台定义按钮
```javascript
//与前台交互属性配置
exports.enableFrontendExtension = true;

//定义回收站按钮
//trash是按钮事件的方法名
exports.operators = {
    trash: { label: '回收站', icon: 'icon-trash', group: '30-tips', order: 10, show: 'selected', style: 'btn btn-grey' }
};
```

###2. 在前台编写按钮事件

**注意：按钮事件的方法名要和按钮定义的方法名一致**
```javascript
define([
    'jquery',
    'coala/core/loader-plugin-manager'
], function ($, LoaderManager) {
    return {
        handlers: {
            trash: function () {
                ......
            }
        }
    };
});
```



