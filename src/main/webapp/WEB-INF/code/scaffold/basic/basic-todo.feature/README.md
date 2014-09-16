##自动生成(最简配置)

本例主要介绍如何用最少的代码来实现增删查改等基础功能。

代码主要包含两部分，实体和scaffold.js文件，通过以下两个步骤就可以实现。</br>
第一步：新建实体，配置 @Scaffold 注解，配置 Hibernate 实体字段映射及验证注解，具体步骤在此就不做赘述。</br>
第二步：新建实体对应的 scaffold.js 文件，添加 filters、labels 和 fieldGroups 配置即可。关于 filters 、labels 和 fieldGroups 的用法及作用，下面将进行简单的介绍。


###1. filters
filters 用来配置 Json 序列化的规则，示例代码如下：
```javascript
exports.filters = {
    defaults: {
        '!basicTodoFilter': ''
    }
};
```
此段代码表示实体 BasicTodo Json序列化的时候不包含的字段为空，既包含所有字段。

###2. labels
labels 用来配置字段对应的中文显示名称。
```javascript
exports.labels = {
    name: '名称',
    description: '描述'
};
```
此段代码表示设置 name 的中文显示名称为 “ 名称 ”；设置 description 的中文显示名称为 “ 描述 ”

###3. fieldGroups
fieldGroups 用来配置新增、编辑和查看的界面布局。

```javascript
exports.fieldGroups = {
    defaults: ['name', 'description']
};
```
此段代码设置了一个 defaults 分组，分组中包含 name 和 description 字段。

** 注：关于表单布局的更多配置请查阅 API 文档 **
