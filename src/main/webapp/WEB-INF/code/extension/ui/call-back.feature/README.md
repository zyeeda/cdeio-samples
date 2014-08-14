##回调

###1. 平台回调方法的总结

####1.列表页面`grid`中添加、编辑、查看按钮的回调方法
```javascript
//在添加、编辑页面时，点击确定按钮之后调的方法
afterCloseDialog: function(dialogType, view, data) {
    ......
}

//点击添加、编辑、查看按钮前调的方法
beforeShowDialog: function(dialogType, view){
    ......
    return true;
}

//点击添加、编辑、查看按钮后调的方法
afterShowDialog: function(dialogType, view, data){
    ......
}

//点击删除按钮之前调的方法
beforeDel: function (gridView, grid, selected) {
    ......
    return true;
}
```

####2.表单中`picker`回调方法
要在picker所在的后台scaffold.js文件中配置picker字段及回调方法
```javascript
exports.picker = {
    grid: {
        columns: [......]
    },
    callback: 'routerPickerCallback',
    beforePickerConfirm: 'beforeRouterPickerConfirm',
    afterPickerConfirm: 'afterRouterPickerConfirm',
    beforeShowPicker: 'beforeShowRouterPicker'
}
```
```javascript
//点击编辑页面后调的方法
routerPickerCallback: function(view, data) {
    ......
}

//点击picker选择数据之前调的方法
beforeRouterPickerConfirm: function(view, data) {
    ......
    return true;
}

//点击picker选择数据之后调的方法
afterRouterPickerConfirm: function (view, data) {
    ......
}

//点击picker之前调的方法
beforeShowRouterPicker: function (view) {
    ......
    return true;
}
```

####3.表单中`inline-grid`添加、编辑、查看及选择按钮的回调方法
```javascript
//在inline-grid中,点击按钮之前调的方法
beforeShowInlineGridDialog: function(dialogType, view) {
    ......
    return true;
}

//在inline-grid中,点击按钮之后调的方法
afterShowInlineGridDialog: function(dialogType, view, data) {
    ......
    return true;
}

//验证inline-grid表单数据
validInlineGridFormData: function(dialogType, view, data) {
    ......
    return true;
}

//删除inline-grid数据之前
beforeInlineGridRemove: function(grid, view){
    ......
    return true;
}

//删除inline-grid数据之后
afterInlineGridRemove: function(grid, view){
    ......
}
```
####4.表单字段值变化的回调方法
```javascript
exports.fieldGroups = {
    defaults: [
        {name: 'name', statusChanger: true},
        {name: 'type', type: 'dropdown', defaultValue: '1', change: 'disableChange', source: [......]},
        {name: 'detailType', type: 'dropdown', defaultValue: '1', source: [......]}
    ]
}
```
如果表单字段配置`statusChanger: true`属性,会调用如下方法
```javascript
//表单字段改变时调的方法
formStatusChanged: function(data, el){
    ......
}
```
如果表单字段配置`change: 'disableChange'`属性,会调用如下方法
```javascript
//表单字段的级联操作
disableChange: function(view, selector) {
    ......
}
```

####5.表单字段渲染的回调方法
如果列表字段或inline-grid字段需要渲染,请为字段配置`renderer`属性
```javascript
//当前模块后台scaffold.js中配置
exports.grid = {
    columns: [
        {name: 'type', defaultContent: '小型', renderer: 'modifyType'}
    ]
}
//inline-grid所在模块后台scaffold.js中配置
exports['inline-grid'] = {
    columns: [
        {name: 'type', defaultContent: '小型', renderer: 'modifyType'}
    ]
}
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

如果表单picker里面列表字段需要渲染,请为字段配置`renderer`属性

```javascript
//picker所在模块后台scaffold.js中配置
exports.picker = {
    grid: {
        columns: [
            {name: 'type', defaultContent: '小型', renderer: 'modifyType'}
        ]
    }
}
//当前模块前台scaffold.js中配置
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

###更多回调方法详情，请看平台coala-ui


