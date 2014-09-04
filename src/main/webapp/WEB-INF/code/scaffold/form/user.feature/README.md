##自动生成表单

业务系统中通常会有自式各样的表单，也有相当一部分功能的表单是比较简单的，这里主要讲简单表单的配置方法。


一个表单由多个分组组成，一个分组由多个字段组成，通过对表单包含分组和一些附加配置，即可得到需要的自动生成的表单。如果新增、编辑与查看表单布局完全一样，则只需要一个 `defaults` 即可。关于 form 表单的配置写在 `scaffold.js` 的 `exports.forms` 中。

```javascript
exports.forms = {
    defaults: {
        groups: [{name: 'defaults', columns: 2}],
        size: 'large'
    }
};
```

** 注：关于 form 的更多配置请查阅 api 文档 **

如果新增与编辑表单一样，而查看表单则是个性化的，则只需要另外再加一个 `show` 即可，示例代码如下：

```javascript
exports.forms = {
    defaults: {
        ...
    },
    show: {
        ...
    }
};
```

如果新增、编辑与查看表单都不一样，则可以完全分开配置，系统会自动根据配置生成各自需要的表单，示例代码如下：

```javascript
exports.forms = {
    add: {
        ...
    },
    edit: {
        ...
    },
    show: {
        ...
    }
};
```
