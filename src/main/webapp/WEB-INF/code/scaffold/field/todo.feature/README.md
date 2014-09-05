## 自动生成字段

exports.fieldGroups 中的配置是将某些字段归到一组，便于新增、编辑和查看表单布局使用。默认只需配置一个 `defaults` 分组即可，系统内置了表单的默认配置，使用 `defaults` 分组对表单进行布局。
字段类型的生成将从以下两个方面作详细介绍。

```javascript
exports.fieldGroups = {
    defaults: [
        'name', ...
    ]
};
```

### 1. 自动生成字段类型

表单页面上的各种字段类型会由系统默认根据实体属性类型或关联属性的关联关系自动生成。比如在实体中属性是 String 类型，则会在表单页面中自动生成文本框，属性是 Date 类型，则会在表单页面中自动生成日期选择器。属性是 Boolean 类型，则会在表单页面中自动生成包含有是和否两个选项的下拉列表。普通多对一关联属性则会在表单页面中生成 GridPicker，如果多对一的关联实体实现了 TreeNode 接口，则会在表单页面中自动生成 TreePicker。自动生成字段类型只需要在字段组中配置字段名为实体属性名即可，如下代码所示：

```javascript
exports.fieldGroups = {
    defaults: ['name', 'startDate', ...
    ]
};
```

### 2. 自定义字段类型

尽管系统能根据实体属性类型或属性的关联关系自动生成字段类型，但仍无法满足任意业务场景的需要。比如想要 String 类型的的属性生成下拉列表或文本域等等，则需要自行配制。自定义字段类型部分代码简要配置说明如下所示：

#### 2.1 下拉列表

```javascript
exports.fieldGroups = {
    defaults: [
        {name: 'level', type: 'dropdown', defaultValue: '一般',
            source: [
                {id: '一般', text: '一般'},
                {id: '紧急', text: '紧急'},
                {id: '重大', text: '重大'}
            ]
        },
        ...
    ]
};
```

name 所对应的值为实体的属性，type 配置为 `dropdown` 即该字段类型为下拉列表，defaulatValue 所对应的值为下拉列表默认选中的值，source 中配置好下拉列表数据，id 所对应的值将被持久化存储在数据库中，text 所对应的值用于页面显示。

#### 2.2 文本域

```javascript
exports.fieldGroups = {
    defaults: [
        {name: 'description', type: 'textarea', colspan: 2},
        ...
    ]
};
```

name 所对应的值为实体的属性，type 配置为 `textarea` 即该字段类型为文本域，colspan 设置为 2 即表示跨两列。

#### 2.3 file-picker

```javascript
exports.fieldGroups = {
    defaults: [
        {
            name: 'attach',
            type: 'file-picker',
            url: 'invoke/system/upload',
            acceptFileTypes: "(\\.|\\/)(doc|xls|ppt)$"
        },
        ...
   ]
};
```

此处是介绍如何实现上传附件功能。系统中已经内置一个 Attachment 类，用于管理附件。如果需要上传附件则与 Attachment 定义好关联属性即可。name 所对应的值为实体的属性名称，type 配置为 `file-picker`，url 为上传附件请求 url，acceptFileTypes 为可接受文件类型。

#### 2.4 inline-grid

```javascript
exports.fieldGroups = {
    defaults: [
        {
            label: '任务分配',
            type: 'inline-grid',
            name: 'users',
            colspan: 2,
            allowAdd: false,
            multiple: true,
            crossPage: true,
            allowPick: true
        },
        ...
   ]
};
```

通过列表展现获取关联属性一个或多个的值，常用于多对多关联关系。name 所对应的值为实体的属性，label 为标签名，type 配置为 `inline-grid`，allowAdd 配置是否允许增加，multiple 配置是否允许多选，crossPage 配置是否允许跨页选中数据，allowPick 配置是否允许选择，值为 false 时即不允许，值为 true 时即允许，有关 inline-grid 详细介绍可参考。。。

** 注：关于自定义生成字段类型的更多详细配置请查阅 api 文档 **
