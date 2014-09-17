本例主要演示列表的基础配置。

列表的配置通过 grid 来完成，最常用的作用是给列表配置展示哪些字段和展示字段所对应的 header，代码示例如下：

```js
exports.grid = {
    columns: [
        {name: 'name', header: '名字'},
        {name: 'desc', header: '描述'}
    ]
};
```
示例代码配置了此列表将展示 name 和 desc 两个字段，并且 name 字段的显示名称为 “ 名称 ”，desc 字段的显示名称为 “ 描述 ”。

