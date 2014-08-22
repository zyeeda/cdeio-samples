# 表单页签

此处主要介绍表单的页签配置。

```js
exports.forms = {
    defaults: {
        groups: [
            {name: 'defaults', columns: 2},
            {name: 'tabs', columns: 2}
        ],
        tabs: [
            {title: '项目信息', groups: ['defaults']},
            {title: '费用明细', groups: ['tabs']}
        ],
        size: 'large'
    }
};
```
如果表单需要页签时，则需配置`tabs`；title的值为页面标题，groups对应的是字段组。

