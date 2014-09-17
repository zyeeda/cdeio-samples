本例主要介绍表单的分组配置。

平台表单中字段的分组展示是通过在 forms 的 `groups` 中配置多个对象来实现的，而 `groups` 中每个对象的 `name` 都引用自 `fieldGroups` 中的字段分组名称。

示例代码如下：
```js
exports.fieldGroups = {
    defaults: ['name', {name: 'description', type: 'textarea'}
    ],
    attach:['startDate',
        {name: 'status', type: 'dropdown', defaultValue: '一般',
            source:[
                {id: '紧急', text: '紧急'},
                {id: '重大', text: '重大'},
                {id: '一般', text: '一般'}
            ]
        }
    ],
    inLineUserGrid: [{
        label: '任务分配',
        type: 'inline-grid',
        name: 'users',
        colspan: 2,
        allowAdd: false,
        multiple: true,
        crossPage: true,
        allowPick: true
    }]
};

exports.forms = {
    defaults: {
        groups: [
            {name: 'defaults', label: '任务信息'},
            {name: 'attach', label: '附加信息', columns: 2},
            {name: 'inLineUserGrid', columns: 2}
        ]
    }
};
```
示例代码给表单配置了三个分组，第一个分组的名称是 “ 任务信息 ” ，引用 fieldGroups 的字段分组 `defaults`，每行显示一个字段；
第二个分组的名称是 “ 附加信息 ”，引用 fieldGroups 的字段分组 `attach`，每行显示两个字段；
第三个分组的名称是 “ inLineUserGrid ”，引用 fieldGroups 的字段分组 `fieldGroups`，columns的值小于等于上一个分组（及引用 attach 的分组）的 columns 时横向铺满。
