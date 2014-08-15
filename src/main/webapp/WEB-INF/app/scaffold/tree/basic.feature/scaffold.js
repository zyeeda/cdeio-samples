var {mark} = require('coala/mark');

//显示类型为树
exports.style = 'tree';

//过滤器
exports.filters = {
    defaults: {
        '!basicTreeFilter': ['children', 'parent(1)']
    }
};

//实体每个属性与字段对应显示标签(列表与form页面使用)
exports.labels = {
    name: '名称',
    parent: '上级目录'
};

//form页面显示内容及方式配置
exports.fieldGroups = {
    defaults: ['parent', 'name']
};

//设置form页面
exports.forms = {
    defaults: {
        groups: [{name: 'defaults'}]
    }
};

//树配置
exports.tree = {
    isAsync: true,
    root: '中国',
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
    }
};

//验证方法
exports.validators = {
    remove: {
        defaults: mark('services', 'scaffold/tree/basic').on(function (basicSvc, context, basicTree, request) {
            var isEmpty = basicSvc.isEmpty(basicTree);
            if (!isEmpty) {
                context.addViolation({ message: '不能删除非空的树节点' });
            }
        })
    }
};