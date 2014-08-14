##表单视图
###1. 标签在上方 & 两列
```javascript
//字段分组(普通字段可以配置`colspan`, 字段类型为'textarea'时，可以配置`colspan`和`rowspan`属性)
exports.fieldGroups = {
    group1: [
        {name: 'field1', label: '指定label', required: true},
        'field2',
        {name: 'field5', type: 'datepicker', label: 'Date Picker', required: true},
        {name: 'field4', type: 'dropdown', source: [{id: 1, text: 'First One'}, {id: 2, text: 'Second One'}], required: true},
        {name: 'field3', colspan: 2}
    ]
}
//可以配置属性`columns`
exports.forms = {
    defaults: {
        size: 'large',
        groups: [{name: 'group1', columns: 2}]
    }
}
```
###2. 标签在上方 & 一列
```javascript
//字段分组(普通字段可以配置`colspan`, 字段类型为'textarea'时，可以配置`colspan`和`rowspan`属性)
exports.fieldGroups = {
    group1: [
        {name: 'field1', label: '指定label'},
        'field2',
        {name: 'field5', type: 'datepicker', label: 'Date Picker'},
        'field3'
    ]
}
//可以配置属性`columns`
exports.forms = {
    defaults: {
        size: 'large',
        groups: [{name: 'group1'}]
    }
}
```
###3. 标签在左边 & 两列
```javascript
//字段分组(普通字段可以配置`colspan`, 字段类型为'textarea'时，可以配置`colspan`和`rowspan`属性)
exports.fieldGroups = {
    group1: [
        {name: 'field1', label: '指定label'},
        'field2',
        {name: 'field5', type: 'datepicker', label: 'Date Picker'},
        {name: 'field3', colspan: 2},
        {name: 'field4', type: 'dropdown', source: [{id: 1, text: 'First One'}, {id: 2, text: 'Second One'}]}
    ]
}
//可以配置属性`columns`
exports.forms = {
    defaults: {
        size: 'large',
        groups: [{name: 'group1', columns: 2}]
    }
}
```
