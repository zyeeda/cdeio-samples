##自动生成表单(分组)

业务系统中通常会有需要在表单中能看到明确的多个分组，让表单界面带给用户一目了然的感觉，或者是为了在多个表单中要使用到某一块同样的界面布局，实现代码复用，就可以在 form 中配置多个分组。

###1. 无标签分组

```javascript
exports.forms = {
    add: {
        groups: [
            {name: 'addBasic', columns: 2},
            {name: 'simple'}
        ],
        size: 'large'
    },
    edit: {
        groups: [
            {name: 'editBasic', columns: 2},
            {name: 'simple'}
        ],
        size: 'large'
    },
    ...
};
```

以上代码将新增与编辑表单分开定义，两个表单中都包含了一个名为 `simple` 的分组。

###2. 有标签分组

为了让界面上的分组显示更清晰，一眼就能分辨出哪些数据是属于哪一个组的，我们可以在分组中加上 `label` 配置，系统会自动在表单中为各分组加上美观而统一的样式。

```javascript
exports.forms = {
    defaults: {
        groups: [
            {name: 'basic', label: '基础信息', columns: 2},
            {name: 'simple', label: '附加信息'}
        ],
        size: 'large'
    }
};
```
