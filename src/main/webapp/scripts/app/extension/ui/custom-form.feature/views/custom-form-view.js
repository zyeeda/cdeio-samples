define({
    type: 'form-view',
    formName: 'custom-form-view',
    labelOnTop: true,
    avoidLoadingHandlers: true,
    size: 'small',

    fieldGroups: {
        group: [
            {name: 'name', label: '名称', type: 'text', required: true},
            {name: 'status', label: '状态', type: 'dropdown', required: true, defaultValue: '1',
                source: [
                    {id: '1', text: '运行'},
                    {id: '2', text: '备件'},
                    {id: '3', text: '报废'}
                ]
            }
        ]
    },
    form: {
        groups: {name: 'group'}
    },
    validation: {
        rules: {
            name: 'required',
            status: 'required'
        },
        messages: {
            name: { required: '必填项'},
            status: { required: '请选择状态'}
        }
    }
});
