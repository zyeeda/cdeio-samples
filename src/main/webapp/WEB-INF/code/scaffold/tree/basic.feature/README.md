#树

此处主要介绍如何让页面以树的形式进行展示，以及如何对树进行简单的配置。

##1. 实体

树的实体类需要实现`TreeNode<T>`接口。

样例代码：

```java
public class BasicTree implements TreeNode<BasicTree> {
    ...
}
```
##2. 页面展示类型 `exports.style`

系统页面默认以列表的形式进行展示，如果需要以树的形式进行展示，我们需要将`exports.style`的值设置为`tree`。

样例代码：

```javascript
//显示类型为树
exports.style = 'tree';
```

##3. 树的基础扩展属性`exports.tree`

在树的基础扩展属性中，我们可以配置一个根节点，设定名称后，一个简单的树就实现了。

样例代码：

```javascript
//树配置
exports.tree = {
    root: '中国'
};
```
**注：根节点是不会存入数据库而只用于页面展示的虚拟节点，更多详细的配置，请参考API文档。**
