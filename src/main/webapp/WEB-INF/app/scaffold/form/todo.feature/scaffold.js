exports.filters = {
    defaults: {
        '!formTodoFilter': '',
        '!formUserFilter': 'todos'
    }
};

exports.entityLabel = '任务';

exports.labels = {
    name: '名称',
    description: '描述' ,
    status: '级别',
    startDate: '开始时间',
    users: '执行者',
    'users.name': '执行者',
};

exports.fieldGroups = {
    defaults: [
        'name', 
        {name: 'description', type: 'textarea'}
    ],
    attach:['startDate',
        {name: 'status', type: 'dropdown', defaultValue: '一般',
            source:[
                {id: '紧急', text: '紧急'},
                {id: '重大', text: '重大'},
                {id: '一般', text: '一般'}
            ]
        }
    ],
    inLineUserGrid: [{
        label: '任务分配',
        type: 'inline-grid',
        name: 'users',
        colspan: 2,
        allowAdd: false,
        multiple: true,
        crossPage: true,
        allowPick: true
    }]
};

exports.grid = {
    columns: ['name', 'description', 'status', 'startDate']
};

exports.forms = {

    defaults: {
        groups: [
            {name: 'defaults', label: '任务信息', columns: 1},
            {name: 'attach', label: '附加信息', columns: 2},
            {name: 'inLineUserGrid', columns: 2}
        ],
        size: 'large'
    }
};
