package com.zyeeda.coala.example.scaffold.basic.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import javax.persistence.Table;
import javax.validation.constraints.NotNull;


import com.zyeeda.coala.commons.annotation.scaffold.Scaffold;
import com.zyeeda.coala.commons.base.entity.DomainEntity;

@Entity
@Table(name = "ZED_TAG")
@Scaffold("/scaffold/basic/tag")
public class Tag extends DomainEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = -4148324734250369105L;

	private String name = null;

	private String desc = null;
	
	private List<Todo> todos = null;
	
	@Column(name = "F_NAME",length = 30)
	@NotNull
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}

	@Column(name = "F_DESC",length = 260)
	public String getDesc() {
		return desc;
	}
	
	public void setDesc(String desc) {
		this.desc = desc;
	}
	
	@ManyToMany
	@JoinTable(name = "ZED_TODO_TAG",
	joinColumns=@JoinColumn(name = "F_TAG_ID"),
	inverseJoinColumns = @JoinColumn(name = "F_TODO_ID"))
	public List<Todo> getTodos() {
		return todos;
	}
	
	public void setTodos(List<Todo> todos) {
		this.todos = todos;
	}
	
}
