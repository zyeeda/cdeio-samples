exports.disableAuthc = true;

exports.filters = {
    defaults: {
            'treeFilter': ['id', 'name', 'parent(1)']
    }
};

exports.labels = {
    name: '名称'
};

exports.fieldGroups = {
    DEFAULT: ['name']
};

exports.style = 'tree';
