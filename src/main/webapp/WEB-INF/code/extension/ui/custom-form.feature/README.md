本例主要介绍如何配置自定义表单。

自定义表单视图功能主要是为了满足个性化定制的需求，为开发人员提供了默认表单视图以外的另一种选择。实现自定义表单功能包括两部分工作，首先是定义表单的模板文件，然后是在后端 scaffold.js 中配置自定义表单。

### 定义表单模板文件
模板文件文件主要由 HTML 标签和 `Handlebarsjs` 的标记语言组件，用来配置界面布局和数据填充格式。关于模板文件的代码示例请参见本例 `前端模板` ，在此就不一一描述了。

<span class="badge badge-warning">注</span>&nbsp; ：关于 `Handlebarsjs` 标记详情请参考_http://handlebarsjs.com_

### 配置自定义表单
需要在自定义表单中展示的字段，在配置 `fieldGroups` 时要将字段中的 `hideLabel` 设置为 true。同时，在 `forms` 中将 `template` 设置为模板的路径即可。代码示例如下：
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
示例代码中 fieldGroups 中配置 `hideLabel: true` 表示该字段将会在自定义表单中展现；forms 配置了 `add` 表单对应的展示模板为 `extension/ui/custom-form.feature/views/add.html`。

<span class="badge badge-warning">注</span>&nbsp; ： Cdeio 中大量用到了 `bootstrap` 框架的样式，更多样式详情请参考_http://www.bootcss.com/_






