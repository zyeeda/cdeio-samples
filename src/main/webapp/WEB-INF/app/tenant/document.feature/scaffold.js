var mark = require('cdeio/mark').mark;
var json = require('cdeio/response').json;
var objects = require('cdeio/util/objects');
var cdeio = require('cdeio/config').cdeio;

var {Document, Folder, Project} = com.zyeeda.cdeio.example.tenant.entity;

exports.filters = {
    defaults: {
        '!documentFilter': [],
        '!projectFilter' : ['documents'],
        '!folderFilter': ['documents', 'children'],
        '!attachmentFilter': []
    }
    ,
    list: {
        'documentFilter': ['id', 'name', 'project', 'folder', 'description'],
        'projectFilter': ['name'],
        'folderFilter': ['name']
    }
};

exports.labels = {
    name: '名称',
    description: '描述',
    type: '类型',
    size: '大小',
    attachment: '文件',
    'folder': '文件夹',
    'project': '项目'
};

exports.fieldGroups = {
	defaults: ['name', {name: 'description', type: 'textarea'}, 'folder', 'project',
		{name: 'attachment', type: 'file-picker', preview: 'left', url: 'invoke/system/upload'}
	]
};

exports.grid = {
    columns : [
        {name: 'name'},
        {name: 'description'},
        {name: 'folder.name', header: '文件夹'},
        {name: 'project.name', header: '项目'}
    ]
}

exports.doWithRouter = function(router) {

    router.get('/', mark('managers', Document).on(function (mgr, request) {
        var queryParams = {aid: '1', dtype: new Document().class.name, ftype: new Project().class.name};

        var result = {};
        var config = {};
        objects.extend(config, request.params);
        var paginationInfo = cdeio.extractPaginationInfo(request.params);
        objects.extend(config, paginationInfo);
        var count = mgr.findDocsByFunnel(queryParams).size()
        var pageSize = paginationInfo.maxResults;
        result.recordCount = count;
        result.pageCount = Math.ceil(count / pageSize);
        result.results = mgr.findDocsByFunnel(queryParams, paginationInfo);
        var o = cdeio.generateListResult(result.results, config.currentPage, config.maxResults, result.recordCount, result.pageCount);

        return json(o, exports.filters.defaults);
    }));
};
