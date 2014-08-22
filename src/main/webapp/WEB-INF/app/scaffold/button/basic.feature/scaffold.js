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
    add: {label: '添加', show: 'always'},
    show: {label: '查看', show: 'single-selected'},
    edit: {label: '编辑', show: 'single-selected'},
    refresh: {label: '刷新', show: 'always'},
    del: false,
    //又一个分组的按钮
    buttonOne: {label: '按钮一', icon: 'icon-comment-alt', group: '40-other', style: 'btn-yellow', show: 'always', order: 300},
    buttonTwo: {label: '按钮二', icon: 'icon-comment', group: '40-other', style: 'btn-grey', show: 'single-selected', order: 200},
    buttonThree: {label: '按钮三', icon: 'icon-comments', group: '40-other', style: 'btn-light', order: 100}
};
