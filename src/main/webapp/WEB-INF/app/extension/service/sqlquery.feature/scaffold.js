var {mark} = require('coala/mark');
var {json} = require('coala/response');

exports.filters = {
    defaults: {
        '!taskFilter': ''
    }
};

exports.labels = {
    name: '名称',
    description: '描述'
};

exports.fieldGroups = {
    defaults: [
        'name',
        {name: 'description', type: 'textarea'}
    ]
};

exports.grid = {
    columns: ['name', 'description']
};

exports.doWithRouter = function(router) {
    // get id 用于通过指定 id 查询所对应的记录
    router.get('/:id', mark('services', 'extension/service/sqlquery').on(function (sqlQuerySvc, request, id) {
        var task;

        task = sqlQuerySvc.getById(id);

        return json(task, exports.filters.defaults);
    }));
};
