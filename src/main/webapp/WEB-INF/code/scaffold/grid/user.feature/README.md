## 列表高级配置(查询条件）

很多业务系统会有条件查询或高级查询的功能需求，此文讲的是如何高级查询功能的配置。

### 1. 打开条件查询开关

```javascript
exports.haveFilter = true;
```

在 scaffold 文件中加入以上配置，表示页面上将有条件查询功能，如果设置 false 表示无条件查询功能，系统默认值为 false。

###2. 配置查询表单分组

```javascript
exports.fieldGroups = {
    ...
    filter: [
        {name: 'name', type:'text'},
        {name: 'code', type: 'number-range'},
        {name: 'sex', type: 'dropdown', source: [{id: '男', text: '男'}, {id: '女', text: '女'}]},
        {name: 'birthday', type: 'date-range'}
    ]
};
```

此处的 filter 为过滤字段组组名，可任取。各字段可通过 `type` 配置过滤条件类型。

###3. 配置查询表单

```javascript
exports.forms = {
    ...
    filter: {
        groups: [{
            name: 'filter', columns: 4
        }]
    }
};
```

以上代码配置了查询表单显示方式。name 对应 exports.fieldGroup 中定义的条件查询表单分组名称。columns: 4 表示该字段组显示为 4 列。
