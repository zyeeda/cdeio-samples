define({
    type: 'form-view',
    formName: 'simple',
    avoidLoadingHandlers: true,

    fieldGroups: {
        group1: [
            {name: 'field1', label: '指定label', required: true},
            'field2',
            {name: 'field5', type: 'datepicker', label: 'Date Picker', required: true},
            {name: 'field4', type: 'dropdown', source: [{id: 1, text: 'First One'}, {id: 2, text: 'Second One'}], required: true},
            {name: 'field3', colspan: 2}
        ]
    },
    form: {
        groups: {name: 'group1', columns: 2}
    },
    // validation: {
    //     rules: {
    //         field1: 'required', field2: 'required', field5: 'required'
    //     },
    //     errorsAppend: true
    // }
});
