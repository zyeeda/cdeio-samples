define({
    type: 'form-view',
    formName: 'test',
    labelOnTop: false,
    avoidLoadingHandlers: true,

    fieldGroups: {
        group1: [
            {name: 'field1', type: 'mask', pattern: '9999-99-99', label: '日期'},
            {name: 'field1', type: 'mask', pattern: '199-9999-9999', label: '手机号码'},
            {name: 'field1', type: 'mask', pattern: 'aaaa-aaaa-aaaa-aaaa', label: '序列号'},
            'field1',
            {name: 'field5', type: 'datepicker', label: 'Date Picker'}
        ],
        group2: [
            {name: 'field6', type: 'dropdown', label: 'Drop down', source: [{id: 'a', text: 'A'}, {id: 'b', text: 'B'}]},
            {name: 'field7', type: 'hidden'},
            {name: 'field12', type: 'grid-picker', source: 'test/trees', label: 'Grid Picker'},
            {name: 'field13', type: 'tree-picker', source: 'test/trees', label: 'Tree Picker'},
            {name: 'field14', type: 'file-picker', url: 'invoke/simple/foo/first', label: 'File Picker', acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i},
            {name: 'field8', type: 'textarea', colspan: 2, rowspan: 5}
        ],
        group4: [
            {name: 'field10', label: 'Pined'}
        ],
        group5: ['field11', 'field9']
    },
    form: {
        groups: [
            {name: 'group1', label: 'Group 1'},
            {name: 'group2', label: 'Group 2', columns: 2},
            {name: 'group4', label: 'Group 4'},
            {name: 'group5', label: 'Group 5'}
        ]
    }
});
