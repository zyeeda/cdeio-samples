package com.zyeeda.coala.example.scaffold.button.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.NotBlank;

import com.zyeeda.coala.commons.annotation.scaffold.Scaffold;
import com.zyeeda.coala.commons.base.entity.DomainEntity;

/**
 * 自动生成——操作按钮——基础配置
 *
 * $Autuor$
 */

@Entity
@Table(name = "ZED_BASIC_BUTTON")
@Scaffold("/scaffold/button/basic")
public class BasicButton extends DomainEntity{

	/**
	 * 序列化
	 */
	private static final long serialVersionUID = 2742207037318581050L;
	
	/**
	 * 待办事项
	 */
	private String name;
	
	/**
	 * 状态(false:未完成；true:已完成)
	 */
	private Boolean completed;

	@NotBlank
	@Column(name = "F_NAME")
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@NotNull
	@Column(name = "F_COMPLETED")
	public Boolean getCompleted() {
		return completed;
	}

	public void setCompleted(Boolean completed) {
		this.completed = completed;
	}
	
	
	
}
