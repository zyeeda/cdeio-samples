package com.zyeeda.coala.example.extension.ui.form.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.zyeeda.coala.commons.annotation.scaffold.Scaffold;
import com.zyeeda.coala.commons.base.entity.DomainEntity;

/**
 * 扩展/界面/路由类
 *
 */

@Entity
@Table(name = "ES_UI_ROUTER")
@Scaffold("/extension/ui/router")
public class Router extends DomainEntity{

	/**
	 * 序列化
	 */
	private static final long serialVersionUID = 3469770779336376736L;
	
	/**
     * 名称.
     */
    private String name;
    
    /**
	 *申请时间
	 */
	private Date applyTime;
	
	/**
	 *申请人
	 */
	private String applicant;

    /**
     * 描述.
     */
    private String description;
    
    @Column(name = "F_NAME", length = 100)
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	@Column(name = "F_DESC", length = 2000)
	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	@Temporal(TemporalType.DATE)
	@Column(name = "F_APPLY_TIME")
	public Date getApplyTime() {
		return applyTime;
	}

	public void setApplyTime(Date applyTime) {
		this.applyTime = applyTime;
	}
	
	@Column(name = "F_APPLICANT", length = 100)
	public String getApplicant() {
		return applicant;
	}

	public void setApplicant(String applicant) {
		this.applicant = applicant;
	} 
}
