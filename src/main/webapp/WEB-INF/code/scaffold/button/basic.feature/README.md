本例主要介绍如何修改默认按钮的属性以及添加自定义按钮。

 Cdeio 的功按钮分为两种，一种是系统预定义按钮，一种是用户自定义按钮。
 Cdeio 预定义按钮都是一些常用的功能按钮，例如添加、查看、编辑、删除等， Cdeio 的自动构建功能会初始化这些按钮到相应的功能页面；
自定义按钮则需要开发者自己定义按钮样式，并添加对应的按钮事件。

##预定义按钮
通常情况下，预定义按钮是不需要开发者做任何配置，但是可以通过覆盖预定义按钮来实现一些个性化需求。代码示例如下：

```javascript
exports.operators = {
    add: {label: '添加', icon: 'icon-plus', group: '10-add', style: 'btn-success', show: 'always', order: 100}
};
```
示例代码覆盖了预定义添加按钮 `add` ，定义了按钮的标题为 “ 添加 ” ，按钮图标为 “ icon-plus ” ，按钮分组为 “ 10-add ”，样式为 “ btn-success ”，显示方式为 “ always ”（总是显示），排序值为 100。

##自定义按钮
添加自定义按钮类似于覆盖预定义按钮，只不过按钮的名称不在预定义按钮范围中。

示例代码如下：
```javascript
exports.operators = {
    buttonOne: {label: '按钮一', icon: 'icon-comment-alt', group: '40-other', style: 'btn-yellow', show: 'always', order: 300}
};
```
示例代码定义了按钮 buttonOne，按钮的标题为 “ 按钮一 ” ，按钮图标为 “ icon-comment-alt ” ，按钮分组为 “ 40-other ”，样式为 “ btn-yellow ”，显示方式为 “ always ”（总是显示），排序值为 300。


<span class="badge badge-warning">注</span>&nbsp;：此时自定义按钮 buttonOne 并无响应事件，如需了解如何添加按钮对应的响应事件，请参考`扩展 -> 前端界面 -> 基础` 。



