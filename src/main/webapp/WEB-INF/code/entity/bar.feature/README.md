### Bean Validator

#### ——Hibernate验证注解

****

1. ##### 标题：@NotNull
    
   ##### 注解：`@NotNull`

   ##### 适用类型：所有类型

   ##### 说明：验证一个字段的值不能为空或空字符串

		@NotNull
		@Column(name = "F_AGE")
		public Integer getAge() {
			return age;
		}

2. ##### 标题：@NotBlank
    
   ##### 注解：`@NotBlank`

   ##### 适用类型：String

   ##### 说明：验证一个 String 类型字段的值不能为空或空字符串

		@NotBlank
		@Column(name = "F_MOBILE")
		public String getMobile() {
			return mobile;
		}

3. ##### 标题：@NullableSize

   ##### 注解：`@NullableSize`

   ##### 适用类型：String

   ##### 说明：验证一个 String 类型字段的长度是否在 min ~ max 的区间内

		@NotBlank
		@NullableSize(min = 2, max = 200)
		@Column(name = "F_ADDRESS")
		public String getAddress() {
			return address;
		}

4. ##### 标题：@Email

   ##### 注解：`@Email`

   ##### 适用类型：String

   ##### 说明：验证一个 String 类型字段的值是否是一个有效的Email地址

		@NotNull
	    @Email
	    @Column(name = "F_EMAIL")
		public String getEmail() {
			return email;
		}

5. ##### 标题: @Range
   
   ##### 注解：`@Range`

   ##### 适用类型：Long、Integer、Double、BigDecimal

   ##### 说明：验证一个数字类型字段的值是否在 min ~ max 的区间内

		@NotNull
		@Range(min = 1, max = 100)
		@Column(name = "F_AGE")
		public Integer getAge() {
			return age;
		}

6. ##### 标题：@Min

   ##### 注解：`@Min`

   ##### 适用类型：Long、Integer、Double、BigDecimal

   ##### 说明：验证一个数字类型字段的值必须不小于指定值

		@Min(value = 5)
		@Column(name = "F_QQ")
		public Integer getQq(){
			return qq;
		}
 
7. ##### 标题：@Max
  
   ##### 注解：`@Max`

   ##### 适用类型：Long、Integer、Double、BigDecimal

   ##### 说明：验证一个数字类型字段的值必须不大于指定值

		@Max(value = 11)
		@Column(name = "F_QQ")
		public Integer getQq(){
			return qq;
		}