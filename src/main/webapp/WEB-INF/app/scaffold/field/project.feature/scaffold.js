exports.filters = {
    defaults: {
        '!fieldProjectFilter': 'fieldTodos'
    }
};

exports.labels = {
    name: '名称'
};

exports.fieldGroups = {
    defaults: ['name']
};

exports.picker = {
    grid: {
        columns: [
            {name: 'name', header: '名字'}
        ]
    }
};
