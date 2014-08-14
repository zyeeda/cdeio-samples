var {mark}                           = require('coala/mark');
var fs                               = require('fs');
var {createService}                  = require('coala/service');
var {join}                           = require('coala/util/paths');
var coala                            = require('coala/config');
var {parseFileUpload, BufferFactory} = require('ringo/utils/http');
var {json}                           = require('coala/response');

var {Attachment} = com.zyeeda.coala.commons.resource.entity;

var UUID = java.util.UUID;

var CONFIG_KEY = 'coala.upload.path';

exports.createService = function() {
    return {
        getAttachmentById: mark('managers', Attachment).mark('tx').on(function (attachmentMgr, id) {
            return attachmentMgr.find(id);
        }),
        uploadfile: mark('managers', Attachment).mark('tx').on(function (attachmentMgr, request) {
            var path, prefix, a, attachment, file, fileName, filePath, folder, fullPath, now, params, result, storeFile;

            path = 'images';

            // 此配置位于 src/main/resources/settings/coala.properties
            prefix = coala.getOptionInProperties(CONFIG_KEY);
            params = {};
            fileName = UUID.randomUUID().toString();
            now = new Date();
            folder = join(path, now.getFullYear(), (now.getMonth() + 1) + '-' + now.getDate());
            filePath = join(folder, fileName);
            fullPath = join(prefix, filePath);

            parseFileUpload(request, params, null, function(data, enc) {
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
                return json({
                    id: attachment.id,
                    name: attachment.filename
                });
            }

            return {};
        })
    };
};
