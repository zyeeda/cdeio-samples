本例主要介绍表单的页签（即多tab页）配置。

表单页面需要对内容分类填写或展示时，可能需要用到 tab 页效果，平台提供了简单便捷的配置方法来实现表单页面的分页签展示效果。
通过在 forms 中配置的 `tabs` 来实现分页，分页信息引用 fieldGroups 中的分组来确定 Tab 页中显示的字段。

示例代码如下：

```js
exports.fieldGroups = {
    defaults: ['name', 'startDate', 'desc', 'people'],
    tabs: [{name: 'cost', validations: {rules: {number: true}}}, 'intro']
};

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



