exports.entityLabel = '自定义表单';

exports.enableFrontendExtension = true;

exports.filters = {
    defaults: {
        '!customFormFilter': ''
    }
};

exports.labels = {
    name: '名称',
    applicant: '申请人',
    applyTime: '申请时间',
    description: '描述'
};

exports.fieldGroups = {
	defaults: [
        {name: 'name', hideLabel: true},
        {name: 'applicant', hideLabel: true},
        {name: 'applyTime', hideLabel: true},
        {name: 'description', hideLabel: true}
    ]
};

exports.forms = {
    add: {
        size: 'large',
        custom: true,
        template: 'extension/ui/custom-form.feature/views/add.html',
        groups: [
            {name: 'defaults', columns: 2}
        ]
    },
    edit: {
        size: 'large',
        custom: true,
        template: 'extension/ui/custom-form.feature/views/edit.html',
        groups: [
            {name: 'defaults', columns: 2}
        ]
    },
    show: {
        size: 'large',
        custom: true,
        template: 'extension/ui/custom-form.feature/views/show.html',
        groups: [
            {name: 'defaults', columns: 2}
        ]
    }
};

//定义自定义表单按钮
exports.operators = {
    customForm: { label: '自定义表单', icon: 'icon-leaf', group: '30-tips', order: 10, show: 'selected', style: 'btn btn-grey' }
};
