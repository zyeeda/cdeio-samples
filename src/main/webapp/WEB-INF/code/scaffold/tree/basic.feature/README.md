##树

此处主要介绍如何让页面以树的形式进行展示，以及如何对树进行简单的配置。

###1. 实体

树的实体类需要实现 `TreeNode<T>` 接口。

```java
import com.zyeeda.coala.commons.base.data.TreeNode;

public class BasicTree implements TreeNode<BasicTree> {
    ...
}
```

###2. 配置页面展示类型

系统页面默认以列表的形式进行展示，如果需要以树的形式进行展示，我们需要将 `exports.style` 的值设置为 `tree`。

```javascript
//显示类型为树
exports.style = 'tree';
```

###3. 扩展基础属性

在树的基础扩展属性配置中，我们可以设置一个根节点，这样一个简单的树就实现了。

```javascript
//树配置
exports.tree = {
    root: '中国'
};
```

根节点是不会存入数据库而只用于页面展示的虚拟节点，

**注：关于树的更多配置，请查阅 api 文档。**
