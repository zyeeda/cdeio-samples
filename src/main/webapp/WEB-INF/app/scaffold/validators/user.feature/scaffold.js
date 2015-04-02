exports.filters = {
    defaults: {
        '!validatorsUserFilter': ''
    }
};

exports.entityLabel = '用户';

exports.labels = {
    name: '名称',
    status: '状态'
};

exports.fieldGroups = {
    defaults: ['name', 
        {name: 'status',
        type: 'dropdown',
        defaultValue: '启用', 
        source: [
            {id: '启用',text: '启用'},
            {id: '禁用',text: '禁用'}
        ]}
    ]
};

exports.validators = {
    create: {
        defaults: function(context, validatorsUser, request){
            if(validatorsUser.name === '')
            context.addViolation({ message: '名字不能为空' });
        }
    },
    update: {
        defaults: function(context, validatorsUser, request){
            context.addViolation({ message: '这是编辑验证' });
        }
    },
    remove: {
        defaults: function(context, validatorsUser, request){
            if(validatorsUser.status === '启用')
            context.addViolation({ message: '不能删除状态为启用的用户'});
        }
    }
};
