package com.zyeeda.coala.example.entity.entity;

import java.util.Date;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.Range;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.zyeeda.coala.commons.annotation.scaffold.Scaffold;
import com.zyeeda.coala.commons.base.entity.DomainEntity;
import com.zyeeda.coala.commons.resource.entity.Attachment;
import com.zyeeda.coala.validation.constraint.NullableSize;
import com.zyeeda.coala.validation.group.Create;

/**
 * Foo.
 * @author chenhaifeng
 */
@Entity
@Table(name = "CDE_FOO")
@Scaffold("/entity/foo")
public class Foo extends DomainEntity {

    /**
     * .
     */
    private static final long serialVersionUID = 8868322496940062099L;

    private String name;
    
    private Integer status;
    
    private Boolean diabled;
    
    private Date createTime;
    
    private String email;
    
    private String description;
    
    private Attachment attachment;

    private Set<Bar> bars;

    @Column(name = "F_NAME", length = 20)
    @NotNull
    @NullableSize(min = 2, max = 20)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(name = "F_STATUS")
    @Range(min = 1, max = 5)
    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    @Column(name = "F_DISABLED")
    @NotNull(groups = Create.class)
    public Boolean getDiabled() {
        return diabled;
    }

    public void setDiabled(Boolean diabled) {
        this.diabled = diabled;
    }

    // @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Column(name = "F_CREATE_TIME")
    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    @Column(name = "F_EMAIL")
    @Email
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Column(name = "F_DESC", length = 2000)
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @OneToMany(mappedBy = "foo")
    public Set<Bar> getBars() {
        return bars;
    }

    public void setBars(Set<Bar> bars) {
        this.bars = bars;
    }

    @ManyToOne
    @JoinColumn(name = "ATTACHMENT_ID")
    public Attachment getAttachment() {
        return attachment;
    }

    public void setAttachment(Attachment attachment) {
        this.attachment = attachment;
    }
}
