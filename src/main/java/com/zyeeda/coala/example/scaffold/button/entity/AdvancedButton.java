package com.zyeeda.coala.example.scaffold.button.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.validator.constraints.NotBlank;

import com.zyeeda.coala.commons.annotation.scaffold.Scaffold;
import com.zyeeda.coala.commons.base.entity.DomainEntity;

/**
 * 自动生成——操作按钮——高级配置
 *
 * $Autuor$
 */

@Entity
@Table(name = "ZED_ADVANCED_BUTTON")
@Scaffold("/scaffold/button/advanced")
public class AdvancedButton extends DomainEntity{

	/**
	 * 序列化
	 */
	private static final long serialVersionUID = -9131527242940537619L;
	
	/**
	 * 待办事项
	 */
	private String name;
	
	/**
	 * 状态(1:未完成；2:进行中；3:已完成)
	 */
	private String status;

	@NotBlank
	@Column(name = "F_NAME")
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@NotBlank
	@Column(name = "F_STATUS")
	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}
