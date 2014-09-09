# 列表高级配置（查询条件）

本章主要介绍如何实现条件查询功能。

##说明：

###1.打开条件查询开关

```js
exports.haveFilter = true;

```
此处设置为ture，表示页面上将有条件查询功能，如果设置false则无条件查询功能，系统默认设置为true。

###2.配置字段过滤分组

```js
exports.fieldGroups = {
    ...
    filter: [
        {name: 'name', type:'text'},
        {name: 'code', type: 'number-range'},
        {name: 'birthday', type: 'date-range'}]
};

```
此处的`filter`为分组名称，属性`type`用来配置字段对应的过滤组件类型。

###3.配置过滤分组表单

```js
exports.forms = {
    ...
    filter: {
        groups: [{
            name: 'filter', columns: 4
        }]
    }
};

```
此处的`filter`用来配置上例（fieldGroups）中的过滤组件表单.

`name`属性的值为上例中的分组名称;columns的值为过滤组件表单的显示列数。
