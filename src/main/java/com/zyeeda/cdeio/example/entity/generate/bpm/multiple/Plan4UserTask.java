package com.zyeeda.cdeio.example.entity.generate.bpm.multiple;

import javax.persistence.Entity;
import javax.persistence.Table;

import com.zyeeda.cdeio.bpm.entity.BpmDomainEntity;
import com.zyeeda.cdeio.commons.annotation.scaffold.Scaffold;

@Entity
@Table(name = "CDE_GENERATE_BPM_MULTIPLE_USERTASK")
@Scaffold("/generate/bpm/multiple/userTask")
public class Plan4UserTask extends BpmDomainEntity {

    private static final long serialVersionUID = 4653079620355710257L;
    
    private String  name = null;
    private Integer money = null;
    private Integer cycle = null;
    private String  planner = null;
	private String  description = null;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Integer getMoney() {
		return money;
	}
	public void setMoney(Integer money) {
		this.money = money;
	}
	public Integer getCycle() {
		return cycle;
	}
	public void setCycle(Integer cycle) {
		this.cycle = cycle;
	}
	public String getPlanner() {
		return planner;
	}
	public void setPlanner(String planner) {
		this.planner = planner;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

}
