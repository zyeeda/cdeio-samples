##路由
**路由的配置文件在前台`app/routers.js`中**
###1.`routers.js`文件的详细说明：

创建一个自定义的路由类。 可以通过 `routes` 定义路由动作键值对，当匹配了 URL 片段便执行定义的动作。
```javascript
define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    return {
        routes: {
            "help":                 "help",    // #help
            "search/:query":        "search",  // #search/kiwis
            "search/:query/p:page": "search"   // #search/kiwis/p7
        },
        help: function() {
            ...
        },

        search: function(query, page) {
            ...
        }
    };
});
```
`routes`详细说明:

routes 将带参数的 URLs 映射到路由实例的方法上，这与 视图 的 事件键值对 非常类似。 路由可以包含参数，:param，它在斜线之间匹配 URL 组件。 路由也支持通配符，*splat，可以匹配多个 URL 组件。

举个例子，路由 "search/:query/p:page" 能匹配 #search/obama/p2 , 这里传入了 "obama" 和 "2" 到路由对应的动作中去了。 "file/*path 路由可以匹配 #file/nested/folder/file.txt，这时传入动作的参数为 "nested/folder/file.txt"。

当访问者点击浏览器后退按钮，或者输入 URL ，如果匹配一个路由，此时会触发一个基于动作名称的 事件， 其它对象可以监听这个路由并接收到通知。 下面的示例中，用户访问 #help/uploading 将从路由中触发 route:help 事件。
```javascript
routes: {
  "help/:page":         "help",
  "download/*path":     "download",
  "folder/:name":       "openFolder",
  "folder/:name-:mode": "openFolder"
}

help: function(page) {
    ...
}
```
更多详情介绍，请参考`Backbone官网`http://backbonejs.org/

