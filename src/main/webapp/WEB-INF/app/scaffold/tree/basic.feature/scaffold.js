exports.style = 'tree';

exports.filters = {
    defaults: {
        '!basicTreeFilter': ['children', 'parent(1)']
    }
};

exports.labels = {
    name: '名称',
    parent: '上级目录'
};

exports.fieldGroups = {
    defaults: ['parent', 'name']
};

// exports.tree = {
//     root: '中国'
// };