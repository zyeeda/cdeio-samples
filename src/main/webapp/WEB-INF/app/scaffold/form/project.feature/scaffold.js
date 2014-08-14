exports.filters = {
    defaults: {
        '!formProjectFilter': ''
    }
};

exports.entityLabel = '项目';

exports.labels = {
    name: '名称',
    desc: '描述' ,
    startDate: '开始时间',
    people: '负责人',
    intro: '费用说明',
    cost: '总费用'
};

exports.fieldGroups = {
    defaults: ['name', 'startDate', 'desc', 'people'],
    tabs: [{name: 'cost', validations: {rules: {number: true}}}, 'intro']
};

exports.grid = {
    columns: ['name', 'desc', 'startDate', 'people']
};

exports.forms = {
    defaults: {
        groups: [
            {name: 'defaults', columns: 2},
            {name: 'tabs', columns: 2}
        ],
        tabs: [
            {title: '项目信息', groups: ['defaults']},
            {title: '费用明细', groups: ['tabs']}
        ],
        size: 'large'
    }
};
