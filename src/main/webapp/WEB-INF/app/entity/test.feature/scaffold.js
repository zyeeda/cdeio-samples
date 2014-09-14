//配置查询过滤字段
exports.filters = {
    defaults: {
        '!testFilter': ''
    }
};

//配置显示字段对应的中文名称
exports.labels = {
    name: '名称',
    description: '描述'
};

//配置表单中显示的字段分组
exports.fieldGroups = {
	defaults: ['name', 'description']
};
