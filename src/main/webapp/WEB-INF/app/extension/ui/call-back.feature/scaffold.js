exports.entityLabel = '回调';

exports.enableFrontendExtension = true;

exports.filters = {
    defaults: {
        '!callBackFilter': [''],
        '!routerFilter': [''],
        '!uiBasicFilter': ['callBack']
    },
    list: {
        'callBackFilter': ['id', 'name', 'type', 'detailType']
    }
};

exports.labels = {
    name: '名称',
    type: '类型',
    detailType: '明细类型',
    router: '路由'
};

exports.grid = {
    numberColumn: true,
    columns: [
        {name: 'name'
        }, {
            name: 'type',
            defaultContent: '小型',
            renderer: 'modifyType'
        }, {
            name: 'detailType',
            defaultContent: '小型1',
            renderer: 'modifyDetailType'
        }
    ]
};

exports.fieldGroups = {
	defaults: [
        {
            name: 'name',
            statusChanger: true
        }, {
            name: 'type',
            type: 'dropdown',
            defaultValue: '1',
            change: 'disableChange',
            source: [
                {id: '1', text: '小型'},
                {id: '2', text: '中型'},
                {id: '3', text: '大型'}
            ]
        }, {
            name: 'detailType',
            type: 'dropdown',
            defaultValue: '1',
            source: [
                {id: '1', text: '小型1'},
                {id: '2', text: '小型2'},
                {id: '3', text: '小型3'},
                {id: '4', text: '中型1'},
                {id: '5', text: '中型2'},
                {id: '6', text: '中型3'},
                {id: '7', text: '大型1'},
                {id: '8', text: '大型2'},
                {id: '9', text: '大型3'}
            ]
        }, {
            name: 'router'
        }
    ],
    inlineUiBasicGrid: [{
        label: '基础明细',
        type: 'inline-grid',
        name: 'uiBasics',
        colspan: 2,
        allowAdd: true,
        allowEdit: true,
        multiple: true,
        crossPage: true,
        allowPick: true
    }]
};

exports.forms = {
    defaults: {
        size: 'large',
        groups: [
            {name: 'defaults', columns: 2},
            {name: 'inlineUiBasicGrid', columns: 2}
        ]
    }
};
