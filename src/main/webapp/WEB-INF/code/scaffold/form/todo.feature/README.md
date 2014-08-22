# 表单分组

此处主要介绍表单的分组配置。

```js
exports.forms = {
    defaults: {
        groups: [
           {name: 'defaults', label: '任务信息'},
           {name: 'attach', label: '附加信息', columns: 2},
           {name: 'inLineUserGrid', columns: 2}
        ]
    }
};
```
如果在表单中需要呈现字段组分组效果，则需在`exports.forms`中配置字段组时，加上`label`配置，定义好字段组标题。
如果字段组为`inline-grid`则在配置字段时，则在label中配置好字段组标题即可。如下所示：
```js
exports.fieldGroups = {
    ...
    inLineUserGrid: [{
        label: '任务分配',
        type: 'inline-grid',
        name: 'users',
        ...
    }]
};
```
