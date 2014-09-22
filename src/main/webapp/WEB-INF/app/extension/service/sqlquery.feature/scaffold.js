var {mark} = require('cdeio/mark');
var {json} = require('cdeio/response');

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

exports.doWithRouter = function(router) {
    // get id 用于通过指定 id 查询所对应的记录
    router.get('/:id', mark('services', 'extension/service/sqlquery').on(function (service, request, id) {
        var task;

        task = service.getById(id);

        return json(task, exports.filters.defaults);
    }));
};
