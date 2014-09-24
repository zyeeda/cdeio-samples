package com.zyeeda.cdeio.example.scaffold.button.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.validator.constraints.NotBlank;

import com.zyeeda.cdeio.commons.annotation.scaffold.Scaffold;
import com.zyeeda.cdeio.commons.base.entity.DomainEntity;

/**
 * 自动生成——操作按钮
 *
 * $Autuor$
 */

@Entity
@Table(name = "SA_SCAFFOLD_OPERATE_BUTTON")
@Scaffold("/scaffold/button/basic")
public class OperateButton extends DomainEntity{

	/**
	 * 序列化
	 */
	private static final long serialVersionUID = -9131527242940537619L;

	/**
	 * 名称
	 */
	private String name;

	/**
	 * 描述
	 */
	private String description;

	@NotBlank
	@Column(name = "F_NAME")
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@NotBlank
	@Column(name = "F_DESCRIPTION")
	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
