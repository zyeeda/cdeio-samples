package com.zyeeda.cdeio.example.scaffold.validators.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.zyeeda.cdeio.commons.annotation.scaffold.Scaffold;
import com.zyeeda.cdeio.commons.base.entity.DomainEntity;

@Entity
@Table(name = "CDE_VALIDATORS_USER")
@Scaffold("/scaffold/validators/user")
public class ValidatorsUser extends DomainEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = -1477426345003292601L;
	private String name ;
	private String status;
	
	@Column(name = "F_NAME")
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	
	@Column(name = "F_STATUS")
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}

}
