本例主要介绍字段的验证规则。

 Cdeio 通过对 fieldGroups 中字段配置 `validations`来添加字段验证规则，支持常用的各种字段验证，例如必填验证、长度验证、类型验证等等。

示例代码如下：

```js
exports.fieldGroups = {
    defaults: [
        {name: 'name', required: true, validations: {rules: {required: true}}},
        {name: 'account',required: true, validations: {rules: {required: true, rangelength: [6, 40]}}},
        {name: 'password', type: 'password', required: true, validations: {rules: {required: true, rangelength:[6, 20]}}},
        {name: 'password2', type: 'password', required: true, validations: {rules: {required: true, equalTo: 'password'}}},
        {name: 'email', validations: {rules: {email: true}}},
        {name: 'url', validations: {rules: {url: true}}},
        {name:'workyear', validations: {rules: {digits: true, range: [0, 60]}}},
        {name: 'salary', validations: {rules: {number: true, min: 2000}}},
        {name: 'creditcard', validations: {rules: {creditcard: true}}}
    ]
};
```
示例代码中的配置表示：
`name` 字段为必填字段；
`account` 字段为必填字段，且长度大于等于6，小于等于40；
`password` 字段为必填字段，且长度大于等于6，小于等于20；
`password2` 字段为必填字段，切值必须与`password` 字段的值相等；
`email` 字段的值必须为有效 email 地址；
`url` 字段的值必须为有效的 url 地址；
`workyear` 字段的值必须为整数，且值必须大于等于0，小于等于60；
`salary` 字段的值必须为数字，且不能小于2000；
`creditcard` 字段的必须为有效的信用卡号。

<span class="badge badge-warning">注</span>&nbsp;：{name: 'name', `required: true`, validations: {rules: {required: true}}} 中红色部分表示字段标题后带`*`标示。更多字段验证规则详见API文档。