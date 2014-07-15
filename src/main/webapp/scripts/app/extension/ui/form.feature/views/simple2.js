define({
    type: 'form-view',
    formName: 'simple',
    avoidLoadingHandlers: true,

    fieldGroups: {
        group1: [
            {name: 'field1', label: '指定label'},
            'field2',
            {name: 'field5', type: 'datepicker', label: 'Date Picker'},
            'field3'
        ]
    },
    form: {
        groups: 'group1'
    },
    validation: {
        rules: {
            field1: 'required', field2: 'required', field5: 'required'
        },
        messages: {
            field1: { required: '必填字段'}
        }
    }
});
