exports.enableFrontendExtension = true;

exports.filters = {
    defaults: {
        '!basicButtonFilter': ''   
    }
};

//form页面标题(新增/编辑***)
exports.entityLabel = '待办事项';

exports.labels = {
    name: '事项',
    completed: '状态'
};

exports.fieldGroups = {
    defaults: ['name', {name: 'completed', type: 'dropdown', defaultValue: 'false', source: [{id: false, text: '待办'}, {id: true, text: '已办'}]}]
};

exports.grid = {
    columns: ['name', {name: 'completed', renderer: 'modifyCompleted'}]
};

//设置form页面
exports.forms = {
    defaults: {
        groups: [{name: 'defaults'}],
        size: 'normal'
    }
};