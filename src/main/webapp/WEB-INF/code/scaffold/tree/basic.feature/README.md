本例主要演示如何在页面添加树组件。

 Cdeio 的树组件通过简单的配置就可以实现，并且提供了对树节点的增删改查等功能，可以通过本例的样例体验下树组件的功能。树组件的样例代码如下：

```java
public class BasicTree implements TreeNode<BasicTree> {
    ...
}
```

用树组件展示数据的实体需要实现 `TreeNode<BasicTree> `接口。

```javascript
exports.style = 'tree';

exports.tree = {
    root: '中国'
};
```

scaffold 文件中设置 `style = 'tree'`表示列表将以树状结构展示；`tree` 配置了树状结构的跟节点为“ 中国 ”。

<span class="badge badge-warning">注</span>&nbsp;：根节点只用于页面展示的虚拟节点，如果不需要设置虚拟根节点，则可以去掉 root 配置。更多详细的配置，请参考 API 文档。
