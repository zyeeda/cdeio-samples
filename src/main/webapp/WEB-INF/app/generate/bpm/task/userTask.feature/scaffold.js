// 表示使用流程样式
exports.style = 'process';
// 指定流程定义id，需要与 example-generate-bpm-task-userTask.bpmn 中的 process 的 id 属性一致
exports.processDefinitionKey = 'example-generate-bpm-task-userTask';
exports.enableFrontendExtension = false;
exports.haveDataLevel = false;

// 活动的标签，默认为 '待认领'
exports.activeTab = 'waiting'

exports.filters = {
    defaults: {
        '!userTaskFilter': ''
    }
};

exports.labels = {
	name: '姓名',
	age: '年龄',
	sex: '性别',
	phone: '电话',
	address: '地址',
	description: '备注',
	submitter: '发起人',
	// 继承 BpmDomainEntity 的实体会拥有此属性，同时流程引擎会自动与流程同步此状态信息
	status: '状态'
};

exports.fieldGroups = {
    'base-info-group': [
        'name', 'age', 'sex', 'phone', 'address'
    ]
};

exports.forms = {
    show: {
    	size: 'large',
        groups: [
            {name: 'base-info-group', columns: 2, labelOnTop: true, label: '基本信息'}
        ],
        tabs: [
        	// task-info-group 为内置任务信息组，可以直接使用
        	// 同时平台还内置了'流程信息'和'历史信息'两个标签
        	// 流程信息标签用来显示流程的基本信息和流程图，历史信息标签用来显示流程的审核记录信息
            {title: '基本信息', groups: ['base-info-group', 'task-info-group']}
        ]
    },
    // 点击完成按钮后的 form 表单
    complete: {
    	groups: [
    		{name: 'base-info-group', columns: 2, labelOnTop: true, label: '基本信息'},
    		{name: 'task-audit-group', columns: 2, labelOnTop: true, label: '审核信息'}
    	]
    }
};

// 表格信息
// grid 中定义了待认领、代办理、已办理及全部四个标签下的所需要展示的表格信息，可以根据实际需要增加或减少相应的字段。
exports.grid = {
	// 待认领
	waiting: {
	    columns: [
	        'name', 'age', 'sex', 'phone', 'address', 'submitter', 'status'
	    ]
	},
	// 待办理
	doing: {
	    columns: [
	        'name', 'age', 'sex', 'phone', 'submitter', 'status'
	    ]
	},
	// 已办理
	done: {
	    columns: [
			'name', 'age', 'sex', 'submitter', 'status'
	    ]
	},
	// 全部
	none: {
	    columns: [
	        'name', 'age', 'submitter', 'status'
	    ]
	}
};