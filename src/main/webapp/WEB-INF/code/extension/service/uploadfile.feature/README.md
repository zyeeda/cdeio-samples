#扩展后台(文件上传)

本章主要介绍如何基于平台实现文件上传功能。

** 以下介绍的方法仅供参考。 **

由于系统中使用的是 `ringo/jsgi` 的 httpServlet 对象，所以处理上传文件请求的功能需要借助 `ringo/util/http` 工具。

上传文件的请求 `request` 对象中包含了文件流，首先用 `parseFileUpload (request, params, encoding, streamFactory)` 来上传文件，传入 request 对象；

然后在此方法内部调用 ringojs 的文件处理工具 `fs` 创建好需要保存的文件目录并生成空文件；

最后打开该文件并使用二进制的方式写入文件内容，当然在此文件内部还可以根据业务需要做一些类似保存附件实体等操作。

** 注: 关于 `ringojs` 的用法请参照官方网站 http://ringojs.org/api/master/ **

示例代码如下：

```javascript
var {mark}                           = require('coala/mark');
var fs                               = require('fs');
var {join}                           = require('coala/util/paths');
var coala                            = require('coala/config');
var {parseFileUpload, BufferFactory} = require('ringo/utils/http');

var UUID = java.util.UUID;

var CONFIG_KEY = 'coala.upload.path';

exports.createService = function() {
    return {
        uploadfile: mark('managers', Attachment).mark('tx').on(function (attachmentMgr, request) {
            var path, prefix, a, attachment, file, fileName, filePath, folder, fullPath, now, params, storeFile;

            path = 'images';

            // 此配置位于 src/main/resources/settings/coala.properties
            prefix = coala.getOptionInProperties(CONFIG_KEY);
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

                // 新建存放附件缺少的目录
                fs.makeTree(join(prefix, folder));

                // 生成空文件
                fs.touch(fullPath);

                data.path = filePath;

                return fs.open(fullPath, {
                    write: true,
                    binary: true
                });
            });

            if (!params.files) {
                throw new Error('Request is not a file upload request');
            }

            // 保存附件实体
            storeFile = function(file) {
                var a;
                a = new Attachment();
                a.contentType = file.contentType;
                a.path = file.path;
                a.filename = file.filename;
                return attachmentMgr.save(a);
            };

            if (params.files.length === 1) {
                file = params.files[0];
                attachment = storeFile(file);
                return {
                    id: attachment.id,
                    name: attachment.filename
                };
            }

            return {};
        })
    };
};
```
