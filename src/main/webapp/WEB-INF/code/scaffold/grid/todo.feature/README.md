##自动生成列表

列表在业务系统中是大部分菜单首先展示的区域，系统也提供了对列表的配置功能。

```javascript
exports.grid = {
    columns: [
        {name: 'name', header: '名字'},
        {name: 'desc', header: '描述'}
    ]
};
```

在 scaffold 中 exports grid，在 grid 的 `columns` 中配置需要在列表显示的字段信息。

说明：

1.`name` 为实体中的字段名称。

2.`header` 为该字段对应的标题也就是列表的表头。可以不配置，但需要在标签配置即 `exports.labels` 中设置。
