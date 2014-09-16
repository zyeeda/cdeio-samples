##Scaffold注解

本例主要演示 @Scaffold 的用法。

@Scaffold 主要有三个作用：
第一，映射 scaffold.js 自动生成 CRUD 功能;
第二，生成后台请求路径；
第三，生成前端路由地址。

示例代码如下：

```javascript
/**
* Test类.
* @author chenhaifeng
*
*/
@Entity
@Table(name = "CDE_TEST")
@Scaffold("/entity/test")
public class Test extends DomainEntity {
......
}
```

通过本例 @Scaffold("/entity/test") 配置，实体 Test 会映射 “ WEB-INF/app/entity/test.feature/scaffold.js ”自动生成CRUD功能；</br>生成后台请求路径，本例中访问 https://localhost:7000/coala-examples/invoke/scaffold/entity/test 会返回 Test 实体的 Json 格式列表数据；</br>
自动生成路由地址，本例中访问 https://localhost:7000/coala-examples/#feature/entity/scaffold:test 可以查看到实体 Test 的功能页面。


