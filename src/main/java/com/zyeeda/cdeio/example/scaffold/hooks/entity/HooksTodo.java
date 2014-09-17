package com.zyeeda.cdeio.example.scaffold.hooks.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.zyeeda.cdeio.commons.annotation.scaffold.Scaffold;
import com.zyeeda.cdeio.commons.base.entity.DomainEntity;

@Entity
@Table(name = "CDE_HOOKS_TODO")
@Scaffold("/scaffold/hooks/todo")
public class HooksTodo extends DomainEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 8507227033829590458L;
	private String name ;
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
