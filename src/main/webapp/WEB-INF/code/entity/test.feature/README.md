本例主要演示 `@Scaffold` 注解的用法。

`@Scaffold` 注解主要有以下三个作用：

1. 映射 **scaffold.js** 自动生成 CRUD 功能；
2. 生成后端请求路径；
3. 生成前端路由地址。

~~~ javascript
@Entity
@Table(name = "CDE_TEST")
@Scaffold("/entity/test")
public class Test extends DomainEntity {
    ......
}
~~~

通过本例 `@Scaffold("/entity/test")` 的配置，系统会自动实现如下功能：

1. 实体 `Test` 会映射 _WEB-INF/app/entity/test.feature/scaffold.js_ 自动生成 CRUD 功能；
2. 生成后端请求路径，本例中访问 _https://localhost:7000/cdeio-examples/invoke/scaffold/entity/test_ 会返回 `Test` 实体的 Json 格式列表数据；
3. 生成前端路由地址，本例中访问 _https://localhost:7000/cdeio-examples/#feature/entity/scaffold:test_ 可以查看到实体 `Test` 的功能页面，其中 `#` 后面的部分就是前端路由的地址。

