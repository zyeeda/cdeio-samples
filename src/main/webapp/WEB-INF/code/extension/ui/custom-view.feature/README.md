本例主要介绍如何自定义视图。

对于大多数系统来说，列表足以满足常规的数据展示需求。但列表并不一定适合所有业务，为此平台提供了自定义视图的功能。自定义视图需要在前端定义功能文件、页面模板文件和事件处理文件，在本例中分别对应 feature.js 、templates.html 和 custom-view.js 。


### 定义模板文件（templates.html）
`templates.html` 为系统预定义文件名称，名称不可更改。此文件主要用来配置 `layout` 和 `view` , `layout` 用来配置布局容器，`view` 用来定义页面显示结构和数据填充格式。 
```html
{{#layout}}
    <div id="custom-view" name="customView"></div>
{{/layout}}

{{#view "custom-view"}}
<div class="container-fluid se-question-container">
    <input type="hidden" name="hidden-input" paperId="{{info.id}}" index="{{info.index}}" questionId="{{info.id}}" questionType="{{info.type}}" />
    ...
</div>
{{/view}}

```
示例代码定义了个 id 为 `custom-view` 的 layout ，并且定义了一个名为 `custom-view` 的 view。

### 定义事件处理文件（custom-view.js）
`custom-view.js` 为系统预定义文件名称，名称不可更改。此文件主要用来定义事件处理方法。
```javascript
define({
    changeQuestion: function(e) {
      ...
    }
});
```
示例代码中定义了一个名为 `changeQuestion` 的事件处理方法。


### 定义功能文件（feature.js）
`feature.js` 为系统预定义文件名称，名称不可更改。此文件主要用来定义页面布局和数据处理等功能实现方式及业务逻辑。
```javascript
define(['jquery', 'underscore'], function($, _) {
    return {
        layout: {
            regions: {
                customView: 'custom-view'
            }
        },
        views: [{
            name: 'inline:custom-view',
            region: 'customView',
            model: 'extension/ui/basic',
            events: {
                'click btn-*': 'changeQuestion',
                'click changeToPreviousBtn': 'changeToPreviousQuestion',
                'click changeToNextBtn': 'changeToNextQuestion',
                'click submitAnswerBtn': 'submitAnswer'
            },
            extend: {
                serializeData: function(_super) {
                   ....
                },
                afterRender: function(su) {
                    $('.se-question-other-number').tooltip();
                    return su.apply(this);
                }
            }
        }]
    };
});
```
示例代码中 `layout` 的配置表示引用 templates.html 中 layout 的布局容器；`views` 中 name 配置表示调用 templates.html 中 view 的代码来展示，`region`配置表示代码将被填充到 layout 容器中，`model` 配置表示调用 scaffold 路径为 `extension/ui/basic` 的实体功能来请求数据，`events` 中定义了 templates.html 中按钮的点击事件，extend 中 `serializeData` 和 `afterRender` 分别配置渲染前数据的处理逻辑和渲染后数据处理的逻辑。






