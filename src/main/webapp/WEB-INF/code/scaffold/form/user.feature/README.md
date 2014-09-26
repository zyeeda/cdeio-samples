本例主要介绍表单的基础配置。

 Cdeio 通过配置 `forms` 来对表单进行配置,其中配置项 `groups` 引用 `fieldGroups` 中定义的分组名称来对表单进行分组布局。

示例代码如下：

```js
exports.fieldGroups = {
    defaults: ['name',
       {name: 'sex',
        type: 'dropdown',
        defaultValue: '',
        source: [
            {id: '男', text: '男'},
            {id: '女', text: '女'}
        ]},
        'birthday', 'email'
    ]
};

exports.forms = {
    defaults: {
        groups: [{name: 'defaults', columns: 2}]
    }
};
```
示例代码中 `columns: 2` 表示表单显示布局为一行显示成两列，而 fieldGroups 中 `defaults` 字段分组中有四个字段，分别为 name、sex、birthday 和 email。所以，最终表单中字段将显示成两行，name 和 sex 显示在第一行，birthday 和 email显示在第二行。



