本例主要介绍如何在列表页面添加查询表单。

通过配置 haveFilter、fieldGroups 和 forms，可以在列表页面实现可收缩查询表单，具体的界面效果请查看本例的样例效果。
示例代码如下：
```js
exports.haveFilter = true;

exports.fieldGroups = {
    filter: [
        {name: 'name', type:'text'},
        {name: 'code', type: 'number-range'},
        {name: 'birthday', type: 'date-range'}]
};

exports.forms = {
    filter: {
        groups: [{
            name: 'filter', columns: 4
        }]
    }
};

```
示例代码中，设置 `haveFilter = true` 表示开启条件查询功能；
fieldGroups 配置了名称为 `filter` 的字段分组（此名称为预定义的固定名称），该分组中有三个字段，分别为 name 、code 和 birthday（即改查询表单中有三个查询字段）；
forms 配置了分组中包含一个名称为 `filter` 的字段分组，该字段分组一行分为 4 列展示。
