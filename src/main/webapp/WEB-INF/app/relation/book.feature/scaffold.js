exports.entityLabel = '书籍';
exports.style = 'grid';

exports.enableFrontendExtension = false;

exports.filters = {
    defaults: {
        '!bookFilter': [''],
        '!authorFilter': ['']
    }
};

exports.labels = {
    name: '书籍名称',
    authors: '作者'
};

exports.fieldGroups = {
    defaults: [
        'name',
        {name: 'authors', type: 'inline-grid', multiple: true, crossPage: true, allowPick: true}
    ]
};

exports.forms = {
    defaults: {
        groups: [{
            name: 'defaults'
        }]
    }
};

exports.grid = {
    columns: [
        { name: 'name' }
    ]
};
