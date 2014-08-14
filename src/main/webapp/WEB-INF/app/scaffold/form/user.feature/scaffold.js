exports.filters = {
    defaults: {
        '!formUserFilter': ''
    }
};

exports.labels = {
    name: '名称',
    sex: '性别',
    birthday: '生日',
    email: '邮件'
};

exports.fieldGroups = {
    defaults: ['name', 
       {name: 'sex',
        type: 'dropdown',
        defaultValue: '',
        source: [
                {id: '男', text: '男'},
                {id: '女', text: '女'}
        ]},
        'birthday', 'email'
    ]
};

exports.grid = {
    columns: ['name', 'sex', 'birthday', 'email']
};

exports.forms = {
    defaults: {
        groups: [{name: 'defaults', columns: 2}]
    }
};

exports.picker = {
    grid: {
        columns: [
            {name: 'name', header: '名称'}, 
            {name: 'sex', header: '性别'}, 
            {name: 'birthday', header: '生日'},
            {name: 'email', header: '邮箱'}
        ]
    }
};
