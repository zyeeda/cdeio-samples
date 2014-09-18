package com.zyeeda.cdeio.example.extension.service.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;

import com.zyeeda.cdeio.commons.annotation.scaffold.Scaffold;
import com.zyeeda.cdeio.commons.base.entity.DomainEntity;
import com.zyeeda.cdeio.validation.constraint.NullableSize;

/**
 * 扩展->服务->基础 实体.
 * @author shupeipei
 *
 */
@Entity
@Table(name = "CDE_SERVICE_PERSON")
@Scaffold("/extension/service/basic")
public class Person extends DomainEntity {

    private static final long serialVersionUID = 6268558824849242217L;

    /**
     * 姓名.
     */
    private String name;

    /**
     * 密码.
     */
    private String password;

    /**
     * 密码（用于验证）.
     */
    private String password2;

    /**
     * 描述.
     */
    private String description;

    @Column(name = "F_NAME", length = 100)
    public String getName() {
        return this.name;
    }

    public void setName(final String name) {
        this.name = name;
    }

    @Column(name = "F_DESC", length = 2000)
    public String getDescription() {
        return this.description;
    }

    public void setDescription(final String description) {
        this.description = description;
    }

    @Column(name = "F_PASSWORD", length = 60)
    @NotNull
    @NullableSize(min = 6, max = 60)
    public String getPassword() {
        return this.password;
    }

    /**
     * 设置密码.
     * 同时设置校验用密码.
     *
     * @param password 密码
     */
    public void setPassword(final String password) {
        this.password = password;
        this.setPassword2(password);
    }

    @Transient
    @NotNull
    @NullableSize(min = 6, max = 60)
    public String getPassword2() {
        return this.password2;
    }

    public void setPassword2(final String password2) {
        this.password2 = password2;
    }
}