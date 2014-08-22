#扩展界面（自定义表单视图）
尽管默认的表单视图能展示常见的视图，但开发人员可能会根据项目的功能需求想要定义自定义表单视图，为此系统为开发人员提供了自定义表单视图的功能。

##1.在后台scaffold配置说明
给需要自定义的分组中所有字段配置`hideLabel: true`属性

给需要自定义页面配置`custom: true`(是否自定义，默认值false)和`template: 'xxx'`(表单模板路径)属性
```javascript
exports.fieldGroups = {
    add: [
        {name: 'name', hideLabel: true},
        {name: 'applicant', hideLabel: true},
        {name: 'applyTime', hideLabel: true},
        {name: 'description', hideLabel: true, type: 'textarea', rowspan: 3},
        {name: 'mainAppearance', hideLabel: true, defaultValue: true, type: 'dropdown',
            source: [
                {id: true, text: '合格'},
                {id: false, text: '不合格'}
            ]
        },
        {name: 'mainRemark', hideLabel: true},
        {name: 'auxAppearance', hideLabel: true, defaultValue: true, type: 'dropdown',
            source: [
                {id: true, text: '合格'},
                {id: false, text: '不合格'}
            ]
        },
        {name: 'auxRemark', hideLabel: true}
    ]
};

exports.forms = {
    add: {
        size: 'large',
        custom: true,
        template: 'extension/ui/custom-form.feature/views/add.html',
        groups: [
            {name: 'add', columns: 2}
        ]
    }
};
```

##2.在前台配置说明
根据后台scaffold文件中的`template`路径地址，在前台新建相应的文件

**表单模板补充说明**

1. 表单样式:  一部分来自bootstrap框架,更多样式详情请参考`bootstrap官网`http://www.bootcss.com/ ,另一部分来自系统自定义,也可以自己定义样式

2. `{{}}` :  handlebarsjs框架的模板标记,更多模板标记详情请参考`handlebarsjs官网`http://handlebarsjs.com/





