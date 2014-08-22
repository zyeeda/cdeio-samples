exports.filters = {
    defaults: {
        '!fieldAccountFilter': '',
    }
};

exports.entityLabel = '用户';

exports.labels = {
    name: '姓名',
    account: '用户名',
    password: '密码',
    password2: '确认密码',
    email: '邮箱',
    url: '博客',
    workyear: '工作年限',
    creditcard: '信用卡号',
    salary: '基本工资'
};

exports.fieldGroups = {
    defaults: [
        {name: 'name', required: true, validations: {rules: {required: true}}},
        {name: 'account',required: true, validations: {rules: {required: true, rangelength: [6, 40]}}},
        {name: 'password', type: 'password', required: true, validations: {rules: {required: true, rangelength:[6, 20]}}},
        {name: 'password2', type: 'password', required: true, validations: {rules: {required: true, equalTo: 'password'}}},
        {name: 'email', validations: {rules: {email: true}}},
        {name: 'url', validations: {rules: {url: true}}},
        {name:'workyear', validations: {rules: {digits: true, range: [0, 60]}}},
        {name: 'salary', validations: {rules: {number: true, min: 2000}}},
        {name: 'creditcard', validations: {rules: {creditcard: true}}}]
};

exports.grid = {
    columns: ['name', 'account', 'email', 'workyear', 'salary']
};
