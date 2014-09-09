exports.entityLabel = '路由';

exports.enableFrontendExtension = false;

exports.filters = {
    defaults: {
        '!routerFilter': ''
    }
};

exports.labels = {
    name: '名称',
    applicant: '申请人',
    applyTime: '申请时间',
    description: '描述'
};

exports.fieldGroups = {
	defaults: ['name', 'applicant', 'applyTime', 'description']
};

exports.picker = {
    grid: {
        columns: [
            {name: 'name', header: '名称'},
            {name: 'applicant', header: '申请人'},
            {name: 'applyTime', header: '申请时间'},
            {name: 'description', header: '描述'}
        ]
    },
    callback: 'routerPickerCallback',
    beforePickerConfirm: 'beforeRouterPickerConfirm',
    afterPickerConfirm: 'afterRouterPickerConfirm',
    beforeShowPicker: 'beforeShowRouterPicker'
};
