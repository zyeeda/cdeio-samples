exports.entityLabel = '基础';

exports.enableFrontendExtension = true;

exports.filters = {
    defaults: {
        '!uiBasicFilter': ['callBack']
    }
};

exports.labels = {
    name: '名称',
    description: '描述',
    status: '状态'
};

exports.grid = {
    numberColumn: true,
    columns: [
        {name: 'name'
        }, {
            name: 'status',
            defaultContent: '好',
            renderer: 'modifyStatus'
        }, {
            name: 'description'
        }
    ]
};

exports.fieldGroups = {
	defaults: ['name',
        {
            name: 'status',
            type: 'dropdown',
            defaultValue: '1',
            source: [
                {id: '1', text: '好'},
                {id: '2', text: '坏'}
            ]
        }, 'description']
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
    beforeShowPicker: 'beforeBasicShowPicker'
};

//定义回收站按钮
exports.operators = {
    trash: { label: '回收站', icon: 'icon-trash', group: '30-tips', order: 10, show: 'selected', style: 'btn btn-grey' }
};
