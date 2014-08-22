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
 * 扩展/界面/自定义表单类
 *
 */

@Entity
@Table(name = "ES_UI_CUSTOM_FORM")
@Scaffold("/extension/ui/custom-form")
public class CustomForm extends DomainEntity{

	/**
	 * 序列化
	 */
	private static final long serialVersionUID = -273906429887612959L;
	
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
    
    /**
     * 主表（外观）
     */
    private Boolean mainAppearance;
    
    /**
     * 主表（备注）
     */
    private String mainRemark;
    
    /**
     * 副表（外观）
     */
    private Boolean auxAppearance;
    
    /**
     * 副表（备注）
     */
    private String auxRemark;
    
    
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
	
	@Column(name = "F_MAIN_APPEARANCE", length = 100)
	public Boolean getMainAppearance() {
		return mainAppearance;
	}

	public void setMainAppearance(Boolean mainAppearance) {
		this.mainAppearance = mainAppearance;
	}
	
	@Column(name = "F_AUX_APPEARANCE", length = 100)
	public Boolean getAuxAppearance() {
		return auxAppearance;
	}

	public void setAuxAppearance(Boolean auxAppearance) {
		this.auxAppearance = auxAppearance;
	}
	
	@Column(name = "F_MAIN_REMARK", length = 100)
	public String getMainRemark() {
		return mainRemark;
	}

	public void setMainRemark(String mainRemark) {
		this.mainRemark = mainRemark;
	}
	
	@Column(name = "F_AUX_REMARK", length = 100)
	public String getAuxRemark() {
		return auxRemark;
	}

	public void setAuxRemark(String auxRemark) {
		this.auxRemark = auxRemark;
	}
}
