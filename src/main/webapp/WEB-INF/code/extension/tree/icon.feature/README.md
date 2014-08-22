#扩展树的图标

##1. 配置树的基本属性

首先在`exports.tree`中，为根节点设置好`iconSkin`。

样例代码：
```javascript
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
##2. 覆写`list`方法

在列表加载tree数据时，为每一级节点设置好`iconSkin`属性，以便在页面上展示不同的图标。

样例代码：
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

##3. CSS样式

根据节点的`iconSkin`属性值，通过CSS样式为tree的每一级节点设置不同的`className`的样式，达到展示个性化图标的目的。

样例代码：
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
