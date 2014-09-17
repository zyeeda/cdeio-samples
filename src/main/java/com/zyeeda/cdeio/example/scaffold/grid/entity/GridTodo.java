package com.zyeeda.cdeio.example.scaffold.grid.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.zyeeda.cdeio.commons.annotation.scaffold.Scaffold;
import com.zyeeda.cdeio.commons.base.entity.DomainEntity;

@Entity
@Table(name = "CDE_GRID_TODO")
@Scaffold("/scaffold/grid/todo")
public class GridTodo extends DomainEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 5666868342090908642L;
	
	private String name;
	
	private String desc;

	@Column(name = "F_NAME")
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Column(name = "F_DESC")
	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}
	

}
