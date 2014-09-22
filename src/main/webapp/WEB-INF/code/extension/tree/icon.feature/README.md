本例主要介绍如何给树的节点加自定义图标。

平台提供了给树的节点配置图标的功能，针对不同的节点可以添加不同的图标。具体的添加步骤如下：

### 1.在后端 scaffold.js 文件中定义树
```javascript
exports.enableFrontendExtension = true;
exports.tree = {
    isAsync: true,
    root: '中国',
    rootNodeSetting: {
        iconSkin: 'countryNode',
        nocheck: true
    },
    defaultOrder: 'name-asc'
};
```
示例是在后端 scaffold.js 文件中定义一个树，该树的根节点叫 “ 中国 ” 的树。`enableFrontendExtension = true` 表示该树允许来自前端的扩展。

### 2.自定义 service.js 并重写 list 方法
```javascript
exports.createService = function () {
    return {
        list: mark('beans', EntityMetaResolver).mark('tx').on(function(resolver, entity, options) {
                ···
                if (iconTree.type === '省级节点') {
                    iconTree.iconSkin = 'countryNode';
                } else if (iconTree.type === '市级节点') {
                    iconTree.iconSkin = 'cityNode';
                } else if (iconTree.type === '县级节点') {
                    iconTree.iconSkin = 'countyNode';
                }
                ···
        })
    };
};
```
示例是在自定 service.js 文件中重写了 list 方法，并且根据 list 中数据的 `type` 类型给 `iconSkin` 设置不同的自定义图标。

### 3.公共 css 文件中引入树形结构样式
```css
.countryNode_ico_close, .countryNode_ico_open, .countryNode_ico_docu, .provinceNode_ico_close, .provinceNode_ico_open, .provinceNode_ico_docu, .cityNode_ico_close, .cityNode_ico_open, .cityNode_ico_docu, .countyNode_ico_close, .countyNode_ico_open, .countyNode_ico_docu{
  background-image: url("../images/country_tree_icons.png") !important;
  margin-right: 2px !important;
  vertical-align: top;
}
.countryNode_ico_close, .countryNode_ico_open, .countryNode_ico_docu {
  background-position: 0 0px !important;
}
.provinceNode_ico_close, .provinceNode_ico_open, .provinceNode_ico_docu {
  background-position: 0 -16px !important;
}
.cityNode_ico_close, .cityNode_ico_open, .cityNode_ico_docu {
  background-position: 0 -32px !important;
}
.countyNode_ico_close, .countyNode_ico_open, .countyNode_ico_docu {
  background-position: 0 -64px !important;
}
```
在公共 css 样式文件中引入以上样式。