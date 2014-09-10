# 过滤器配置

本章主要介绍filter的详细配置。
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
filter 的名称为实体名称首字母小写，在后面加上 Filter。（例：实体Todo的Filter名称为todoFilter）。

在Filter名称前加`！`表示过滤掉所配置的字段。

对于存在自引用的类，为了避免实体关联互相引用而导致死循环，通常会过滤掉关联实体所包含本实体对象（例如：上述配置过滤掉关联实体BasicUser所

包含的本实体的对象'todos'）；

不加`！`表示包含配置的字段。

list表示列表list请求所用到的过滤器；get表示表单get请求所用到的过滤器；defaults表示默认使用的过滤。
