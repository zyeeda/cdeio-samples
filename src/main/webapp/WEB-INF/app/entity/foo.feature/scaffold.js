exports.filters = {
    defaults: {
        '!fooFilter': '',
        '!barFilter': 'foo'
    }
};

exports.labels = {
    name: '名称',
    description: '描述',
    diabled: '状态',
    bars: 'Bars'
};

exports.fieldGroups = {
    defaults: ['name', 'description', {
        name: 'diabled', defaultValue: true, type: 'dropdown',
            source: [
                {id: true, text: '是'},
                {id: false, text: '否'},
            ]
        }, {
            name: 'bars',
            label: 'Bars',
            type: 'inline-grid',
            allowAdd: true,
            allowEdit: true
        }
    ]
    /*inlineUserGrid: [{
        name: 'bars',
        type: 'inline-grid',
        allowAdd: true,
        allowEdit: true
    }]*/
};

exports.forms = {
    defaults: {
        groups: [
            {name: 'defaults', label: '基本信息', labelIcon: 'icon-flag'},
            {name: 'inlineUserGrid', columns: 2}
        ]
    }
}
