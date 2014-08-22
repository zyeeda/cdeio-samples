# 列表配置

此处主要介绍页面列表的基础配置。

```js
exports.grid = {
    columns: [
        {name: 'name', header: '名字'},
        {name: 'desc', header: '描述'}
    ]
};
```
在`exports.grid`的`columns`中可以配置列表需要展现的字段信息。需要展现的字段可以在此处一一配置。

说明：

1.`name` 为实体中的字段名称。

2.`header` 为该字段对应的标题也就是列表的表头。可以不配置，但需要在标签配置即exports.labels中设置。
