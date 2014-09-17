package com.zyeeda.cdeio.example.tenant.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.zyeeda.cdeio.commons.annotation.scaffold.Scaffold;
import com.zyeeda.cdeio.commons.base.entity.DomainEntity;

@Entity
@Table(name = "CDE_TENANT")
@Scaffold("/tenant/tenant")
public class Tenant extends DomainEntity {

    private static final long serialVersionUID = -5800560027265954089L;
    
    private String dataId;

    private String type;

    @Column(name = "F_TYPE", length = 30)
    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Column(name = "F_DATA_ID", length = 40)
    public String getDataId() {
        return dataId;
    }

    public void setDataId(String dataId) {
        this.dataId = dataId;
    }
}
