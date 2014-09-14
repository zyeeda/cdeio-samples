##Scaffold注解

关于Scaffold注解的用法，请参考下例：

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

@Scaffold标记表示自动生成实体的CURD功能，其参数为对应的scaffold.js文件的路径。<br />
例如本例中@Scaffold("/entity/test")表示实体“ Test ”对应的scaffold.js的路径为“ WEB-INF/app/entity/test.feature/scaffold.js ”。<br />
“ WEB-INF/app/entity/test.feature/scaffold.js ”中，“ WEB-INF/app/ ”为固定路径，“ entity/test.feature/ ”为@Scaffold注解的配置值（即"/entity/test"）加“.feature ”,“ scaffold.js ”为固定文件名称。

