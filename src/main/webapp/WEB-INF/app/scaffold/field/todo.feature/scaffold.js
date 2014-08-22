exports.filters = {
    defaults: {
        '!fieldTodoFilter': '',
        '!attachmentFilter': '',
        '!fieldUserFilter': 'todos',
        '!fieldTagFilter': ['children', 'todos'],
        '!fieldProjectFilter': 'fieldTodos'
    }
};

exports.entityLabel = '任务';

exports.labels = {
    name: '名称',
    description: '描述',
    level: '优先级',
    startDate: '开始时间',
    attach: '附件',
    users: '执行者',
    tag: '任务类型',
    project: '项目',
};

exports.fieldGroups = {
    defaults: ['name', 'startDate',
       {name: 'level', type: 'dropdown', defaultValue: '一般',
            source: [
                {id: '紧急', text: '紧急'},
                {id: '重大', text: '重大'},
                {id: '一般', text: '一般'}
            ]
        },
        {name: 'attach', type: 'file-picker', url: 'invoke/system/upload',
            acceptFileTypes: "(\\.|\\/)(doc|xls|ppt|)$"
        }, 'tag', 'project',
        {name: 'description', type: 'textarea', colspan: 2}
    ],
    inLineUserGrid: [{
        label: '任务分配',
        type: 'inline-grid',
        name: 'users',
        colspan: 2,
        allowAdd: false,
        multiple: true,
        crossPage: false,
        allowPick: true
    }]
};

exports.grid = {
    columns: ['name', 'description', 'level', {name: 'tag.name', header: '任务类型'}]
};

exports.forms = {
    defaults: {
        groups: [
            {name: 'defaults', columns: 2},
            {name: 'inLineUserGrid', columns:2}
        ]
    }
};
