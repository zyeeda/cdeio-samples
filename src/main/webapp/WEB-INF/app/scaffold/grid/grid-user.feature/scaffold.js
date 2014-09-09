exports.filters = {
    defaults: {
        '!gridUserFilter': ''
    }
};

exports.labels = {
    name: '名称',
    code: '编号',
    sex: '性别',
    birthday: '生日',
    email: '邮箱'
};

exports.fieldGroups = {
    defaults: [
        'name', 'code',
        {name: 'sex', type: 'dropdown', defaultValue: '男', source: [{id: '男', text: '男'}, {id: '女', text: '女'}]},
        'birthday', 'email'
    ]
};

exports.grid = {
    columns: [
        {name: 'name', filter: 'text'},
        {name: 'code', filter: 'number-range'},
        {name: 'sex', filter: 'select', source: [{id: '男', label: '男'}, {id: '女', label: '女'}]},
        {name: 'birthday', filter: 'date-range'},
        {name: 'email', filter: 'text'}
    ]
};
