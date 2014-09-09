# 表单分组

本章主要介绍表单的分组配置。

## 1 字段分组

在`forms`中配置`groups`可以实现对表单字段进行分组展示，示例代码如下：

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

`name`：`fieldGroups`中配置的分组名称（代码详见本章自动生成中scaffold.js）；

`label`：分组的标题；

`columns`：组件跨多少列。

## 2 嵌套列表

如果需要在表单中嵌套列表，则需要在`fieldGroups`中配置type为`inline-grid`的分组，代码如下：

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

`inline-grid`的详细配置在`自动生成 -> 字段 -> 基础`中已经介绍，所以此处就不过多描述。
