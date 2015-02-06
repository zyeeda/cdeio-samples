exports.filters = {
    defaults: {
        '!accountFilter': ['password', 'password2'],
        '!departmentFilter': ['accounts', 'children', 'parent(1)'],
        '!roleFilter': ['accounts', 'permissions']
    }
};

exports.labels = {
    id: 'ID',
    realName: '姓名',
    accountName: '账户名',
    password: '密码',
    password2: '重复密码',
    email: '邮箱',
    mobile: '手机',
    telephone: '电话',
    disabled: '状态',
    oldPassword: '原密码',
    newPassword1: '新密码',
    newPassword2: '重复密码',
    department: '部门',
    'department.id': '部门',
    dataLevel: '数据权限'
};

exports.fieldGroups = {
    defaults: ['realName', 'email', 'mobile', 'telephone'],
    editPwdInfo: [
        {name: 'oldPassword', type: 'password', required: true, validations: {rules: {required: true, rangelength:[6, 60]}, messages: {required: '不能为空', rangelength:'个数必须在6和60之间'}}},
        {name: 'newPassword1', type: 'password', required: true, validations: {rules: {required: true, rangelength:[6, 60]}, messages: {required: '不能为空', rangelength:'个数必须在6和60之间'}}},
        {name: 'newPassword2', type: 'password', required: true, validations: {rules: {required: true, equalTo: 'newPassword'}, messages: {required: '不能为空', equalTo: '不匹配'}}}
    ]
};

exports.forms = {
    changePassword: {
        size: 'mini',
        groups: ['editPwdInfo']
    }
};

exports.feature = {
    views: ['form:changePassword']
};


exports.picker = {
    grid: {
        columns: [
            { name: 'realName', header: '姓名'},
            { name: 'accountName', header: '账户名'},
            { name: 'email', header: '邮箱' },
            { name: 'mobile', header: '手机' },
            { name: 'department.name', header: '部门'}
        ]
    }
};

exports['inline-grid'] = {
    columns: [
        {name: 'realName' },
        'accountName', 'email', 'mobile',
        { name: 'department.name', header: '部门'}
    ]
};

var {mark}  = require('cdeio/mark');
var {json} = require('cdeio/response');
var _ = require('underscore');

exports.doWithRouter = function(router){
    router.put('/password', mark('services', 'system/accounts').on(function (accountSvc, request){
        var data = request.params;
        var result = accountSvc.editPwdInfo(data);
        var filter = exports.filters.defaults;
        if (result.violations) {
            return json(result, _.extend({ status: 422 }, filter));
        }
        return json(result, filter);
    }));
}