package com.zyeeda.cdeio.example.scaffold.form.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Column;
import javax.persistence.Entity;


import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.zyeeda.cdeio.validation.constraint.NullableSize;

import org.hibernate.validator.constraints.Email;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.zyeeda.cdeio.commons.annotation.scaffold.Scaffold;
import com.zyeeda.cdeio.commons.base.entity.DomainEntity;

@Entity
@Table(name = "CDE_FORM_USER")
@Scaffold("/scaffold/form/user")
public class FormUser extends DomainEntity {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 6318193272637340676L;
	private String name;
	private String sex;
	private Date birthday;
	private String email;
	private List<FormTodo> todos;
	
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
	public String getSex() {
		return sex;
	}
	public void setSex(String code) {
		this.sex = code;
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
	
	@ManyToMany
	@JoinTable(name = "ZED_FORM_TODO_USER",
	joinColumns=@JoinColumn(name = "F_TODO_ID"),
	inverseJoinColumns = @JoinColumn(name = "F_USER_ID"))
	public List<FormTodo> getTodos() {
		return todos;
	}
	public void setTodos(List<FormTodo> todos) {
		this.todos = todos;
	}
	
	
	
	

}
