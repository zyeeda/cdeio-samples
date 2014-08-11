package com.zyeeda.coala.example.scaffold.basic.entity;

import java.util.Date;
import java.util.List;
import javax.persistence.OneToMany;
import javax.persistence.Column;
import javax.persistence.Entity;


import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import com.zyeeda.coala.validation.constraint.NullableSize;
import org.hibernate.validator.constraints.Email;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.zyeeda.coala.commons.annotation.scaffold.Scaffold;
import com.zyeeda.coala.commons.base.entity.DomainEntity;

@Entity
@Table(name = "ZED_USER")
@Scaffold("/scaffold/basic/user")
public class BasicUser extends DomainEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 8827847492213047545L;
	private String name;
	private String code;
	
	private Date birthday;
	private String email;
	private List<Todo> todos;
	
	@Column(name = "F_NAME",length = 80)
	@NotNull
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}

	@Column(name = "F_CODE", length = 500)
	@NullableSize(max = 166)
	public String getCode() {
		return code;
	}
	
	public void setCode(String code) {
		this.code = code;
	}
	
	
	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column(name = "F_BIRTHDAY")
	public Date getBirthday() {
		return birthday;
	}
	
	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}
	
	
	@Column(name = "F_EMAIL")
	@Email
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	@OneToMany(mappedBy = "user")
	public List<Todo> getTodos() {
		return todos;
	}
	
	public void setTodos(List<Todo> todos) {
		this.todos = todos;
	}
	
}
