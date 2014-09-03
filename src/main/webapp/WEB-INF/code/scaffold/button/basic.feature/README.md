##自动生成(操作按钮)

在系统中，列表上方的按钮代表菜单的功能，虽然系统会自动生成添、删、改、查和刷新这些功能，但业务系统通常会有个性化的功能需求，为了支撑这种需求，系统提供了自定义功能按钮的 api 支持。

###1. 系统默认按钮配置

```javascript
{
    add: {label: '添加', icon: 'icon-plus', group: '10-add', style: 'btn-success', show: 'always', order: 100},
    show: {label: '查看', icon: 'icon-eye-open', group: '20-selected', style: 'btn-grey', show: 'single-selected', order: 100},
    edit: {label: '编辑', icon: 'icon-edit', group: '20-selected', style: 'btn-primary', show: 'single-selected', order: 200},
    del: {label: '删除', icon: 'icon-minus', group: '20-selected', style: 'btn-danger', order: 300},
    refresh: {label: '刷新', icon: 'icon-refresh', group: '30-refresh', style: 'btn-purple', show: 'always', order: 100}
}
```

`label`：按钮上显示的文字

`icon`：按钮的图标样式

`group`：按钮的分组信息，以 `10-add` 为例，整体写法一致表示一个分组，前面的数字表示分组间的顺序

`style`：按钮的样式

`show`：按钮显示条件，默认值为 selected，可选值有 always 一直显示、selected 选中数据时显示、single-selected 选中单条数据时显示、multi-selected 选中多条数据时显示、unselected 不选中数据时显示

`order`：按钮在分组中的排序，根据值的大小从左到右进行排序

** 注：icon 配置请参照 fontawesome 官网：http://fontawesome.io/3.2.1/icons，style 配置请参照 bootstrap 官网：http://v2.bootcss.com/base-css.html**

###2. 自定义按钮

####2.1 后台按钮配置

```javascript
// 打开与前台交互开关
exports.enableFrontendExtension = true;

exports.operators = {
    //自定义按钮
    buttonOne: {label: '按钮一', icon: 'icon-comment-alt', group: '40-other', style: 'btn-yellow', show: 'always', order: 300}
};
```

在 scaffold 中暴露 operators 配置，在其中加入业务需要的功能按钮配置。同时加入值为 true 的 enableFrontendExtension 配置，打开与前台交互的开关。

####2.2 编写按钮事件

```javascript
define({
    handlers: {
        buttonOne: function () {
            ......
        }
    }
});
```

在前台 app 目录中创建与后台 scaffold 一致的目录，并同样创建  `scaffold.js` 文件，在文件中加入 handlers，并加入与后台按钮配置名称一样的函数，按钮配置便可生效。
