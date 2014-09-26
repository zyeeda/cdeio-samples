本例主要介绍如何在列表页面添加查询表单。

通过配置 haveFilter、fieldGroups 和 forms，可以在列表页面实现可收缩查询表单，具体的界面效果请查看本例的样例效果，过滤表单在击右上角按钮后显示。
示例代码如下：
```js
exports.haveFilter = true;

exports.fieldGroups = {
    filterGroup: [
        {name: 'name', type:'text'},
        {name: 'code', type: 'number-range'},
        {name: 'sex', type: 'dropdown', source: [{id: '男', text: '男'}, {id: '女', text: '女'}]},
        {name: 'birthday', type: 'date-range'}]
};

exports.forms = {
    filter: {
        groups: [{
            name: 'filterGroup', columns: 4
        }]
    }
};

```
示例代码中，设置 `haveFilter = true` 表示开启条件查询功能；
fieldGroups 配置了名称为 `filter` 的字段分组，该分组中有四个字段，分别为 name 、code 、 sex 和 birthday（即该查询表单中有四个查询字段）；
forms 配置了一个 `filter` （此名称为预定义的固定名称，表示查询表单）表单， filter 表单分组中包含一个名称为 `filterGroup` 的字段分组，该字段分组一行分为 4 列展示。
