var {mark}          = require('coala/mark');
var _               = require('underscore');
var {createService} = require('scaffold/tree/advanced.feature/service');

var {SecurityUtils} = org.apache.shiro;

exports.enableFrontendExtension = true;

exports.service = function(service){
    return _.extend(service, createService());
};

//显示类型为树
exports.style = 'tree';

//过滤器
exports.filters = {
    defaults: {
        '!advancedTreeFilter': ['children', 'parent(1)']
    }
};

//form页面标题(新增/编辑***)
exports.entityLabel = '节点';

//实体每个属性与字段对应显示标签(列表与form页面使用)
exports.labels = {
    name: '名称',
    parent: '上级目录',
    type: '类型'
};

//form页面显示内容及方式配置
exports.fieldGroups = {
    defaults: ['parent', 'type', 'name']
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
    toggleMove: {label: '移动', icon: 'icon-move', group: 'other', show: 'always'}
};


// 其它业务选择数据时所用picker
exports.picker = {
    beforePickerConfirm: 'cityBeforePickerConfirm'
};

//树配置
exports.tree = {
    isAsync: true,
    root: '中国',
    rootNodeSetting: {iconSkin: 'countryNode', nocheck: true},
    edit: {
        drag: {
            autoExpandTrigger: true
        },
        showRemoveBtn: false,
        showRenameBtn: false
    },
    view: {
        selectedMulti: false,
        showLine: true
    },
    callback: {
        'onDrop': 'cityMoved'
    },
    events: {
        'scaffold/tree/advanced#tree:onClick': 'cityClicked'
    },
    defaultOrder: 'name-asc'
};

//验证方法
exports.validators = {
    remove: {
        defaults: mark('services', 'scaffold/tree/advanced').on(function (advancedSvc, context, advancedTree, request) {
            var isEmpty = advancedSvc.isEmpty(advancedTree);
            if (!isEmpty) {
                context.addViolation({ message: '不能删除非空的树节点' });
            }
        })
    }
};

//相关数据处理
exports.hooks = {
    //创建数据之前执行函数
    beforeCreate: {
        defaults: function (advancedTree) {
            var user;

            user = SecurityUtils.getSubject().getPrincipal();
            //自动添加创建人账户名和姓名，创建时间
            advancedTree.creator = user.accountName;
            advancedTree.creatorName = user.realName;
            advancedTree.createdTime = new Date();
        }
    },
    //编辑数据之前执行函数
    beforeUpdate: {
        defaults: function(advancedTree) {
            var user;

            user = SecurityUtils.getSubject().getPrincipal();
            //自动添加修改人账户名和姓名，修改时间
            advancedTree.lastModifier = user.accountName;
            advancedTree.lastModifierName = user.realName;
            advancedTree.lastModifiedTime = new Date();
        }
    }
};