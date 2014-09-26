#  Json 序列化

本例主要介绍 Json 序列化的相关配置。

 Cdeio 是以 Json 格式为标准来传递数据的，所以需要提供 Json 序列化的规则。
Json 序列化的规则通过`filters`来配置，可以配置多种规则，并且每种规则又可以配置具体的过滤字段和过滤层级。

示例代码如下：

```js
exports.filters = {
    defaults: {
        '!todoFilter': ['children', 'parent(1)'],
        'basicUserFilter': 'name'
    },
    list: {
        '!todoFilter': ['children', 'parent(1)'],
        '!basicUserFilter': 'todos'
    },
     get: {
        '!todoFilter': ['children', 'parent(1)'],
        '!basicUserFilter': 'todos'
    }
};
```
此例中配置了三个规则，分别是 defaults 、list 和 get。
这三个规则的名称均为 Cdeio 预定义，分别对应了默认序列化、列表序列化和查看序列化的规则。

规则中 parent(1) 表示 parent 这个字段所引用的实体只取一级，就算 parent 之上仍然还有父节点数据也会被忽略掉。

示例代码中配置的最终结果是 Json序列化时，默认的序列化 Json 中不包含实体 Todo 实体的 children 字段和 BasicUser 实体的 name 字段，但是包含 Todo 实体的 parent 且只包含一层;列表的序列化 Json 中不包含实体 Todo 实体的 children 字段和 BasicUser 实体的 todos 字段，但是包含 Todo 实体的 parent 且只包含一层；查看的序列化 Json 中不包含实体 Todo 实体的 children 字段和 BasicUser 实体的 todos 字段，但是包含 Todo 实体的 parent 且只包含一层。

