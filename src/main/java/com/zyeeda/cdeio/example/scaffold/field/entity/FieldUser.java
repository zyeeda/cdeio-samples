package com.zyeeda.cdeio.example.scaffold.field.entity;


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
@Table(name = "SA_FIELD_USER")
@Scaffold("/scaffold/field/user")
public class FieldUser extends DomainEntity {

	/**
	 *
	 */
	private static final long serialVersionUID = 6898416211679620796L;
	private String name;
	private String code;
	private Date birthday;
	private String email;
	private List<FieldTodo> todos;

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

	@ManyToMany
	@JoinTable(name = "ZDA_FIELD_TODO_USER",
	joinColumns=@JoinColumn(name = "F_USER_ID"),
	inverseJoinColumns = @JoinColumn(name = "F_TODO_ID"))
	public List<FieldTodo> getTodos() {
		return todos;
	}
	public void setTodos(List<FieldTodo> todos) {
		this.todos = todos;
	}

}
