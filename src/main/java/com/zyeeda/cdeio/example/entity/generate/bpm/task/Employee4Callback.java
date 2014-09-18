package com.zyeeda.cdeio.example.entity.generate.bpm.task;

import javax.persistence.Entity;
import javax.persistence.Table;

import com.zyeeda.cdeio.bpm.entity.BpmDomainEntity;
import com.zyeeda.cdeio.commons.annotation.scaffold.Scaffold;

@Entity
@Table(name = "CDE_GENERATE_BPM_TASK_CALLBACK")
@Scaffold("/generate/bpm/task/callback")

public class Employee4Callback extends BpmDomainEntity {

    private static final long serialVersionUID = 4653079620355710257L;

    private String  name = null;
    private Integer age = null;
    private String  sex = null;
    private String  phone = null;
    private String  address = null;

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

	private String description = null;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}