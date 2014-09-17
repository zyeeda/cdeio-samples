本例主要介绍表单界面字段编辑控件。

平台提供丰富的字段编辑控件，包括文本框、下拉框、日期选择器、对象选择器等等。通过给字段的 `type` 属性赋值平台预定义的类型值就可以在编辑自动生成对应的编辑控件，而对于未配置 `type` 属性的字段，默认会根据实体中对应的字段类型生成编辑控件。

示例代码如下：
```js
exports.fieldGroups = {
    defaults: ['name', 'startDate',
       {name: 'level', type: 'dropdown', defaultValue: '一般',
            source: [
                {id: '紧急', text: '紧急'},
                {id: '重大', text: '重大'},
                {id: '一般', text: '一般'}
            ]
        },
        {name: 'attach', type: 'file-picker', url: 'invoke/system/upload',
            acceptFileTypes: "(\\.|\\/)(doc|xls|ppt)$"
        }, 'tag', 'project',
        {name: 'description', type: 'textarea', colspan: 2}
    ],
    inLineUserGrid: [{
        label: '任务分配',
        type: 'inline-grid',
        name: 'users',
        colspan: 2,
        allowAdd: false,
        multiple: true,
        crossPage: false,
        allowPick: true
    }]
};
```

示例代码中的配置将会在新增和编辑页面中生成一下控件： 
`name` 字段对应的文本框；
`startDate` 对应的日期选择器（本例中 startDate 为日期类型）；
`level` 对应的下拉框，其中默认值为 “ 一般 ”，包含 “ 紧急 ”、“ 重大 ”和“ 一般 ”三个选项；
`attach` 对应的文件选择器；
`description` 对应的文本域；
`users` 对应的子列表。

<span class="badge badge-warning">注</span>&nbsp;：更多编辑空间类型详见API文档。
