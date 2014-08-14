package com.zyeeda.coala.example.scaffold.form.entity;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

import com.zyeeda.coala.commons.annotation.scaffold.Scaffold;
import com.zyeeda.coala.commons.base.entity.DomainEntity;
import com.zyeeda.coala.validation.constraint.NullableSize;

@Entity
@Table(name = "ZED_FORM_PROJECT")
@Scaffold("/scaffold/form/project")
public class FormProject extends DomainEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 3957069632448116353L;
	private String name;
	private String desc;
	private Date startDate;
	private String people;
	private String intro;
	private BigDecimal cost;
	
	
	@Column(name = "F_NAME")
	@NotNull
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
	
	@Column(name = "F_START_DATE")
	@Temporal(TemporalType.DATE)
	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	
	@Column(name = "F_PEOPLE")
	public String getPeople() {
		return people;
	}
	public void setPeople(String people) {
		this.people = people;
	}
	
	@NullableSize(max = 166)
	@Column(name = "F_COST", precision = 23, scale = 2)
	public BigDecimal getCost() {
		return cost;
	}
	public void setCost(BigDecimal cost) {
		this.cost = cost;
	}
	
	@Column(name = "F_INTRO")
	public String getIntro() {
		return intro;
	}
	public void setIntro(String intro) {
		this.intro = intro;
	}

}
