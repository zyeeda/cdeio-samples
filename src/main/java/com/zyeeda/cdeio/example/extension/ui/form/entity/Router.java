package com.zyeeda.cdeio.example.extension.ui.form.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.zyeeda.cdeio.commons.annotation.scaffold.Scaffold;
import com.zyeeda.cdeio.commons.base.entity.DomainEntity;

/**
 * 扩展/界面/路由类
 *
 */

@Entity
@Table(name = "CDEIO_UI_ROUTER")
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

}
