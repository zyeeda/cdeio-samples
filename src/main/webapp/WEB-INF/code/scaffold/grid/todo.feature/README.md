# 列表配置

本章主要介绍列表的基础配置。

```js
exports.grid = {
    columns: [
        {name: 'name', header: '名字'},
        {name: 'desc', header: '描述'}
    ]
};
```
`grid`的`columns`属性中可以配置列表需要展现的字段信息。

说明：

1.`name` 为实体中的字段名称。

2.`header` 为该字段对应的表头。

如果只是为了达到给列表中字段配置中文标题的目的，通过`labels`配置就可以实现。

不同的是`grid`的配置只针对列表，并不像`labels`那样可以对列表和表单都生效。

而且`grid`的优先级高于`labels`，假设同时配置了`labels`和`grid`，那么列表中字段的中文标题会以`grid`的配置来展示。

当然，除此之外`grid`还有更高级的用法，这个会在后续章节中介绍。
