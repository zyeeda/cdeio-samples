exports.filters = {
    defaults: {
        '!documentFilter': [],
        '!projectFilter' : ['documents'],
        '!folderFilter': ['documents', 'children'],
        '!attachmentFilter': []
    }
    ,
    list: {
        'documentFilter': ['id', 'name', 'project', 'folder', 'description'],
        'projectFilter': ['name'],
        'folderFilter': ['name']
    }
};

exports.labels = {
    name: '名称',
    description: '描述',
    type: '类型',
    size: '大小',
    attachment: '文件',
    'folder': '文件夹',
    'project': '项目'
};

exports.fieldGroups = {
	defaults: ['name', {name: 'description', type: 'textarea'}, 'folder', 'project',
		{name: 'attachment', type: 'file-picker', preview: 'left', url: 'invoke/system/upload'}
	]
};

exports.grid = {
    columns : [
        {name: 'name'},
        {name: 'description'},
        {name: 'folder.name', header: '文件夹'},
        {name: 'project.name', header: '项目'}
    ]
}
