##Bean Validator

本例主要介绍实体验证相关的配置。

###1. 非空

标记：`@NotNull`

适用类型：所有类型

描述：验证字段的值不能为NULL

```java
@NotNull
@Column(name = "F_AGE")
public Integer getAge() {
	return age;
}
```

例子中age字段的值如果为NULL则无法验证通过。

###2. 非空(字符串)

标记：`@NotBlank`

适用类型：String

描述：验证字符串非NULL，且长度必须大于0 

```java
@NotBlank
@Column(name = "F_MOBILE")
public String getMobile() {
	return mobile;
}
```

例子中mobile字段的值如果为NULL或者长度为0（即空字符串）则无法验证通过。


###3. 电子邮件

标记：`@Email`

适用类型：String

描述：验证字符串格式必须为有效的Email地址

```java
@NotNull
@Email
@Column(name = "F_EMAIL")
public String getEmail() {
	return email;
}
```

例子中email字段的值如果为无效Email格式则无法验证通过。

###4. 范围(字符串)

标记：`@NullableSize`

适用类型：String

描述：验证字符串长度必须在 min 和 max 的区间内

```java
@NotBlank
@NullableSize(min = 2, max = 200)
@Column(name = "F_ADDRESS")
public String getAddress() {
	return address;
}
```

例子中address字段的长度如果不在2和200对应的值区间内则无法验证通过。

###5. 范围(数字)

标记：`@Range`

适用类型：Long、Integer、Double、BigDecimal

描述：验证数字类型字段的值必须在 min 和 max 的区间内

```java
@NotNull
@Range(min = 1, max = 100)
@Column(name = "F_AGE")
public Integer getAge() {
	return age;
}
```

例子中age字段的值如果不在1和100之间则无法验证通过。

###6. 最小值

标记：`@Min`

适用类型：Long、Integer、Double、BigDecimal

描述：验证字段必须是一个数字，其值必须大于等于指定的最小值  

```java
@Min(value = 5)
@Column(name = "F_QQ")
public Integer getQq(){
	return qq;
}
```

例子中qq字段如果的值小于5则无法验证通过。

###7. 最大值

标记：`@Max`

适用类型：Long、Integer、Double、BigDecimal

描述：验证字段必须是一个数字，其值必须小于等于指定的最大值  

```java
@Max(value = 11)
@Column(name = "F_QQ")
public Integer getQq(){
	return qq;
}
```

例子中qq字段如果的值大于11则无法验证通过。

**如果需要了解更多实体验证配置，请查询API文档。**