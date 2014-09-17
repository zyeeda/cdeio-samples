var {mark}          = require('cdeio/mark');

exports.enableFrontendExtension = true;

exports.style = 'tree';

exports.filters = {
    defaults: {
        '!advancedTreeFilter': ['children', 'parent(1)']
    }
};

exports.labels = {
    name: '名称',
    parent: '上级目录'
};

exports.fieldGroups = {
    defaults: ['parent', 'name']
};

exports.operators = {
    toggleMove: {
        label: '移动',
        icon: 'icon-move',
        group: 'other',
        show: 'always'
    }
};

exports.picker = {
    beforePickerConfirm: 'cityBeforePickerConfirm'
};

exports.tree = {
    isAsync: true,
    root: '中国',
    edit: {
        drag: {
            autoExpandTrigger: true
        }
    },
    callback: {
        'onDrop': 'cityMoved'
    },
    events: {
        'extension/tree/event#tree:onClick': 'cityClicked'
    },
    defaultOrder: 'name-asc'
};
