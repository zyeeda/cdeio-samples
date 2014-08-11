package com.zyeeda.coala.example.scaffold.field.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.zyeeda.coala.commons.annotation.scaffold.Scaffold;
import com.zyeeda.coala.commons.base.entity.DomainEntity;
@Entity
@Table(name = "ZED_FIELD_ACCOUNT")
@Scaffold("/scaffold/field/account")
public class FieldAccount extends DomainEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = -6276106475805187627L;
	
	private String name;
	private String account;
	private String password;
	private String password2;
	private Integer workyear;
	private String creditcard;
	private Double salary;
	private String email;
	private String url;
	
	@Column(name = "F_NAME", length=100)
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	@Column(name = "F_ACCOUNT")
	public String getAccount() {
		return account;
	}
	public void setAccount(String account) {
		this.account = account;
	}
	
	@Column(name = "F_PASSWORD")
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
	@Column(name = "F_YEAR")
	public Integer getWorkyear() {
		return workyear;
	}
	public void setWorkyear(Integer workyear) {
		this.workyear = workyear;
	}
	
	@Column(name = "F_CREDITCARD")
	public String getCreditcard() {
		return creditcard;
	}
	public void setCreditcard(String creditcard) {
		this.creditcard = creditcard;
	}
	
	@Column(name = "F_SALARY")
	public Double getSalary() {
		return salary;
	}
	public void setSalary(Double salary) {
		this.salary = salary;
	}
	
	@Column(name = "F_PASSWORD2")
	public String getPassword2() {
		return password2;
	}
	public void setPassword2(String password2) {
		this.password2 = password2;
	}
	
	@Column(name = "F_EMAIL")
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	@Column(name = "F_URL")
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}	

}
