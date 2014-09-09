##Bean Validator

###1. 非空

标记：`@NotNull`

适用类型：所有类型

描述：验证一个字段的值不能为空或空字符串

```java
@NotNull
@Column(name = "F_AGE")
public Integer getAge() {
	return age;
}
```

###2. 非空(字符串)

标记：`@NotBlank`

适用类型：String

描述：验证一个 String 类型字段的值不能为空或空字符串

```java
@NotBlank
@Column(name = "F_MOBILE")
public String getMobile() {
	return mobile;
}
```

###3. 电子邮件

标记：`@Email`

适用类型：String

描述：验证一个 String 类型字段的值是否是一个有效的Email地址

```java
@NotNull
@Email
@Column(name = "F_EMAIL")
public String getEmail() {
	return email;
}
```

###4. 范围(字符串)

标记：`@NullableSize`

适用类型：String

描述：验证一个 String 类型字段的长度是否在 min ~ max 的区间内

```java
@NotBlank
@NullableSize(min = 2, max = 200)
@Column(name = "F_ADDRESS")
public String getAddress() {
	return address;
}
```

###5. 范围(数字)

标记：`@Range`

适用类型：Long、Integer、Double、BigDecimal

描述：验证一个数字类型字段的值是否在 min ~ max 的区间内

```java
@NotNull
@Range(min = 1, max = 100)
@Column(name = "F_AGE")
public Integer getAge() {
	return age;
}
```

###6. 最小值

标记：`@Min`

适用类型：Long、Integer、Double、BigDecimal

描述：验证一个数字类型字段的值必须不小于指定值

```java
@Min(value = 5)
@Column(name = "F_QQ")
public Integer getQq(){
	return qq;
}
```

###7. 最大值

标记：`@Max`

适用类型：Long、Integer、Double、BigDecimal

描述：验证一个数字类型字段的值必须不大于指定值


```java
@Max(value = 11)
@Column(name = "F_QQ")
public Integer getQq(){
	return qq;
}
```
