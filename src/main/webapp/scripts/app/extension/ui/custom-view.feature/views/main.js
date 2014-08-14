define({
    type: 'form-view',
    formName: 'main',
    labelOnTop: false,
    avoidLoadingHandlers: true,

    fieldGroups: {
        group1: [
            {name: 'field1', label: '指定label'},
            'field2',
            {name: 'field3', type: 'datepicker', label: 'Date Picker'},
            {name: 'field4', type: 'dropdown', source: [{id: 1, text: 'First One'}, {id: 2, text: 'Second One'}]}
        ]
    },
    form: {
        groups: {name: 'group1', columns: 2}
    },
    validation: {
        rules: {
            field1: 'required', field2: 'required', field4: 'required'
        },
        messages: {
            field1: { required: '必填字段'}
        }
    }
});
