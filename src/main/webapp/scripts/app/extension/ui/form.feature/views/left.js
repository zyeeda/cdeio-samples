define({
    type: 'form-view',
    formName: 'simple',
    labelOnTop: false,
    avoidLoadingHandlers: true,

    fieldGroups: {
        group1: [
            {name: 'field1', label: '指定label'},
            'field2',
            {name: 'field5', type: 'datepicker', label: 'Date Picker'},
            {name: 'field3', colspan: 2},
            {name: 'field4', type: 'dropdown', defaultValue: '1', source: [{id: 1, text: 'First One'}, {id: 2, text: 'Second One'}]}
        ]
    },
    form: {
        groups: {name: 'group1', columns: 2}
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
