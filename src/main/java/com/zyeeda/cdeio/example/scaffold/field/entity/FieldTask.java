package com.zyeeda.cdeio.example.scaffold.field.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.zyeeda.cdeio.commons.annotation.scaffold.Scaffold;
import com.zyeeda.cdeio.commons.base.entity.DomainEntity;

@Entity
@Table(name = "SA_FIELD_TASK")
@Scaffold("/scaffold/field/task")
public class FieldTask extends DomainEntity{
    
    /**
     * 
     */
    private static final long serialVersionUID = 3438285372669992300L;

    private String name;
    
    private String description;
    
    private FieldUser fieldUser;

    @Column(name = "F_NAME")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(name = "F_DESCRIPTION")
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @ManyToOne
    @JoinColumn(name = "F_USER_ID")
    public FieldUser getFieldUser() {
        return fieldUser;
    }

    public void setFieldUser(FieldUser fieldUser) {
        this.fieldUser = fieldUser;
    }

    
}
