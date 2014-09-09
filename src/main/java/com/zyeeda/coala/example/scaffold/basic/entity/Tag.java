package com.zyeeda.coala.example.scaffold.basic.entity;

import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.Table;
import javax.validation.constraints.NotNull;


import com.zyeeda.coala.commons.annotation.scaffold.Scaffold;
import com.zyeeda.coala.commons.base.entity.DomainEntity;

@Entity
@Table(name = "CDE_TAG")
@Scaffold("/scaffold/basic/tag")
public class Tag extends DomainEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = -4148324734250369105L;

	private String name = null;

	private String desc = null;

	
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
	
}
