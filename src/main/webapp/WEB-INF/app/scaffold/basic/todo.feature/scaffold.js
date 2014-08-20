exports.filters = {
    defaults: {
        '!todoFilter': ['children', 'parent(1)'],
        'basicUserFilter': 'name'
    },
    list: {
        '!todoFilter': ['children', 'parent(1)'],
        '!basicUserFilter': 'todos'
    },
    get: {
        '!todoFilter': ['children', 'parent(1)'],
        '!basicUserFilter': 'todos'
    }
};

exports.labels = {
    name: '任务名称',
    description: '任务描述',
    basicUser: '执行者',
    parent: '上级任务'
};

exports.fieldGroups = {
    defaults: ['name', 'description', 'basicUser', 'parent']
};

exports.grid = {
    columns: [
        'name', 'description',
        {name: 'basicUser.name', header: '执行者'},
        {name: 'parent.name', header: '上级任务'}
    ]
};
