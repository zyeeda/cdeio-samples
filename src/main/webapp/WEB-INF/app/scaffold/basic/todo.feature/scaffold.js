exports.filters = {
    defaults: {
        '!todoFilter': '',
        '!userFilter': 'todos'
    },
    list: {
        '!todoFilter': '',
        'userFilter': 'name'
    },
    get: {
        '!todoFilter': '',
        '!userFilter': 'todos'
    }
}; 

exports.labels = {
    name: '任务名称',
    description: '任务描述',
    user: '执行者',
    'user.name' :'执行者'
};

exports.fieldGroups = {
    defaults: ['name', 'description', 'user']
};

exports.grid = {
    columns: ['name', 'description', {name: 'user.name', header: '执行者'}]
};
