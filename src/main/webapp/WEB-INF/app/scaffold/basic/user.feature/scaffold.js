exports.filters = {
    defaults: {
        '!basicUserFilter': 'todos'
    }
};

exports.fieldGroups = {
    defaults: ['name', 'code', 'birthday', 'email']
};

exports.grid = {
    columns: ['name', 'code', 'birthday', 'email']
};

exports.picker = {
    grid: {
        columns: [
            {name: 'name', header: '名字'}
        ]
    }
};
