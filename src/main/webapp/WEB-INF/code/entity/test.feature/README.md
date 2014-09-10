## Scaffold

### 功能说明
展示 Scaffold 标记的作用，通过在实体上打 Scaffold 标记，实体就能自动生成 CRUD 功能。

### 使用说明

    @Scaffold("/entity/test")
- Scaffold 标记确定此实体是需要自动生成的
- 参数路径  约定了它自动生成配置文件的路径：WEB-INF/app/`entity/test`.feature/scaffold.js，其中：
    - exports.filters 是跟生成json数据有关
    - exports.labels 是显示名称
    - exports.fieldGroups 规定了列表字段和表单字段
    - 更详细介绍请查看示例[自动生成/最简配置](#code/scaffold/basic/scaffold:basic-todo)

>注意
 @Scaffold支持同时挂载多个路径，比如 @Scaffold("/entity/test", "demos/test")