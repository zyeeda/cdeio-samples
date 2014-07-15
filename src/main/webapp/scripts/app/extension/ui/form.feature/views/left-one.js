define({
    // type: 'form-view',
    type: 'custom-form-view',
    formName: 'simple',
    labelOnTop: false,
    avoidLoadingHandlers: true,

    fieldGroups: {
        group1: [
            {name: 'field1', type: 'mask', pattern: '9999-99-99', label: '日期'},
            'field2',
            {name: 'field5', type: 'datepicker', label: 'Date Picker'},
            {name: 'field3', type: 'grid-picker', source: 'test/trees', label: 'Grid Picker'},
            {name: 'field4', type: 'dropdown', source: [{id: 1, text: 'First One'}, {id: 2, text: 'Second One'}]},
            {name: 'field6', type: 'file-picker',  multiple: false, preview: 'top', url: 'invoke/simple/foo/first', label: 'File Picker', acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i},
            {name: 'field7', type: 'textarea', colspan: 2, rowspan: 5},
            {name: 'field8', type: 'tree-picker', source: 'test/trees', label: 'Tree Picker'},
            {name: 'field9', type: 'mask', pattern: '199-9999-9999', label: '手机号码'},
            {name: 'field10', type: 'mask', pattern: 'aaaa-aaaa-aaaa-aaaa', hideLabel: true, label: '序列号'},
            {name: 'field11', type: 'hidden', label: '隐藏'}
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
