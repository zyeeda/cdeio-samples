package com.zyeeda.coala.example.extension.service.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.GenericGenerator;

import org.hibernate.validator.constraints.NotBlank;

import com.zyeeda.coala.commons.annotation.scaffold.Scaffold;
import com.zyeeda.coala.commons.base.entity.DomainEntity;
import com.zyeeda.coala.validation.constraint.NullableSize;

/**
 * 扩展->服务->基础(高级)实体.
 * @author shupeipei
 *
 */
@Entity
@Table(name = "ZES_PERSON")
@Scaffold({"/extension/service/basic", "/extension/service/advance"})
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
