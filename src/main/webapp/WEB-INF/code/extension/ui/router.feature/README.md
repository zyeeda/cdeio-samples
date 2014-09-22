 本例主要介绍如何在公共的路由文件中定义路由地址。

 web应用程序通常需要为应用的重要位置提供可链接、可收藏、可分享的 URLs。为此，平台提供公共的路由配置文件 `src/main/webapp/scripts/app/routers.js`。示例代码如下：
```javascript
define([
    'underscore',
    'backbone',
    'config'
], function (_, Backbone, config) {
    return {
        routes: {
            'home': 'showHome'
        },
        showHome: function() {
            me = this;
            return app.startFeature('main/viewport', { container: $(document.body), ignoreExists: true }).done(function () {
                me._activateMenu('#');
                app.startFeature('main/home', {container: $(document).body, ignoreExists: true});
            });
        }
    };
});
```
示例中首先配置了一个名称为 `home` 的路由地址（以本项目为例其访问路径为 `https://localhost:7000/coala-examples/#home`），访问 `home` 这个路由地址会调用 `showHome` 方法来处理。紧接着 `showHome` 方法就被定义了，这个方法中调用 `startFeature` 来展示系统的首页。所以，访问  `home` 时会自动跳转到首页。

<span class="badge badge-warning">注</span>&nbsp; ：关于 `Backbone` 更多详情介绍，请参考_http://backbonejs.org/_


