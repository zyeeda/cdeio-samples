## 自动生成字段(验证规则)

以往的业务系统在验证表单数据时需要为表单上的输入控件绑定事件，用 js 验证，复杂的验证逻辑则是向后台发送 ajax 请求，以在页面不关闭的情况下达到验证数据的效果。在接触过我们系统之后，正如你所想的，在我们这个系统中，简单常用的验证系统自会处理，并且会有统一的验证提醒样式，开发人员只需配置即可。此文主要是介绍表单中各字段的常验证规则配置。

```javascript
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

表单验证是在 `exports.fieldGroups` 中定义字段时，定义好验证规则。字段定义中配置属性`required: true`，表示在表单中字段对应的标签后加上表示必填项的红色的 * 标记，但光有这个配置并不会验证数据的必填项，如果需添加验证规则则需在 `validations` 属性中配置 `rules`。各 rules 详细说明如下所示：

`required: true` 表示必填。

`rangelength: [6, 40]` 表示验证字符串的长度位数在6至40之间。

`equalTo: 'password'` 表示验证与某字段输入内容一致，此处为验证与表单中 password 字段输入内容一致。

`email: true` 表示验证输入内容为正确格式的电子邮件。

`url: true` 表示验证输入内容为有效的网址。

`digits: true` 表示验证输入必须为整数。

`range: [0, 60]` 表示验证输入数字大小在0到60之间。

`number: true` 表示验证输入必须为数字。

`creditcard: true` 表示验证输入内容为合法的信用卡号。
