# 表单基础

本章主要介绍表单的基础配置。

不作任何配置时，表单会使用`labels`中的所有字段按照默认布局展现。

如果需要定制，则可以在`forms`配置各表单字段组以及布局。

示例代码如下：

```js
exports.forms = {
    defaults: {
        groups: [{name: 'defaults', columns: 2}]
    },
    add: {
        groups: [...]
    },
    edit: {
        ...
    },
    show: {
        ...
    },
    filter: {

    }
};
```
`defaults`：如果不需要为添加，编辑，查看等表单界面单独配置字段分组和布局方式，则使用defaults配置即可;

`add`：配置新增表单；

`edit`：配置编辑表单；

`show`：配置查看表单；

`filter`：配置条件查询表单。


