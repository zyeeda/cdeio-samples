var response   = require('ringo/jsgi/response');
var {notFound} = require('coala/response');
var {join}     = require('coala/util/paths');
var {mark}     = require('coala/mark');
var coala      = require('coala/config');

var CONFIG_UPLOAD_PATH = 'coala.upload.path';

var String = java.lang.String;

exports.enableFrontendExtension = false;

// 过滤器
exports.filters = {
    defaults: {
        '!dataFileFilter': '',
        '!attachmentFilter': ''
    }
};

// form页面标题(新增/编辑***)
exports.entityLabel = '资料文件';

// 实体每个属性与字段对应显示标签(列表与form页面使用)
exports.labels = {
	name: '文件名称',
	code: '文件编号',
	summary: '文件摘要',
    attachment: '附件'
};

// 设置form页面布局方式
exports.forms = {
	defaults: {
		groups: [{name: 'defaults', columns: 2}]
	}
};

// form页面显示内容及方式配置
exports.fieldGroups = {
    defaults: [
    	'name', 'code',
        {name: 'summary', type: 'textarea'},
        {name: 'attachment', type: 'file-picker', url: 'invoke/scaffold/extension/service/uploadfile/upload', acceptFileTypes: "(\\.|\\/)(swf|mp4|avi|wmv|doc|docx|xls|xlsx|ppt|pptx|zip|rar|7z|pdf|txt|jpg|jpeg|png|gif)$"}
    ]
};

// 列表相关功能配置
exports.grid = {
	columns: [
	    'name', 'code'
    ],
    filterToolbar: true,
    fixedHeader: true,
    numberColumn: true
};

exports.doWithRouter = function(router) {
    router.post('/upload', mark('services', 'extension/service/uploadfile').on(function (uploadfileSvc, request) {
        return uploadfileSvc.uploadfile(request);
    }));

    router.get('/upload/:id', mark('services', 'extension/service/uploadfile').on(function (uploadfileSvc, request, id) {
        var attachment, filepath,
            res, filename;

        attachment = uploadfileSvc.getAttachmentById(id);
        if (!attachment) {
            return notFound('附件不存在');
        }

        /**
            join 方法：将传入的参数拼接成路径，并自动处理多余或缺少的分隔符
            附件绝对路径 = 存储路径前缀 + 相对存储路径
            coala.getOptionInProperties 能拿到的配置位于 src/main/resources/settings/coala.properties
         */
        filepath = join(coala.getOptionInProperties(CONFIG_UPLOAD_PATH), attachment.path);

        // 此处使用的是 ringo/jsgi/response 的 api
        res = response["static"](filepath, attachment.contentType);

        filename = new String(new String(attachment.filename).bytes, 'ISO8859-1');
        res.headers['Content-Disposition'] = 'attachment;filename=' + filename;

        // 使用以下方式时如果下载的是浏览器能打开的文件时会自动在浏览器中打开
        // res.headers['Content-Disposition'] = 'inline;filename=' + filename;
        return res;
    }));
};
