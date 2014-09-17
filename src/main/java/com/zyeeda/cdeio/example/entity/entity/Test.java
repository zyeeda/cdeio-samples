package com.zyeeda.cdeio.example.entity.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.zyeeda.cdeio.commons.annotation.scaffold.Scaffold;
import com.zyeeda.cdeio.commons.base.entity.DomainEntity;

/**
 * Test类.
 * @author chenhaifeng
 *
 */
@Entity
@Table(name = "CDE_TEST")
@Scaffold("/entity/test")
public class Test extends DomainEntity {

    /**
     * 序列化版本 UID.
     */
    private static final long serialVersionUID = -4335705573994524048L;

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
