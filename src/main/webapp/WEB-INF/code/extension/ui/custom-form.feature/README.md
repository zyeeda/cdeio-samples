##自定义表单视图

###1. 添加、编辑、显示页面自定义视图
####步骤1:
在`exports.fieldGroups`中以分组的形式，需要自定义的分组字段配置`hideLabel: true`属性

在`exports.forms`中配置`custom: true`和`template: 'xxx'`属性
```javascript
exports.fieldGroups = {
    defaults: [
        {name: 'name'},
        {name: 'applicant'},
        {name: 'applyTime'},
        {name: 'description'}
    ],
    add: [
        {name: 'name', hideLabel: true},
        {name: 'applicant', hideLabel: true},
        {name: 'applyTime', hideLabel: true},
        {name: 'description', hideLabel: true}
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
    },
    edit: {
        size: 'large',
        groups: [
            {name: 'defaults', columns: 2}
        ]
    },
    show: {
        size: 'large',
        custom: true,
        template: 'extension/ui/custom-form.feature/views/show.html',
        groups: [
            {name: 'add', columns: 2}
        ]
    }
};
```
####步骤2:
根据`template`路径地址，新建views文件夹及在此新增文件
```javascript
<fieldset class="c-form-group-cols-2 custom-form">
    <div class="row-fluid">
        <div class="span12">
            <table class="table table-bordered table-condensed">
                <tbody>
                    <tr>
                        <td class="span2" style="text-align:right;vertical-align:middle;" >
                            <label>名称&nbsp;&nbsp;&nbsp;</label>
                        </td>
                        <td class="span4">{{{name}}}</td>
                        <td class="span2" style="text-align:right;vertical-align:middle;" >
                            <label>申请人&nbsp;&nbsp;&nbsp;</label>
                        </td>
                        <td class="span4">{{{applicant}}}</td>
                    </tr>
                    <tr>
                        <td class="span2" style="text-align:right;vertical-align:middle;" >
                            <label>申请时间&nbsp;&nbsp;&nbsp;</label>
                        </td>
                        <td class="span4">{{{applyTime}}}</td>
                        <td class="span2" style="text-align:right;vertical-align:middle;" >
                            <label>描述&nbsp;&nbsp;&nbsp;</label>
                        </td>
                        <td class="span4">{{{description}}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</fieldset>
```
####详细说明:

1. 表单样式:  一部分来自bootstrap框架,更多样式详情请参考http://www.bootcss.com/ ,另一部分来自平台自定义

2. `{{{}}}` :  handlebarsjs模板标记,更多标记详情请参考http://handlebarsjs.com/

###2. 弹出框自定义视图

####步骤一.在前台文件夹中新建自定义样式js文件
####步骤二.在需要自定义样式中加载样式js文件




