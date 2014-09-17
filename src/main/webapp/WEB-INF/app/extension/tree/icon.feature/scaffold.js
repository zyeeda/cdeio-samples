var {mark}          = require('cdeio/mark');
var _               = require('underscore');
var {createService} = require('extension/tree/icon.feature/service');

exports.enableFrontendExtension = true;

exports.service = function(service){
    return _.extend(service, createService());
};

exports.style = 'tree';

exports.filters = {
    defaults: {
        '!advancedTreeFilter': ['children', 'parent(1)']
    }
};

exports.labels = {
    name: '名称',
    parent: '上级目录',
    type: '类型'
};

exports.fieldGroups = {
    defaults: ['parent', 'type', 'name']
};

exports.tree = {
    isAsync: true,
    root: '中国',
    rootNodeSetting: {
        iconSkin: 'countryNode',
        nocheck: true
    },
    defaultOrder: 'name-asc'
};
