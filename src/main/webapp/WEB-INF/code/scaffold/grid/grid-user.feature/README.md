# 列表高级配置（filter）

本章主要介绍页面列表的高级配置（filter）

```js
exports.grid = {
    columns: [
        {name: 'name', filter: 'text', header: '名字' },
        {name:'code', filter: 'number-range'},
        {name: 'birthday', filter: 'date-range', header: '生日'},
        {name:'email', filter: 'text'}
    ]
};
```
通过配置`filter`，可以在列表上方生成高级检索组件。

说明：

1.`text`：文本模糊查询。

2.`number-range`：数字区间过滤查询。

3.`date-range`：日期区间过滤查询。

`filter`的值类型详见API文档。
