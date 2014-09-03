exports.haveFilter = true;

exports.filters = {
    defaults: {
        '!seniorGridUserFilter': ''
    }
};

exports.labels = {
    name: '名称',
    code: '编号' ,
    sex: '性别',
    birthday: '生日',
    email: '邮箱'
};

exports.fieldGroups = {
    defaults: [
        'name', 'code',
        {name: 'sex', type: 'dropdown', defaultValue: '男', source: [{id: '男', text: '男'}, {id: '女', text: '女'}]},
        'birthday', 'email'
    ],
    filter: [
        {name: 'name', type:'text'},
        {name: 'code', type: 'number-range'},
        {name: 'sex', type: 'dropdown', source: [{id: '男', text: '男'}, {id: '女', text: '女'}]},
        {name: 'birthday', type: 'date-range'}
    ]
};

exports.forms = {
    filter: {
        groups: [{
            name: 'filter', columns: 4
        }]
    }
};
