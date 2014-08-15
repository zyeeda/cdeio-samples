exports.filters = {
    defaults: {
        '!fieldUserFilter': 'todos'
    }
};

exports.labels = {
    name: '名称',
    code: '编号' ,
    birthday: '生日',
    email: '邮箱'
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
            {name: 'name', header: '名字'},
            {name: 'code', header: '编号'},
            {name: 'birthday', header: '生日'},
            {name: 'email', header: '邮箱'}
        ]
    }
};
