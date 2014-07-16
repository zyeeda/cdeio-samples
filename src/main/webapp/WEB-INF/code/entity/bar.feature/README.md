##Bean Validator

Hibernate验证注解

注解

 适用类型

 说明

 示例

 

@Pattern

 String

 通过正则表达式来验证字符串

 @attern(regex=”[a-z]{6}”)

 

@Length

 String

 验证字符串的长度

 @length(min=3,max=20)

 

@Email

 String

 验证一个Email地址是否有效

 @email

 

@Range

 Long

 验证一个整型是否在有效的范围内

 @Range(min=0,max=100)

 

@Min

 Long

 验证一个整型必须不小于指定值

 @Min(value=10)

 

@Max

 Long

 验证一个整型必须不大于指定值

 @Max(value=20)

 

@Size

 集合或数组

 集合或数组的大小是否在指定范围内

 @Size(min=1,max=255)
