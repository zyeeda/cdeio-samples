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
    add: false,
    edit: false,
    del: false,
    changePassword: { label: '修改密码', style: 'btn-pink', icon: 'icon-key', group: '20-selected' }
};
