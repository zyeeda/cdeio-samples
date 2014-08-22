# 列表高级配置（查询条件）

此处主要介绍如何实现条件查询功能。

##说明：

###1.打开条件查询开关

```js
exports.haveFilter = true;

```
此处设置为ture，表示页面上将有条件查询功能，如果设置false表示无条件查询功能，系统默认不设置为false。

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
此处的filter为过滤字段组组名，可任取。各字段可通过`type`配置过滤类型。

###3.定义表单过滤分组

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
此处定义filter表单字段组，name所对应的字段组为字段分组exports.fieldGroup中定义的字段组。columns: 4表示该字段组显示为4列。
