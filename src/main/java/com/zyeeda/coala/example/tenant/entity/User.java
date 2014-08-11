package com.zyeeda.coala.example.tenant.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.zyeeda.coala.commons.annotation.scaffold.Scaffold;
import com.zyeeda.coala.commons.base.entity.DomainEntity;

@Entity
@Table(name = "CDE_USER")
@Scaffold("/tenant/user")
public class User extends DomainEntity {
    /**
     * 
     */
    private static final long serialVersionUID = 6061369726942245652L;

    /**
     * 名称.
     */
    private String name;
    
    private String sex;
    
    private Integer age;
    
    private String email;
    
    private String phone;
    
    private String passwd;

    @Column(name = "F_NAME", length = 100)
    public String getName() {
        return this.name;
    }

    public void setName(final String name) {
        this.name = name;
    }
    
    @Column(name = "F_SEX", length = 1)
    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    @Column(name = "F_AGE")
    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    @Column(name = "F_EMAIL", length = 30)
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Column(name = "F_PHONE", length = 15)
    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    @Column(name = "F_PASSWD", length = 30)
    public String getPasswd() {
        return passwd;
    }

    public void setPasswd(String passwd) {
        this.passwd = passwd;
    }
    
}
