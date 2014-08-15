var {mark} = require('coala/mark');
var {json} = require('coala/response');

exports.enableFrontendExtension = true;

exports.filters = {
    defaults: {
        '!advancedButtonFilter': ''   
    }
};

//form页面标题(新增/编辑***)
exports.entityLabel = '待办事项';

exports.labels = {
    name: '事项',
    status: '状态'
};

exports.fieldGroups = {
    defaults: ['name', {name: 'status', type: 'dropdown', defaultValue: '1', source: [{id: '1', text: '待办'}, {id: '2', text: '已办'}]}]
};

exports.grid = {
    columns: ['name', {name: 'status', renderer: 'modifyStatus'}]
};

//设置form页面
exports.forms = {
    defaults: {
        groups: [{name: 'defaults'}],
        size: 'normal'
    }
};

//设置操作按钮的显示
exports.operators = {
    //默认按钮
    add: {label: '添加', icon: 'icon-plus', group: '10-add', style: 'btn-success', show: 'always', order: 100},
    show: {label: '查看', icon: 'icon-eye-open', group: '20-selected', style: 'btn-grey', show: 'single-selected', order: 100},
    edit: {label: '编辑', icon: 'icon-edit', group: '20-selected', style: 'btn-primary', show: 'single-selected', order: 200},
    del: {label: '删除', icon: 'icon-minus', group: '20-selected', style: 'btn-danger', order: 300},
    refresh: {label: '刷新', icon: 'icon-refresh', group: '30-refresh', style: 'btn-purple', show: 'always', order: 100},
    //又一个分组的按钮
    buttonOne: {label: '按钮一', icon: 'icon-comment-alt', group: '40-other', style: 'btn-yellow', show: 'always', order: 300},
    buttonTwo: {label: '按钮二', icon: 'icon-comment', group: '40-other', style: 'btn-grey', show: 'single-selected', order: 200},
    buttonThree: {label: '按钮三', icon: 'icon-comments', group: '40-other', style: 'btn-light', order: 100},
    buttonFour: false,
    //自定义按钮
    modifyStatus: {label: '已办', icon: 'icon-check', group: '50-other', style: 'btn-pink', show: 'always'},
};
    
exports.doWithRouter = function(router) {
    //更新状态信息
    router.put('/update-status', mark('services', 'scaffold/button/advanced').on(function (advancedButtonSvc, request) {
        var data = request.params;

        advancedButtonSvc.updateStatus(data.id);

        return json({flag: true});
    }));
};