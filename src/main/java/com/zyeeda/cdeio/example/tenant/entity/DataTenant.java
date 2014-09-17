package com.zyeeda.cdeio.example.tenant.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.zyeeda.cdeio.commons.base.entity.DomainEntity;

@Entity
@Table(name = "CDE_DATA_TENANT")
public class DataTenant extends DomainEntity {

    private static final long serialVersionUID = -2322334909170543063L;

    private String dataId;

    private Tenant tenant;
    
    private String dataType;

    @Column(name = "F_DATA_ID", length = 40)
    public String getDataId() {
        return dataId;
    }

    public void setDataId(String dataId) {
        this.dataId = dataId;
    }

    @ManyToOne
    @JoinColumn(name = "TENANT_ID")
    public Tenant getTenant() {
        return tenant;
    }

    public void setTenant(Tenant tenant) {
        this.tenant = tenant;
    }

    @Column(name = "F_DATA_TYPE", length = 100)
    public String getDataType() {
        return dataType;
    }

    public void setDataType(String dataType) {
        this.dataType = dataType;
    }
    
    
}
