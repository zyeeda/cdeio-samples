package com.zyeeda.coala.example.extension.service.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import com.zyeeda.coala.commons.annotation.scaffold.Scaffold;
import com.zyeeda.coala.commons.base.entity.DomainEntity;

/**
 * 扩展->服务->sql查询 实体.
 * @author shupeipei
 *
 */
@Entity
@Table(name = "CDE_SERVICE_TASK")
@Scaffold("/extension/service/sqlquery")
public class Task extends DomainEntity {

    private static final long serialVersionUID = -2284397820525276873L;

    /**
     * 名称.
     */
    private String name;

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
}
