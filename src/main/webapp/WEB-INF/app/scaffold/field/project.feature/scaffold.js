exports.filters = {
    defaults: {
        '!fieldProjectFilter': '',
        'fieldTodoFilter': 'name'
    }
};

exports.labels = {
    name: '名称'
};

exports.fieldGroups = {
    defaults: ['name', 'code', 'birthday', 'email']
};

exports.picker = {
    grid: {
        columns: [
            {name: 'name', header: '名字'}
        ]
    }
};
