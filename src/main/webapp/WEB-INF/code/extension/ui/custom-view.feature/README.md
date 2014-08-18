#自定义视图
##目的：如何自定义自己想要的视图

###步骤一:
**自定义视图路径的写法:例如#feature/extension/ui/form**

###步骤二:
**前台`feature.js`文件的说明**

在`feature.js`文件中配置页面的`layout`布局和`views`视图

`views`视图详细说明：
1. `model`:  模型，更多详情介绍，请参考`Backbone官网`http://backbonejs.org/

2. `events` :  页面事件，更多详情介绍，请参考`Backbone官网`http://backbonejs.org/ ，如果没有事件添加属性`avoidLoadingHandlers: true`就可以了

3. `extend`:  处理页面需要的数据的处理，处理数据需要的帮助类请参考`Underscore官网`http://documentcloud.github.io/underscore/

更多`layout`布局和`views`视图的详情介绍，请参考`MarionetteJS官网`http://marionettejs.com/

###步骤三:
**前台`templates.html`文件的说明**

1.开发人员可以根据`feature.js`文件中的配置来决定在`{{#layout}}{{/layout}}`或`{{#view xxx}}{{/view}}`里面编辑html代码

2.页面需要渲染的数据在`feature.js`文件中`extend`处理

3.页面的模板标记是`handlebarsjs`框架的模板标记，更多模板标记详情请参考`handlebarsjs官网`http://handlebarsjs.com/

###步骤四:
**页面事件的处理**

所有事件的处理都在`handlers`文件夹中根据视图名称建立相应的文件来处理，





