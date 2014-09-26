本例主要介绍如何基于 Cdeio 实现文件上传功能。

 Cdeio 的文件上传功能通过配置 `file-picker` 获取到文件的本地路径，然后调用 `ringo/util/http` 中 `parseFileUpload` 方法根据本地路径读取文件，并将文件上传到服务器文件存储目录。所以要实现此功能需要在后端 scaffold.js 中定义上传组件和文件上传路由地址，在自定义 service.js 中调用 `parseFileUpload` 将文件上传到服务器目录。

后端 scaffold.js 文件代码示例：
```javascript
exports.fieldGroups = {
    defaults: [
        'name', 'code',
        {name: 'summary', type: 'textarea'},
        {name: 'attachment', type: 'file-picker', url: 'invoke/scaffold/extension/service/uploadfile/upload', acceptFileTypes: "(\\.|\\/)(doc|xls|ppt|txt)$"}
    ]
};

exports.doWithRouter = function(router) {
    router.post('/upload', mark('services', 'extension/service/uploadfile').on(function (uploadfileSvc, request) {
        return uploadfileSvc.uploadfile(request);
    }));
};
```
示例首先在 `fieldGroups` 中定义了字段 `attachment` 的表单组件为文件选择器，文件上传路由地址为 `invoke/scaffold/extension/service/uploadfile/upload` ,并且只能选择格式为 .doc 、.xls 、.ppt 、.txt 的文件；然后在 `doWithRouter` 中定义了 `/upload` 方法，该方法的路由地址为 字段 `attachment`的上传路由地址，并且在此路由中调用自定义service中 `uploadfile`（这个方法将在 service.js 中定义） 进行文件上传。

自定义 service.js 文件代码示例：
```javascript
exports.createService = function() {
    return {
        uploadfile: mark('managers', Attachment).mark('tx').on(function (attachmentMgr, request) {
            var path, prefix, a, attachment, file, fileName, filePath, folder, fullPath, now, params, storeFile;
            path = 'images';
            prefix = cdeio.getOptionInProperties(CONFIG_KEY);
            params = {};
            fileName = UUID.randomUUID().toString();
            now = new Date();
            folder = join(path, now.getFullYear(), (now.getMonth() + 1) + '-' + now.getDate());
            filePath = join(folder, fileName);
            fullPath = join(prefix, filePath);
            parseFileUpload(request, params, null, function (data, enc) {
                if (!data.filename) {
                    return BufferFactory(data, enc);
                }
                fs.makeTree(join(prefix, folder));
                fs.touch(fullPath);
                data.path = filePath;
                return fs.open(fullPath, {
                    write: true,
                    binary: true
                });
            });
            return {};
        })
    };
};
```
示例中定义了 service uploadfile 方法，在此方法中首先根据时间等规则生成文件上传到服务器的路径和名称 `fullPath`，然后调用 RingojS 的 `parseFileUpload` 生成 `fullPath` 指向的空文件，并将上传文件以 `BufferFactory` 的形式写入这个空文件中。

<span class="badge badge-warning">注</span>&nbsp;： 关于 `RingoJs` 的用法请参照官方网站 _http://ringojs.org/api/master/_
