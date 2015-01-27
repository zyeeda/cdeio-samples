exports.filters = {
    defaults: {
        '!fieldTaskFilter': '',
        '!fieldUserFilter': 'todos'
    }
};

exports.labels = {
    name: '任务名称',
    description: '任务描述',
    fieldUser: '执行者'
};

exports.fieldGroups = {
    defaults: [
        'name', 
        {name: 'description', type: 'textarea'}, 
        'fieldUser'
    ]
};

exports.grid = {
    columns: [
        'name', 'description',
        {name: 'fieldUser.name', header: '执行者'}
    ]
};