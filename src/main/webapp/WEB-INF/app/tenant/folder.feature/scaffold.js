exports.filters = {
    defaults: {
        '!folderFilter': 'children',
        '!documentFilter': ['folder', 'project', 'attachment']
    }
};

exports.labels = {
    name: '名称',
    description: '描述',
    parent: '父文件夹'
};

exports.style = 'tree'

exports.fieldGroups = {
	defaults: ['parent', 'name', 'description']
};
