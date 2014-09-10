# 表单页签

本章主要介绍表单的页签（即多tab页）配置。

表单页面需要对内容分类填写或展示时，可能需要用到tab页效果。

通过在`forms`中配置`tabs`属性可以实现tab页效果，示例代码如下：

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
`title`：tab页的名称；

`groups`：`defaults`属性`groups`（即跟tabs同层的那个groups）的name属性的值。


