#扩展界面（回调）

本章主要介绍如何给操作添加回调方法。

回调方法主要用于一些操作的响应，例如表单填充默认值、点击picker、字段渲染、级联操作等等。

回调方法主要分为几大类：列表页面grid、表单中picker、表单中inline-grid、表单字段值变化、表单字段渲染等等回调方法

##1.列表页面grid回调方法

此处提供在点击添加、删除、编辑、查看按钮前后做些需求功能的处理的回调方法
```javascript
/*
*dialogType: 表单的类型(add、edit、show);
*view: 表单视图;
*data: 表单的数据;
*/
//在添加、编辑页面时，点击确定按钮加载之后调的方法
afterCloseDialog: function(dialogType, view, data) {
    ...
}
//点击添加、编辑、查看按钮前调的方法
beforeShowDialog: function(dialogType, view){
    ...
    return true;
}
//点击添加、编辑、查看按钮后调的方法
afterShowDialog: function(dialogType, view, data){
    ...
}
//点击删除按钮之前调的方法
beforeDel: function (gridView, grid, selected) {
    ...
    return true;
}
```

##2.表单中picker回调方法

要想在点击picker前后做些需求功能的处理，首先要在picker所在模块的后台scaffold.js文件中配置picker属性及定义相应功能需求的回调方法
```javascript
/*
*callback: 定义在编辑页面点击picker后调的回调方法;
*beforePickerConfirm: 定义点击picker选择数据之前调的回调方法，返回Boolean类型;
*afterPickerConfirm: 定义点击picker选择数据之后调的回调方法;
*beforeShowPicker: 定义点击picker之前调的回调方法，返回Boolean类型;
*/
exports.picker = {
    grid: {
        columns: [...]
    },
    callback: 'routerPickerCallback',
    beforePickerConfirm: 'beforeRouterPickerConfirm',
    afterPickerConfirm: 'afterRouterPickerConfirm',
    beforeShowPicker: 'beforeShowRouterPicker'
}
```
然后，根据模块当前的功能需求在当前模块前台scaffold.js文件中handlers属性中定义相应的回调方法

```javascript
//点击编辑页面后调的方法
routerPickerCallback: function(view, data) {
    ...
}
//点击picker选择数据之前调的方法
beforeRouterPickerConfirm: function(view, data) {
    ...
    return true;
}
//点击picker选择数据之后调的方法
afterRouterPickerConfirm: function (view, data) {
    ...
}
//点击picker之前调的方法
beforeShowRouterPicker: function (view) {
    ...
    return true;
}
```

##3.表单中inline-grid回调方法

要想在点击表单中inline-grid按钮前后做些需求功能的处理，系统提供丰富的API

```javascript
//在inline-grid中,点击按钮之前调的方法
beforeShowInlineGridDialog: function(dialogType, view) {
    ...
    return true;
}
//在inline-grid中,点击按钮之后调的方法
afterShowInlineGridDialog: function(dialogType, view, data) {
    ...
    return true;
}
//验证inline-grid表单数据
validInlineGridFormData: function(dialogType, view, data) {
    ...
    return true;
}
//删除inline-grid数据之前
beforeInlineGridRemove: function(grid, view){
    ...
    return true;
}
//删除inline-grid数据之后
afterInlineGridRemove: function(grid, view){
    ...
}
```

##4.表单字段值变化的回调方法

此处主要为表单字段值改变时及字段之间的级联操作提供回调方法

```javascript
exports.fieldGroups = {
    defaults: [
        {name: 'name', statusChanger: true},
        {name: 'type', type: 'dropdown', defaultValue: '1', change: 'disableChange', source: [...]},
        {name: 'detailType', type: 'dropdown', defaultValue: '1', source: [...]}
    ]
}
```

如果表单字段配置`statusChanger: true`属性,会调用如下方法

```javascript
//表单字段改变时调的方法
formStatusChanged: function(data, el){
    ...
}
```

如果表单字段配置`change: 'disableChange'`属性,会调用如下方法

```javascript
//表单字段的级联操作
disableChange: function(view, selector) {
    ...
}
```

##5.表单字段渲染的回调方法

表单字段渲染主要分为三大类：列表、inline-grid、picker字段渲染

###5.1.列表字段渲染

首先，在当前模块后台scaffold.js中，为需要渲染的字段配置renderer属性

```javascript
//当前模块后台scaffold.js中配置
exports.grid = {
    columns: [
        {name: 'type', defaultContent: '小型', renderer: 'modifyType'}
    ]
}
```

然后，在当前模块前台scaffold.js中配置renderers属性及渲染处理

```javascript
//当前模块前台scaffold.js中配置
renderers: {
    modifyType: function(data) {
       var modifyTypeMap = {
            '1': '小型',
            '2': '中型',
            '3': '大型'
        };
        return modifyTypeMap[data];
    }
}
```

###5.2.inline-grid字段渲染

首先，在inline-grid所在的模块后台scaffold.js中，为需要渲染的字段配置renderer属性

```javascript
//inline-grid所在模块后台scaffold.js中配置
exports['inline-grid'] = {
    columns: [
        {name: 'type', defaultContent: '小型', renderer: 'modifyType'}
    ]
}
```

然后，在当前模块前台scaffold.js中配置renderers属性及渲染处理

```javascript
//当前模块前台scaffold.js中配置
renderers: {
    modifyType: function(data) {
       var modifyTypeMap = {
            '1': '小型',
            '2': '中型',
            '3': '大型'
        };
        return modifyTypeMap[data];
    }
}
```

###5.3.picker字段渲染

首先，在picker所在的模块后台scaffold.js中，为需要渲染的字段配置renderer属性

```javascript
exports.picker = {
    grid: {
        columns: [
            {name: 'type', defaultContent: '小型', renderer: 'modifyType'}
        ]
    }
}
```

然后，在当前模块前台scaffold.js中配置inlineGridPickerRenderers属性及渲染处理

```javascript
inlineGridPickerRenderers: {
    modifyType: function(data) {
       var modifyTypeMap = {
            '1': '小型',
            '2': '中型',
            '3': '大型'
        };
        return modifyTypeMap[data];
    }
}
```

###更多回调方法详情，请看系统cdeio-ui


