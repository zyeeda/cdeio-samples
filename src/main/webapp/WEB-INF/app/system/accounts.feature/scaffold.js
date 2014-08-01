exports.filters = {
    defaults: {
        '!accountFilter': ['password', 'password2'],
        '!departmentFilter': ['accounts', 'children', 'parent(1)'],
        '!roleFilter': ['accounts', 'permissions']
    }
};

exports.labels = {
    id: 'ID',
    realName: '姓名',
    accountName: '账户名',
    password: '密码',
    password2: '重复密码',
    email: '邮箱',
    mobile: '手机',
    telephone: '电话',
    disabled: '状态',
    oldPassword: '原密码',
    newPassword: '新密码',
    newPassword2: '重复密码',
    department: '部门',
    'department.id': '部门',
    dataLevel: '数据权限'
};

exports.picker = {
    grid: {
        columns: [
            { name: 'realName', header: '姓名'},
            { name: 'accountName', header: '账户名'},
            { name: 'email', header: '邮箱' },
            { name: 'mobile', header: '手机' },
            { name: 'department.name', header: '部门'}
        ]
    }
};

exports['inline-grid'] = {
    columns: [
        {name: 'realName' },
        'accountName', 'email', 'mobile',
        { name: 'department.name', header: '部门'}
    ]
};
