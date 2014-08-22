# 表单基础

此处主要介绍表单的基础配置。

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
在`exports.forms`中可以配置页面上各种表单需要的字段组以及表单的布局。在`add：`中配置新增表单，`edit`中配置编辑表单，`show`中配置查看表单，`filter`中配置条件查询表单。如果各表单不作详细配置，则使用defaults
配置。当exports.forms不作任何配置时，表单会使用`exports.labels`中的所有字段按照默认布局展现。`columns：2`表示表单布局为两列。
