本例主要介绍 JPA 在平台中的用法。

平台基于 JPA 开发规范，因此支持所有 JPA 注解，推荐把注解写在 get 方法上而非属性上。关于 JPA 的代码示例可以查看本例的“实体”标签页中的代码。
JPA 注解的详细配置说明请参考 _http://docs.jboss.org/hibernate/jpa/2.1/api/_。

平台所有的实体，默认情况下都需要继承 `DomainEntity` 类，此类为平台预定义的实体基类。

<span class="badge badge-warning">注意</span>&nbsp;对于只做展示而不需要存储到数据库的字段，应该在其上加 `@Transient` 注解。

