package com.zyeeda.coala.example.entity.generate.bpm.gateway;

import javax.persistence.Entity;
import javax.persistence.Table;

import com.zyeeda.coala.bpm.entity.BpmDomainEntity;
import com.zyeeda.coala.commons.annotation.scaffold.Scaffold;

@Entity
@Table(name = "CDE_GENERATE_BPM_GATEWAY_EXCLUSIVE")
@Scaffold("/generate/bpm/gateway/exclusive")
public class Employee4Exclusive extends BpmDomainEntity {

    private static final long serialVersionUID = 4653079620355710257L;

    private String  name = null;
    private Integer age = null;
    private String  sex = null;
    private String  phone = null;
    private Integer workingLife = null;
    private String  address = null;
	private String  description = null;

    public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    
	public Integer getWorkingLife() {
		return workingLife;
	}

	public void setWorkingLife(Integer workingLife) {
		this.workingLife = workingLife;
	}
	
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}
