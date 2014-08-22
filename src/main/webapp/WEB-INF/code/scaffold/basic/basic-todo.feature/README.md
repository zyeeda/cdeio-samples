##自动生成(最简配置)

本文主要讲如何用最少的代码实现增删查改等基础功能。

首先，在实体文件中有一个 `@Scaffold` 标记，里面配置了一个路径，然后只需要新建一个 `scaffold.js` 文件，假如配置的路径为 `/scaffold/basic/basic-todo` ，则需要在后台的 app 目录下新建目录 `/scaffold/basic/basic-todo.feature`，然后在此目录下新建 `scaffold.js` 文件。在此文件中加入以下几种配置即可。

###1. 过滤器

```javascript
exports.filters = {
    defaults: {
        '!basicTodoFilter': ''
    }
};
```

配置 `filter` 是为了过滤实体数据被查询的时候不需要的字段，filter 的名称为实体名称首字母小写，在后面加上 Filter。

** 注：关于 filter 配置的更多用法请参照 自动生成->基础->JSON序列化 菜单中的说明或查阅 API 文档 **

###2. 标签

```javascript
exports.labels = {
    name: '名称',
    description: '描述'
};
```

`label` 配置对应各字段在列表中显示的表头和表单中显示的字段标题。

###3. 字段分组

```javascript
exports.fieldGroups = {
    defaults: ['name', 'description']
};
```

以上代码是将某些字段归到一组，供新增、编辑和查看表单布局使用。默认只需配置一个 `defaults` 分组即可，系统内置了表单的默认配置，使用 `defaults` 分组对表单进行布局。

** 注：关于表单布局的更多配置请查阅 API 文档 **
