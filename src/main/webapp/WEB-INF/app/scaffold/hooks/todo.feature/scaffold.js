exports.filters = {
    defaults: {
        '!hooksTodoFilter': ''
    }
};

exports.entityLabel = '任务';

exports.labels = {
    name: '名称',
    desc: '描述'
};

exports.fieldGroups = {
    defaults: ['name', 'desc']
};

exports.hooks = {
    beforeCreate: {
        defaults: function(hooksTodo){
            hooksTodo.desc = '这是我创建之前改的描述';
        }
    },
    beforeUpdate: {
        defaults: function(hooksTodo){
            hooksTodo.desc = '这是我修改之前改的描述';
        }
    },
    afterUpdate: {
        defaults: function(hooksTodo){
             throw '这是更新之后执行的函数';
        }
    }
};
