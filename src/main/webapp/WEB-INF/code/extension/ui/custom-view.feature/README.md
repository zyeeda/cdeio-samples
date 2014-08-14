##自定义视图
**自定义视图路径的写法:例如#feature/extension/ui/form**
###1.  layout里面定义
####步骤一:
在前台新建`feature.js`文件
```javascript
define(['jquery', 'underscore'], function($, _) {
    return {
        layout: {
            regions: {main: 'main'}
        },
        views: [{
            name: 'main', region: 'main'
        }]
    };
})
```
####步骤二:
在前台新建`templates.html`文件,在`{{#layout}}{{/layout}}`里面编辑html代码
####步骤三:
在前台新建`views`文件夹,在`views`文件夹中新建布局文件，文件名跟`templates.html`文件中`{{#layout}}{{/layout}}`里面定义`id`名一致


###2. view里面定义
####步骤一:
```javascript
define(['jquery', 'underscore'], function($, _) {
    return {
        layout: {
            regions: {
                customView: 'custom-view',
            }
        },
        views: [{
            name: 'inline:custom-view',
            region: 'customView',
            model: 'extension/ui/router',
            events: {
                'click submitBtn': 'submitBtn'
            },
            extend: {
                serializeData: function(_super) {
                    var deferred = $.Deferred(),
                        m = this.model,
                        data = _super.apply(this),
                        routerResults = [];

                    m.fetch().done(function() {
                        results = m.toJSON().results;

                        $.each(results, function (i, v){
                            v.index = i + 1;
                            routerResults.push(v);
                        });
                        data.routers = routerResults;
                        deferred.resolve(data);
                    });
                    return deferred.promise();
                }
            }
        }]
    };
});
```
####详细说明:

1. `model`:  模型，更多详情介绍，请参考`Backbone官网`http://backbonejs.org/

2. `events` :  页面事件,如果没有事件添加属性`avoidLoadingHandlers: true`就可以了

3. `extend`:  处理页面需要的数据的处理

####步骤二:
在前台新建`templates.html`文件,在`{{#view "custom-view"}}{{/view}}`里面编辑html代码,其中`custom-view`要和`feature.js`文件中定义的`view`一致
####步骤三:
如果有点击事件,新建hanglers文件夹,新建文件跟`views`上的`name`一致,文件中方法名跟如下第三个参数一致
```javascript
//feature.js文件中
events: {
    'click submitBtn': 'submitBtn'
}
```
####详细说明:

1. 第一个参数:  事件类型，例如单击、双击等等

2. 第一个参数 :  事件id,`templates.html`文件中的事件id一致

3. 第三个参数:  事件名称
