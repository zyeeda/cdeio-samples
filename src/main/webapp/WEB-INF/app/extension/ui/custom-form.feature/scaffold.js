exports.entityLabel = '自定义表单';

exports.enableFrontendExtension = false;

exports.filters = {
    defaults: {
        '!customFormFilter': ''
    }
};

exports.labels = {
    name: '名称',
    applicant: '申请人',
    applyTime: '申请时间',
    description: '描述',
    mainAppearance: '外观',
    mainRemark: '备注',
    auxAppearance: '外观',
    auxRemark: '备注'
};

exports.fieldGroups = {
	defaults: [
        {name: 'name'},
        {name: 'applicant'},
        {name: 'applyTime'},
        {name: 'description'},
        {name: 'mainAppearance', defaultValue: true, type: 'dropdown',
            source: [
                {id: true, text: '合格'},
                {id: false, text: '不合格'}
            ]
        },
        {name: 'mainRemark'},
        {name: 'auxAppearance', defaultValue: true, type: 'dropdown',
            source: [
                {id: true, text: '合格'},
                {id: false, text: '不合格'}
            ]
        },
        {name: 'auxRemark'}
    ],
    add: [
        {name: 'name', hideLabel: true},
        {name: 'applicant', hideLabel: true},
        {name: 'applyTime', hideLabel: true},
        {name: 'description', hideLabel: true, type: 'textarea', rowspan: 3},
        {name: 'mainAppearance', hideLabel: true, defaultValue: true, type: 'dropdown',
            source: [
                {id: true, text: '合格'},
                {id: false, text: '不合格'}
            ]
        },
        {name: 'mainRemark', hideLabel: true},
        {name: 'auxAppearance', hideLabel: true, defaultValue: true, type: 'dropdown',
            source: [
                {id: true, text: '合格'},
                {id: false, text: '不合格'}
            ]
        },
        {name: 'auxRemark', hideLabel: true}
    ]
};

exports.forms = {
    add: {
        size: 'large',
        custom: true,
        template: 'extension/ui/custom-form.feature/views/add.html',
        groups: [
            {name: 'add', columns: 2}
        ]
    },
    edit: {
        size: 'large',
        groups: [
            {name: 'defaults', columns: 2}
        ]
    },
    show: {
        size: 'large',
        custom: true,
        template: 'extension/ui/custom-form.feature/views/show.html',
        groups: [
            {name: 'add', columns: 2}
        ]
    }
};

