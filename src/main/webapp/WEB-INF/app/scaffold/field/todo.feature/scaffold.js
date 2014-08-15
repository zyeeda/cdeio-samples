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
    endDate: '结束时间',
    attach: '附件',
    attachments: '多附件',
    users: '执行者',
    tag: '任务类型',
    project: '项目',
    'tag.name': '任务类型',
    'users.name': '执行者',
    'project.name': '项目名称'
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
            acceptFileTypes: "(\\.|\\/)(swf|mp4|avi|wmv|doc|docx|xls|xlsx|ppt|pptx|zip|rar|7z|pdf|txt|jpg|jpeg|png|gif)$"
        }, 'tag', 'project',
        {name: 'attachments', type: 'file-picker', url: 'invoke/system/upload', multiple: true, colspan: 2,
            acceptFileTypes: "(\\.|\\/)(swf|mp4|avi|wmv|doc|docx|xls|xlsx|ppt|pptx|zip|rar|7z|pdf|txt|jpg|jpeg|png|gif)$"
        },
        {name: 'description', type: 'textarea', colspan: 2}
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
