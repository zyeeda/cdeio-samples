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
        {name: 'sex', type: 'dropdown', source: [{id: '男', text: '男'}, {id: '女', text: '女'}], defaultValue: '男'},
        'birthday', 'email'
    ]
};

exports.grid = {
    columns: [
        {name: 'name', filter: 'text'},
        {name: 'code', filter: 'number-range'},
        {name: 'sex', filter: 'select', source: [{value: '男', label: '男'}, {value: '女', label: '女'}]},
        {name: 'birthday', filter: 'date-range'},
        {name: 'email', filter: 'text'}
    ]
};
