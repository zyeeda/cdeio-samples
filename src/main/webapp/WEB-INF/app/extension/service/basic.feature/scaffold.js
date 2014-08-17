var {mark} = require('coala/mark');
var {json} = require('coala/response');

exports.enableFrontendExtension = true;

exports.filters = {
    defaults: {
        '!personFilter': ''
    }
};

exports.labels = {
    name: '姓名',
    password: '密码',
    description: '描述',
    oldPassword: '原密码',
    newPassword: '新密码',
    newPassword2: '重复密码'
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
    ],
    editPwdInfo: [
        {name: 'oldPassword', type: 'password', required: true, validations: {rules: {required: true, rangelength:[6, 60]}, messages: {required: '不能为空', rangelength:'个数必须在6和60之间'}}},
        {name: 'newPassword', type: 'password', required: true, validations: {rules: {required: true, rangelength:[6, 60]}, messages: {required: '不能为空', rangelength:'个数必须在6和60之间'}}},
        {name: 'newPassword2', type: 'password', required: true, validations: {rules: {required: true, equalTo: 'newPassword'}, messages: {required: '不能为空', equalTo: '不匹配'}}}
    ]
};

exports.feature = {
    views: ['form:changePassword']
};

exports.forms = {
    changePassword: {
        size: 'mini',
        groups: ['editPwdInfo']
    }
};

exports.grid = {
    columns: ['name', 'description']
};

exports.operators = {
    changePassword: { label: '修改密码', style: 'btn-pink', icon: 'icon-key', group: '20-selected' }
};

exports.doWithRouter = function(router) {
    // post 多用于新增记录
    router.post('/', mark('services', 'extension/service/basic').on(function (basicSvc, request) {
        var person, data;

        data = request.params;
        person = basicSvc.saveEntity(data);

        return json(person, exports.filters.defaults);
    }));

    // put id 用于修改指定 id 所对应的记录
    router.put('/:id', mark('services', 'extension/service/basic').on(function (basicSvc, request, id) {
        var person, data;

        data = request.params;
        person = basicSvc.modifyEntity(data);

        return json(id);
    }));

    // get id 用于通过指定 id 查询所对应的记录
    router.get('/:id', mark('services', 'extension/service/basic').on(function (basicSvc, request, id) {
        var person, data;

        data = request.params;
        person = basicSvc.getById(id);

        return json(person, exports.filters.defaults);
    }));

    // del id 用于删除指定 id 所对应的记录
    router.del('/:id', mark('services', 'extension/service/basic').on(function (basicSvc, request, id) {
        basicSvc.removeEntity(id);

        return json(id);
    }));
};
