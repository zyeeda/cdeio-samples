##列表高级配置（filter）

业务系统中列表展示数据时通常需要根据不同条件过滤数据，系统提供了一种直接在列表中过滤数据的配置功能。

```javascript
exports.grid = {
    columns: [
        {name: 'name', filter: 'text'},
        {name: 'code', filter: 'number-range'},
        {name: 'sex', filter: 'select', source: [{id: '1', label: '男'}, {id: '2', label: '女'}]},
        {name: 'birthday', filter: 'date-range'},
        {name: 'email', filter: 'text'}
    ]
};
```

在列表字段配置中加入 `filter` 值为搜索条件展示类型。常用搜索条件类型如下：

1.`text`：文本模糊查询。

2.`number-range`：数字大小区间过滤查询。

3.`select`：下拉框查询。

3.`date-range`：日期大小区间过滤查询。
