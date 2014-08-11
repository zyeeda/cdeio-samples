exports.style = 'process';
exports.processDefinitionKey = 'example-generate-bpm-multiple-subprocess';
exports.enableFrontendExtension = false;

exports.activeTab = 'waiting'

exports.filters = {
    defaults: {
        '!plan4SubprocessFilter': ''
    }
};

exports.labels = {
	name: '计划名称',
	money: '投入',
	cycle: '周期',
	planner: '策划人',
	description: '描述',
	status: '状态'
};

exports.fieldGroups = {
    'base-info-group': [
        'name', 'money', 'cycle', 'planner', 'description'
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
	        'name', 'money', 'cycle', 'planner', 'status'
	    ]
	},
	doing: {
	    columns: [
	        'name', 'money', 'cycle', 'planner', 'status'
	    ]
	},
	done: {
	    columns: [
			'name', 'money', 'cycle', 'planner', 'status'
	    ]
	},
	none: {
	    columns: [
	        'name', 'money', 'cycle', 'planner', 'status'
	    ]
	}
};