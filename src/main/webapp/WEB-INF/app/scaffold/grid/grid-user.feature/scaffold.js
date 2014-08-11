exports.filters = {
    defaults: {
        '!gridUserFilter': ''   
    }
};

exports.labels = {
    name: '名称',
    code: '编号',
    birthday: '生日',
    email: '邮箱'
};

exports.fieldGroups = {
    defaults: ['name', 'code', 'birthday', 'email']
};

exports.grid = {
    columns: [
        {name: 'name', filter: 'text', header: '名字' }, 
        {name:'code', filter: 'number-range'}, 
        {name: 'birthday', filter: 'date-range', header: '生日'}, 
        {name:'email', filter: 'text'}]
};
