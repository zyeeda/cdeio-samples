exports.entityLabel = '作者';
exports.style = 'grid';

exports.enableFrontendExtension = false;

exports.filters = {
    defaults: {
        '!authorFilter': ['']
    }
};

exports.labels = {
    name: '作者姓名'
};

exports.fieldGroups = {
    defaults: [
        'name'
    ]
};

exports.grid = {
    columns: [
        { name: 'name' }
    ]
};

exports.picker = {
    grid: {
        columns: [
            {name: 'name', header: '作者姓名'}
        ]
    }
};
