#扩展界面（自定义视图）
一般视图的展示是列表，但开发人员可能会根据项目的功能需求想要定义自定义视图，为此系统为开发人员提供了自定义视图的功能。

##1.**自定义视图路径的写法:例如#feature/extension/ui/form**

##2.**前台feature文件的说明**

在此文件中主要配置页面的布局（layout）和视图（views）

layout布局详细说明：

1. `regions`: 区域，区域提供一致的方法来管理，展示和销毁应用程序和布局的视图，可以在视图创建嵌套的区域

views视图详细说明：
1. `model`:  模型，更多详情介绍，请参考`Backbone官网`http://backbonejs.org/

2. `events` :  页面事件，更多详情介绍，请参考`Backbone官网`http://backbonejs.org/ ，如果没有事件添加属性`avoidLoadingHandlers: true`就可以了

3. `extend`:  处理页面需要的数据的处理，处理数据需要的帮助类请参考`Underscore官网`http://documentcloud.github.io/underscore/

4. `render`: 默认实现是没有操作的。 重载本函数可以实现从模型数据渲染视图模板，并可用新的 HTML 更新 this.el。 推荐的做法是在 render 函数的末尾 return this 以开启链式调用

更多`layout`布局和`views`视图的详情介绍，请参考`MarionetteJS官网`http://marionettejs.com/ 文档

##3.**前台templates文件的说明**

1.开发人员可以根据`feature.js`文件中的配置来决定在`{{#layout}}{{/layout}}`或`{{#view xxx}}{{/view}}`里面编辑html代码

2.页面需要渲染的数据在`feature.js`文件中`extend`处理

3.页面的模板标记是`handlebarsjs`框架的模板标记，更多模板标记详情请参考`handlebarsjs官网`http://handlebarsjs.com/

##4.**页面事件的处理**

所有事件的处理都在`handlers`文件夹中根据视图名称建立相应的文件来处理，





