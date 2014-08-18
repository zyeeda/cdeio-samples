exports.filters = {
    defaults: {
        '!operateButtonFilter': ''
    }
};

exports.labels = {
    name: '名称',
    description: '描述'
};

exports.fieldGroups = {
    defaults: ['name', 'description']
};

//设置操作按钮的显示
exports.operators = {
    //默认按钮
    add: {label: '添加', group: '10-add', style: 'btn-success', show: 'always'},
    show: {label: '查看', group: '20-selected', style: 'btn-grey', show: 'single-selected'},
    edit: {label: '编辑', group: '20-selected', style: 'btn-primary', show: 'single-selected'},
    refresh: {label: '刷新', group: '30-refresh', style: 'btn-purple', show: 'always'},
    del: false,
    //又一个分组的按钮
    buttonOne: {label: '按钮一', icon: 'icon-comment-alt', group: '40-other', style: 'btn-yellow', show: 'always', order: 300},
    buttonTwo: {label: '按钮二', icon: 'icon-comment', group: '40-other', style: 'btn-grey', show: 'single-selected', order: 200},
    buttonThree: {label: '按钮三', icon: 'icon-comments', group: '40-other', style: 'btn-light', order: 100}
};
