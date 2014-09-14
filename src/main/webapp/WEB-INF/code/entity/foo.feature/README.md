

## JPA

###1. 实体基类继承
实体应继承自 DomainEntity 类，或是 DomainEntity 的子类，因为DomainEntity中已经定义了id属性。关于更多详细基类介绍，请查询 API。

###2. JPA注解
平台基于JPA开发规范，因此支持所有JPA注解，推荐把注解放在方法而非属性上。
JAP注解的详细配置说明请参照`http://docs.jboss.org/hibernate/jpa/2.1/api/`。


【注意】对于只做展示而不需要存储到数据库的字段，应该在其上加@Transient注解。



 