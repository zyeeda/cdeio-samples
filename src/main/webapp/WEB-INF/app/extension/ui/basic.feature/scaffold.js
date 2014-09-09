exports.enableFrontendExtension = true;

exports.filters = {
    defaults: {
        '!uiBasicFilter': ['']
    }
};

exports.labels = {
    name: '名称',
    description: '描述'
};

exports.fieldGroups = {
	defaults: ['name', 'description']
};

//定义回收站按钮
exports.operators = {
    trash: { label: '回收站', icon: 'icon-trash', group: '30-tips', order: 10, show: 'always', style: 'btn btn-grey' }
};
