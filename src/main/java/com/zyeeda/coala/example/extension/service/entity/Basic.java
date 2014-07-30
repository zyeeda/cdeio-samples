package com.zyeeda.coala.example.extension.service.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import com.zyeeda.coala.commons.annotation.scaffold.Scaffold;

/**
 * Test类.
 * @author chenhaifeng
 *
 */
@Entity
@Table(name = "ES_BASIC")
@Scaffold("/extension/service/basic")
public class Basic implements Serializable {

    private static final long serialVersionUID = 6268558824849242217L;

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

    /**
     * 唯一标识.
     */
    private String id;

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "com.zyeeda.coala.commons.generator.FallbackUUIDHexGenerator")
    //@GenericGenerator(name = "system-uuid", strategy = "uuid2")
    @Column(name = "F_ID")
    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
