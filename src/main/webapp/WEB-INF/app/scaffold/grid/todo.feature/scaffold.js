exports.filters = {
    defaults: {
        '!gridTodoFilter': ''
    }
};

exports.labels = {
    name: '名称',
    desc: '描述'
};

exports.fieldGroups = {
    defaults: ['name', 'desc']
};

exports.grid = {
    columns: [
        {name: 'name', header: '名字'},
        {name: 'desc', header: '描述'} ]
};
