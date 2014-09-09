#扩展界面（自定义表单视图）

本章主要介绍如何自定义表单视图。

自定义表单视图功能主要是为了满足个性化定制的需求，为开发人员提供了默认表单视图以外的另一种选择。

自定义表单视图包含两部分：

首先是配置scaffold；

然后是配置模板。

##1.在后台scaffold配置说明

给需要自定义的分组中所有字段配置`hideLabel: true`属性；

给需要自定义页面配置`custom: true`(是否自定义，默认值false)和`template: 'xxx'`(表单模板路径)属性。

代码示例如下：

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





