exports.style = 'process';
exports.processDefinitionKey = 'example-generate-bpm-gateway-exclusive';
exports.enableFrontendExtension = false;

exports.activeTab = 'waiting'

exports.filters = {
    defaults: {
        '!employee4ExclusiveFilter': ''
    }
};

exports.labels = {
	name: '姓名',
	age: '年龄',
	sex: '性别',
	phone: '电话',
	address: '地址',
	workingLife: '工作年限',
	description: '备注',
	submitter: '发起人',
	status: '状态'
};

exports.fieldGroups = {
    'base-info-group': [
        'name', 'age', 'sex', 'phone', 'workingLife', 'address'
    ]
};

exports.forms = {
    show: {
    	size: 'large',
        groups: [
            {name: 'base-info-group', columns: 2, labelOnTop: true, label: '基本信息'}
        ],
        tabs: [
            {title: '基本信息', groups: ['base-info-group', 'task-info-group']}
        ]
    },
    complete: {
    	groups: [
    		{name: 'base-info-group', columns: 2, labelOnTop: true, label: '基本信息'},
    		{name: 'task-audit-group', columns: 2, labelOnTop: true, label: '审核信息'}
    	]
    }
};

exports.grid = {
	waiting: {
	    columns: [
	        'name', 'age', 'sex', 'phone', 'workingLife', 'address', 'submitter', 'status'
	    ]
	},
	doing: {
	    columns: [
	        'name', 'age', 'sex', 'phone', 'workingLife', 'submitter', 'status'
	    ]
	},
	done: {
	    columns: [
			'name', 'age', 'sex', 'workingLife', 'submitter', 'status'
	    ]
	},
	none: {
	    columns: [
	        'name', 'age', 'workingLife', 'submitter', 'status'
	    ]
	}
};
