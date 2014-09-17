package com.zyeeda.cdeio.example.tenant.entity;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.zyeeda.cdeio.commons.base.entity.DomainEntity;

@Entity
@Table(name = "CDE_USER_TENANT")
public class UserTenant extends DomainEntity {

    private static final long serialVersionUID = 6529963201766540930L;

    private User user;
    
    private Tenant tenant;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @ManyToOne
    @JoinColumn(name = "TENANT_ID")
    public Tenant getTenant() {
        return tenant;
    }

    public void setTenant(Tenant tenant) {
        this.tenant = tenant;
    } 
}
