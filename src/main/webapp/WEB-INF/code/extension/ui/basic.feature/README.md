#扩展界面（基础）
尽管后台scaffold.js简单配置能实现简单的增、删、改、查的功能，但并没有与前台进行交互，此处主要说明后台与前台怎样交互，通过自定义按钮来说明其功能
###1. 在后台定义按钮
配置与前台交互的属性enableFrontendExtension，按钮的详细配置请参考自动生成中的操作按钮
```javascript
//与前台交互属性配置
exports.enableFrontendExtension = true;

//定义回收站按钮
//trash是按钮事件的方法名
exports.operators = {
    trash: { label: '回收站', icon: 'icon-trash', group: '30-tips', order: 10, show: 'always', style: 'btn btn-grey' }
};
```

###2. 在前台编写按钮事件

事件的处理统一在handlers里面定义及处理，按钮事件的方法名要和按钮定义的方法名一致
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



