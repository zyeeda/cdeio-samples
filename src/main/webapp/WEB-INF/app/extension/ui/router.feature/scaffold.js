exports.entityLabel = '路由';

exports.enableFrontendExtension = false;

exports.filters = {
    defaults: {
        '!routerFilter': ''
    }
};

exports.labels = {
    name: '名称',
    description: '描述'
};

exports.fieldGroups = {
	defaults: ['name', 'description']
};

exports.picker = {
    grid: {
        columns: [
            {name: 'name', header: '名称'},
            {name: 'description', header: '描述'}
        ]
    }
};
