##报表(自定义参数)

birt 报表可以支持设计通过参数查询数据的功能，但原生的修改参数界面与系统整体风格并不太协调，因此系统提供了通过自定义参数界面来替代原生界面的功能。

###1. 自定义参数界面

此功能需要了解自定义视图功能的使用方法，请参照 [扩展->界面->自定义表单视图](#feature/extension/ui/scaffold:custom-form)

以下是系统提供参考的报表参数设置界面的 view 内容：

```javascript
// app/commons/report-params.feature/feature.js
define({
    layout: {
        regions: {
            params: 'params'
        }
    },

    views: [{
        name: 'params',
        region: 'params'
    }]
});
```

```javascript
// app/commons/report-params.feature/views/params.js
define({
    type: 'form-view',
    formName: 'params',
    labelOnTop: true,
    avoidLoadingHandlers: true,
    size: 'small',

    fieldGroups: {
        countryGroup: [
            {name: 'country', label: 'Country', type: 'dropdown', defaultValue: 'USA',
                source: [
                    {id: 'USA', text: 'USA'},
                    {id: 'Belgium', text: 'Belgium'},
                    ...
                ]
            }
        ]
    },
    form: {
        groups: {name: 'countryGroup'}
    }
});
```

```javascript
// app/commons/report-params.feature/templates.html
{{#layout}}
    <div id="params"></div>
{{/layout}}
```

就像你所想的，加载以上 feature，并将 params 这个 view 用弹出框的方式加载的话，会自动生成与其它菜单的新增与编辑表单风格完全一样的界面。

###2. 配置自定义参数

可能有报表的参数设置界面一样，但是肯定会有不一样的，这时便需要配置每个报表需要使用的参数设置表单是哪一个。做法是在前台 `config.js` 文件中加入以下配置：

```javascript
define({
    ...
    reportParams: {
        'birt-examples/custom-params': {paramViewName: 'params', defaultParams: {country: 'USA'}},
        'birt-examples/params': {defaultParams: {country: 'USA'}}
    },
    ...
});
```

reportParams 是一个 object 格式，key 的值为报表的路径，value 是 object 格式，里面可以配置 `paramViewName` (设置使用 `参数设置` 功能时调用写在 `app/commons/report-params.feature/feature.js` 中的 view 名称，view 需)和 `defaultParams` (报表加载时就会传入的默认参数，可以设置多个)。以上代码在调用 `birt-examples/custom-params` 报表时使用 参数设置 功能便会调用上一步骤中所写的带有 Country 下拉框的 view。
