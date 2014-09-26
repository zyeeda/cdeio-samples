本例主要介绍如何实现文件下载功能。

 Cdeio 的下载功能是通过调用 `ringojs/jsgi/response` 将文件写出到前端自定义的 iframe 中实现的。

后端 scaffold.js 文件示例代码：
```javascript
var response   = require('ringo/jsgi/response');
var {notFound} = require('cdeio/response');
var {join}     = require('cdeio/util/paths');
var {mark}     = require('cdeio/mark');
var cdeio      = require('cdeio/config');
var CONFIG_UPLOAD_PATH = 'cdeio.upload.path';
var String = java.lang.String;
exports.enableFrontendExtension = true;

exports.operators = {
    downloadAttachment: {label: '下载附件', style: 'btn-pink', icon: 'icon-cloud-download', group: '20-selected', order: 310}
};

exports.doWithRouter = function(router) {
    router.get('/download/:id', mark('services', 'extension/service/downloadfile').on(function (downloadfileSvc, request, id) {
        var attachment, filepath,res, filename;
        attachment = downloadfileSvc.getAttachmentById(id);
        if (!attachment) {
            return notFound('附件不存在');
        }
        filepath = join(cdeio.getOptionInProperties(CONFIG_UPLOAD_PATH), attachment.path);
        res = response.static(filepath, attachment.contentType);
        filename = new String(new String(attachment.filename).bytes, 'ISO8859-1');
        res.headers['Content-Disposition'] = 'attachment;filename=' + filename;
        return res;
    }));
};
```
示例代码给首先给 list 页面定义了一个 “ 下载附件 ” 的按钮 `downloadAttachment`。然后自定了一个下载文件路由地址 `/download/:id`（实际访问路径为 `invoke/scaffold/extension/service/downloadfile/download/aid`,aid 为数据的 id ），并且在该路由中将下载文件地址等信息交给 response 持有，最后返回该 response。

前端 scaffold.js 文件示例代码：
```javascript
define([
    'jquery'
], function($) {
    return {
        handlers: {
            downloadAttachment: function() {
                var me,grid,selected;
                me = this;
                grid = me.feature.views['grid:body'].components[0];
                selected = grid.getSelected().toJSON();

                $ifrm = $('<iframe></iframe>');
                $ifrm.css({
                    width: '0px',
                    height: '0px',
                    display: 'none'
                });

                $ifrm.attr('onload', function(){
                    setTimeout(function(){
                        $ifrm.remove();
                    }, 1000);
                });
                $ifrm.attr('src', 'invoke/scaffold/extension/service/downloadfile/download/' + selected.attachment.id);
                $(document.body).append($ifrm);
            }
        }
    };
});

```
示例代码给按钮 `downloadAttachment` 定义了一个点击响应时间，该事件中首先创建了一个 iframe ，该 iframe 的 src 为后端定义的文件下载的路由地址，并将该 iframe 添加到 document.body 中。

这样，通过前端和后端的处理，点击按钮的时候就会出现文件下载提示，一个完整的下载文件功能就实现了。

<span class="badge badge-warning">注意</span>&nbsp;： 各文件类型对应的 content_type 请参照http://baike.baidu.com/view/1547292.htm?fr=aladdin_；本例中的下载功能用到了 `ringojs/jsgi/response` ,关于 `RingoJs` 的用法请参照官方网站 _http://ringojs.org/api/master/_
