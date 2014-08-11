/*var _               = require('underscore');
var {createService} = require('scaffold/tree/type.feature/service');

exports.service = function(service){
    return _.extend(service, createService());
};*/

exports.filters = {
    defaults: {
        '!fieldTagFilter': 'children'
    }
};

exports.entityLabel = '类别';
exports.style = 'tree';

exports.labels = {
    name: '名称',
    parent: '父类别'
};

exports.fieldGroups = {
    defaults: ['name', 'parent']
};

exports.tree = {
    isAsync: true,
    root: '所有类别',
    rootNodeSetting: { nocheck: true},
    edit: {
        drag: {
            autoExpandTrigger: true
        },
        showRemoveBtn: false,
        showRenameBtn: false
    },
    view: {
        selectedMulti: false,
        showLine: false
    },
    callback: {
        'onDrop': 'departmentMoved'
    }
};

exports.operators = {
    add: { label: '', show: 'always' },
    edit: { label: '' },
    del: { label: '' },
    refresh: { label: '', show: 'always' },
    show: false,
    toggleMove: { icon: 'icon-move', group: 'other', show: 'always' }
};


//设置form页面一行显示2列
exports.forms = {
    defaults: {
        groups: [
            {name: 'defaults', columns: 2}
        ],
        size: 'large'
    }
};
