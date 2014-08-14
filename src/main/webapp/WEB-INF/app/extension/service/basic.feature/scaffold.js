var {mark} = require('coala/mark');
var {json} = require('coala/response');

exports.enableFrontendExtension = false;

exports.filters = {
    defaults: {
        '!personFilter': ''
    }
};

exports.labels = {
    name: '姓名',
    password: '密码',
    description: '描述'
};

exports.fieldGroups = {
	defaults: [
        'name',
        {name: 'description', type: 'textarea'}
    ],
    add: [
        'name',
        {name: 'password', type: 'password'},
        {name: 'description', type: 'textarea'}
    ]
};

exports.grid = {
    columns: ['name', 'description']
};

exports.doWithRouter = function(router) {
    // post 多用于新增记录
    router.post('/', mark('services', 'extension/service/basic').on(function (basicSvc, request) {
        var person, data;

        data = request.params;
        person = basicSvc.saveEntity(data);

        return json(person, exports.filters.defaults);
    }));

    // get id 用于通过指定 id 查询所对应的记录
    router.get('/:id', mark('services', 'extension/service/basic').on(function (basicSvc, request, id) {
        var person, data;

        data = request.params;
        person = basicSvc.getById(id);

        return json(person, exports.filters.defaults);
    }));

    // put id 用于修改指定 id 所对应的记录
    router.put('/:id', mark('services', 'extension/service/basic').on(function (basicSvc, request, id) {
        var person, data;

        data = request.params;
        person = basicSvc.modifyEntity(data);

        return json(id);
    }));

    // del id 用于删除指定 id 所对应的记录
    router.del('/:id', mark('services', 'extension/service/basic').on(function (basicSvc, request, id) {
        basicSvc.removeEntity(id);

        return json(id);
    }));
};
