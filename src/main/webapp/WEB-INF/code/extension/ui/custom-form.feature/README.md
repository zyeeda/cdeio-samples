#自定义表单视图
##目的：主要给开发人员自定义添加、编辑、显示等等表单视图
###1. 添加、编辑、显示表单自定义视图
####步骤1:后台scaffold.js配置说明
在`exports.fieldGroups`中,给需要自定义的分组中所有字段配置`hideLabel: true`属性

在`exports.forms`中,给需要自定义页面配置`custom: true`(是否自定义)和`template: 'xxx'`(表单模板路径)属性

####步骤2:前台配置说明
根据后台`scaffold.js`文件中的`template`路径地址，在前台新建相应的文件

**表单模板补充说明**

1. 表单样式:  一部分来自bootstrap框架,更多样式详情请参考`bootstrap官网`http://www.bootcss.com/ ,另一部分来自平台自定义,也可以自己定义样式

2. `{{}}` :  handlebarsjs框架的模板标记,更多模板标记详情请参考`handlebarsjs官网`http://handlebarsjs.com/





