var mark = require('coala/mark').mark;
var json = require('coala/response').json;

exports.filters = {
    defaults: {
        '!basicFilter': ''
    }
};

exports.labels = {
    name: '名称',
    description: '描述'
};

exports.fieldGroups = {
	defaults: ['name', 'description']
};

exports.doWithRouter = function(router) {
    router.get('/test', mark('services', 'extension/service/basic').on(function (basicSvc,  request) {
        basicSvc.testSave();
        return json({flag: true});
    }));
};
