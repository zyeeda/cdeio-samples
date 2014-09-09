##自动生成(最简配置)

本文主要讲如何用最少的代码实现增删查改等基础功能。

首先，新建实体，在实体中配置`@Scaffold` 标记，然后根据`@Scaffold` 标记中的路径新建对应的`scaffold.js` 文件(假设`@Scaffold` 标记配置的路径为 `/scaffold/basic/basic-todo` ，则需要在后台的 app 目录下新建目录 `/scaffold/basic/basic-todo.feature`，并在此目录下新建`scaffold.js` 文件)，并在`scaffold.js` 文件中加入以下配置：

###1. 过滤器

```javascript
exports.filters = {
    defaults: {
        '!basicTodoFilter': ''
    }
};
```

`filter` 用来过滤数据查询结果集中的字段，filter 的名称为实体名称首字母小写，在后面加上 Filter。

** 注：关于 filter 配置的更多用法请参照 自动生成->基础->JSON序列化 菜单中的说明或查阅 API 文档 **

###2. 标签

```javascript
exports.labels = {
    name: '名称',
    description: '描述'
};
```

`label` 用来配置列表和表单中展示字段对应的中文名称。

###3. 字段分组

```javascript
exports.fieldGroups = {
    defaults: ['name', 'description']
};
```

`fieldGroups`用来配置新增、编辑和查看的界面布局。系统内置了表单的默认配置，使用 `defaults` 分组对表单进行布局。

** 注：关于表单布局的更多配置请查阅 API 文档 **
