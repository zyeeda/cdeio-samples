# 字段(验证规则)

本章主要介绍如何配置表单中字段的验证规则。

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
字段配置中属性`required: true`，表示在字段对应的标签后加`*`标记。

字段的验证规则通过在`fieldGroups`的字段配置中定义`validations`来实现。

`validations`中则配置`rules`属性来添加具体的规则。

rules配置详解如下所示：

1. `required: true` 表示必填。

2. `rangelength: [6, 40]` 表示验证字符串的长度位数在6至40之间。

3. `equalTo: 'password'` 表示验证与某字段输入内容一致，此处为验证与password字段输入内容一致。

4. `email: true` 表示验证输入内容为正确格式的电子邮件。

5. `url: true` 表示验证输入内容为有效的网址。

6. `digits: true` 表示验证输入必须为整数。

7. `range: [0, 60]` 表示验证输入数字大小在0到60之间。

8. `number: true` 表示验证输入必须为数字。

8. `creditcard: true` 表示验证输入内容为合法的信用卡号。


