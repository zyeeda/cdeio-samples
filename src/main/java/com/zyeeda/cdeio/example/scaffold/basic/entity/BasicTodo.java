package com.zyeeda.cdeio.example.scaffold.basic.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.zyeeda.cdeio.commons.annotation.scaffold.Scaffold;
import com.zyeeda.cdeio.commons.base.entity.DomainEntity;
@Entity
@Table(name = "SA_BASIC_TODO")
@Scaffold("/scaffold/basic/basic-todo")
public class BasicTodo extends DomainEntity {

	/**
	 *
	 */
	private static final long serialVersionUID = -7657500001696748426L;
	private String name ;
	private String description ;

	@Column(name = "F_NAME",length=60)
	@NotNull
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Column(name ="F_DESCRIPTION",length=350)
	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
