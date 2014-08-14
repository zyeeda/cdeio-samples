##基础(后台与前台的交互)

###1. 在后台定义按钮
```javascript
//与前台交互属性配置
exports.enableFrontendExtension = true;

//定义回收站按钮
exports.operators = {
    trash: { label: '回收站', icon: 'icon-trash', group: '30-tips', order: 10, show: 'selected', style: 'btn btn-grey' }
};
```
####详细说明:

1. `label`:  按钮的文本

2. `icon` :  按钮的图标可以通过http://fontawesome.io/3.2.1/icons/ 获得

3. `style`:  按钮的样式可以通过http://www.bootcss.com/ 获得

4. `group`:  按钮的分组

5. `order`:  分组里面的按钮排序

6. `show` :  按钮显示方式(**'always'**:总是显示；**'selected'**: '记录被选中时显示'；**'unselected'**: '记录没选中时显示'')


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
              app.info('这是个回收站按钮');
            }
        }
    };
});
```



