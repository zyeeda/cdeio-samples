#树

本章主要介绍如何在页面展现树组件，以及树组件简单的配置。

##1. 实体

作为树状结构展示的实体类要实现`TreeNode<T>`接口。

样例代码：

```java
public class BasicTree implements TreeNode<BasicTree> {
    ...
}
```
##2. 数据展现形式 

默认数据都是以列表的形式进行展示，当以树的形式进行展示时，需要将`exports.style`的值设置为`tree`。

样例代码：

```javascript
//显示类型为树
exports.style = 'tree';
```

##3. 树的基础属性

展现一个树状机构，需要配置一个根节点，设定根节点的名称后，一个简单的树就实现了。

样例代码：

```javascript
//树配置
exports.tree = {
    root: '中国'
};
```
**注：根节点只用于页面展示的虚拟节点。更多详细的配置，请参考API文档。**
