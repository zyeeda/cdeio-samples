exports.filters = {
    defaults: {
        '!formProjectFilter': '',
        '!formUserFilter': 'users',
        '!formTodoFilter': 'todos',
        '!attachmentFilter': ''
    }
};

exports.entityLabel = '项目';

exports.labels = {
    name: '名称',
    desc: '描述' ,
    startDate: '开始时间',
    people: '负责人',
    intro: '费用说明',
    cost: '总费用',
    attachment: '附件',
    files: '多附件'
};

exports.fieldGroups = {
    defaults: ['name', 'startDate', 'desc', 'people'],
    cost: [{
        name: 'cost',
        validations: {
            rules: {number: true}
        }
    }, 'intro', {
        name: 'attachment',
        type: 'file-picker',
        preview: 'left',
        url: 'invoke/scaffold/extension/service/uploadfile/upload',
        colspan: 2
    }],
    inLineUserGrid: [{
        label: '任务分配',
        type: 'inline-grid',
        name: 'users',
        colspan: 2,
        allowAdd: false,
        multiple: true,
        crossPage: true,
        allowPick: true
    }],
    inLineTodoGrid: [{
        label: 'todos',
        type: 'inline-grid',
        name: 'todos',
        colspan: 2,
        multiple: true
    }],
    attachment: [
        {name: 'files', type: 'file-picker', preview: 'left', multiple: true, url: 'invoke/scaffold/extension/service/uploadfile/upload/files'}
    ]
};

exports.grid = {
    columns: ['name', 'desc', 'startDate', 'people']
};

exports.forms = {
    defaults: {
        groups: [
            {name: 'defaults', label: '基本信息', columns: 2},
            {name: 'cost', columns: 2},
            {name: 'inLineUserGrid', label: '用户', columns: 2},
            {name: 'inLineTodoGrid', label: '任务', columns: 2},
            {name: 'attachment', label: '附件1', columns: 1},
            {name: 'attachment2', label: '附件2', columns: 1}
        ],
        tabs: [
            {title: '项目信息', groups: ['defaults', 'inLineUserGrid', 'inLineTodoGrid', 'attachment']},
            {title: '费用明细', groups: ['cost']}
        ],
        size: 'large'
    }
};
