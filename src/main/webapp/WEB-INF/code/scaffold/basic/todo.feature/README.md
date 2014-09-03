## 自动生成(过滤器)

此处主要介绍filter的详细配置。

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
        ...
    }
};
```

filter 的名称为实体名称首字母小写，在后面加上 Filter。（例：实体Todo-->todoFilter）。
在该名称前加感叹号表示过滤掉所对应的字段，当页面中有不需要的字段可以在此处过滤掉，同时，为了避免实体关联互相引用而导致死循环，通常此处一般用于过滤掉关联实体所包含本实体对象（例：如上过滤掉关联实体BasicUser所包含的本实体的对象'todos'）；不加感叹号表示页面中需要所对应的字段。list表示列表list请求所用到的过滤，get表示表单get请求所用到的过滤，defaults表示默认使用的过滤。
