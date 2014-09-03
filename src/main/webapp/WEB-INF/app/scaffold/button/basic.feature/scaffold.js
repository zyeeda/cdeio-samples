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
    // 隐藏查看按钮
    show: false,
    //又一个分组的按钮
    buttonOne: {label: '按钮一', icon: 'icon-comment-alt', group: '40-other', style: 'btn-yellow', show: 'always', order: 300},
    buttonTwo: {label: '按钮二', icon: 'icon-music', group: '40-other', style: 'btn-pink', show: 'single-selected', order: 200},
    buttonThree: {label: '按钮三', icon: 'icon-bell', group: '40-other', style: 'btn-light', order: 100}
};
