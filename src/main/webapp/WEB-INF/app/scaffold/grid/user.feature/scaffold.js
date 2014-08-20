exports.haveFilter = true;
exports.filters = {
    defaults: {
        '!seniorGridUserFilter': ''
    }
};

exports.labels = {
    name: '名称',
    code: '编号' ,
    birthday: '生日',
    email: '邮箱'
};

exports.fieldGroups = {
    defaults: ['name', 'code', 'birthday', 'email'],
    filter: [
        {name: 'name', type:'text'},
        {name: 'code', type: 'number-range'},
        {name: 'birthday', type: 'date-range'}]
};

exports.grid = {
    columns: ['name', 'code', 'birthday', 'email']
};

exports.forms = {
    filter: {
        groups: [{
            name: 'filter', columns: 4
        }]
    }
};
