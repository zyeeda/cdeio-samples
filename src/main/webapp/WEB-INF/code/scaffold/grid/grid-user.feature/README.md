本例主要介绍 filter 的用法。

平台通过在 grid 中配置 filter 来实现列表页面的条件过滤功能，可以给列表中展示字段配置对应的过滤框，具体的效果请查看本例的样例效果页面。
针对不同的字段类型和取值范围平台默认定义了多种 filter 类型，例如 text、number-range、date-range 等等。

示例代码如下：
```js
exports.grid = {
    columns: [
        {name: 'name', filter: 'text', header: '名字' },
        {name:'code', filter: 'number-range'},
        {name: 'birthday', filter: 'date-range', header: '生日'},
        {name:'email', filter: 'text'}
    ]
};
```

示例代码定义了列表页面展示字段对应的过滤组件的样式和类型，name 字段的过滤组件为文本框；</br>
code 字段的过滤组件为两个数字输入框，分别用来填写过滤条件中的最小值和最大值；</br>
birthday 字段的过滤组件为两个日期选择器，分别用来选择最小时间和最大时间；</br>
email 字段的过滤组件为文本框。

**要了解更多 filter 取值类型请参考API文档**