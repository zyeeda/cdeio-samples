exports.filters = {
    defaults: {
    	'!fooFilter': '',
    	'!barFilter': 'foo'
	}
};

exports.labels = {
    name: '名称',
    description: '描述',
    diabled: '状态',
    bars: 'Bars'
};

exports.fieldGroups = {
	defaults: ['name', 'description', 'diabled'],
	inlineUserGrid: [{
		name: 'bars', 
		type: 'inline-grid', 
		allowAdd: true, 
		allowEdit: true
	}]
};

exports.forms = {
	defaults: {
		groups: [
			{name: 'defaults'},
			{name: 'inlineUserGrid', columns: 2}
		]
	}	
}
