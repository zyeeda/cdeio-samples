# 列表高级配置（filter）

此处主要介绍页面列表的高级配置（filter）

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
列表字段可以在`filter`中配置过滤查询条件。

说明：

1.`text`：文本模糊查询。

2.`number-range`：数字大小区间过滤查询。

3.`date-range`：日期大小区间过滤查询。

