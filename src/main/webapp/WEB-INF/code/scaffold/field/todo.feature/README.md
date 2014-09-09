# 字段

本章主要介绍字段的一些常用配置。

## 1 字段分组配置

`fieldGroups`用于配置字段的分组，这些分组将用于表单（新增，编辑和查看）页面的布局展示。

```js
exports.fieldGroups = {
    defaults: ['name', ...
    ]
};
```

默认只需配置一个 `defaults` 分组即可，系统默认使用 `defaults` 分组对表单进行布局。

## 2 字段类型配置

### 2.1 自动生成字段类型

默认情况下，表单页面上的各种字段类型，会由系统根据实体属性类型自动生成。

需要使用自动生成字段类型时，只需要在字段组中配置实体属性名即可，如下代码所示：

```js
exports.fieldGroups = {
    defaults: ['name', 'startDate', ...
    ]
};
```

如果实体属性是String类型，则会在表单页面中自动生成文本框；

属性是Date类型，则会生成日期选择器；

属性是Double类型，则会生成下拉列表；

普通多对一关联属性则会生成GridPicker；

如果多对一的关联实体实现了TreeNode接口，则会生成TreePicker。

### 2.2 自定义字段类型

虽然系统能根据实体属性类型生成字段类型，但这还不能满足定制业务的需求。

基于此，平台提供了自定义字段类型的配置。

#### 2.2.1 下拉列表

```js
exports.fieldGroups = {
    defaults: [...
        {name: 'level', type: 'dropdown', defaultValue: '一般',
            source: [
                {id: '紧急', text: '紧急'},
                ...
            ]
        }
    ]
};
```
name为实体的属性名称；

type为对应的组件类型，`dropdown`为下拉列表；

defaulatValue所对应的值为下拉列表默认选中的值；

source中配置好下拉列表数据；

id所对应的值将持久化数据库中；

text所对应的值用于页面显示。

#### 2.2.2 文本域

```js
exports.fieldGroups = {
    defaults: [...
        {name: 'description', type: 'textarea', colspan: 2}
    ]
};
```

name的值为实体的属性名称；

type为对应的组件类型，`textarea`为文本域；

colspan设置为2表示跨两列。

#### 2.2.3 FilePicker

FilePicker为附件组件。

平台中内置了Attachment类用于管理附件，如果需要上传附件则与Attachment定义好关联属性即可。

```js
exports.fieldGroups = {
    defaults: [...
        {
            name: 'attach',
            type: 'file-picker',
            url: 'invoke/system/upload',
            acceptFileTypes: "(\\.|\\/)(doc|xls|ppt)$"
        }
   ]
};
```

name的值为实体的属性名称；

type为对应的组件类型，`file-picker`为文件选择器；

url为上传附件请求url；

acceptFileTypes为可接受文件类型。

#### 2.2.4 InlineGrid

`InlineGrid`为子列表，通常用于展示一对多或者多对多关系。

```js
exports.fieldGroups = {
    defaults: [...
        {
            label: '任务分配',
            type: 'inline-grid',
            name: 'users',
            colspan: 2,
            allowAdd: false,
            multiple: true,
            crossPage: true,
            allowPick: true
        }
   ]
};
```
name的值为实体的属性名称；

label属性的值为标签名；

type为对应的组件类型，`inline-grid`表示子列表；

allowAdd配置是否允许增加；

multiple配置是否允许多选；

crossPage配置是否允许跨页；

allowPick配置是否允许选择，值为false时不允许，值为true时允许。

** 注：关于自定义生成字段类型的更多详细配置请查阅 API 文档 **
