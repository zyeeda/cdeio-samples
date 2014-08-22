exports.enableFrontendExtension = false;

exports.filters = {
    defaults: {
        '!callBackInlineGridFilter': ['callBack']
    }
};

exports.labels = {
    name: '名称',
    description: '描述',
    status: '状态'
};

exports.fieldGroups = {
	defaults: ['name', 'description']
};

exports['inline-grid'] = {
    columns: ['name', 'description',
        {name: 'status', renderer: 'modifyStatus', defaultContent: ''}
    ]
};

exports.picker = {
    grid: {
        columns: [
            {name: 'name', header: '名称'},
            {name: 'description', header: '描述'},
            {name: 'status', header: '状态', renderer: 'modifyStatus'}
        ]
    },
    callback: 'basicPickerCallback',
    beforePickerConfirm: 'beforeBasicPickerConfirm',
    afterPickerConfirm: 'afterBasicPickerConfirm',
    beforeShowPicker: 'beforeShowBasicPicker'
};


