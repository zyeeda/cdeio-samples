package com.zyeeda.coala.example.extension.ui.form.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.zyeeda.coala.commons.annotation.scaffold.Scaffold;
import com.zyeeda.coala.commons.base.entity.DomainEntity;

/**
 * 扩展/界面/基础类
 *
 */

@Entity
@Table(name = "ES_UI_BASIC")
@Scaffold("/extension/ui/basic")
public class UiBasic extends DomainEntity{
	 /**
	 * 序列化
	 */
	private static final long serialVersionUID = 1425258996795186844L;

	/**
     * 名称.
     */
    private String name;

    /**
     * 描述.
     */
    private String description;
    
    /**
     * 状态(1:好；2：坏)
     */
    private String status;
    
    /**
     * 关联回调
     */
    private CallBack callBack;
    
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
	
	@ManyToOne
	@JoinColumn(name = "F_CALL_BACK_ID")
	public CallBack getCallBack() {
		return callBack;
	}

	public void setCallBack(CallBack callBack) {
		this.callBack = callBack;
	}
	@Column(name = "F_STATUS", length = 100)
	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	} 
}
