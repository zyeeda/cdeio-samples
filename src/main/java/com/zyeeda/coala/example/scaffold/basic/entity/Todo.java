package com.zyeeda.coala.example.scaffold.basic.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.persistence.ManyToOne;

import com.zyeeda.coala.commons.annotation.scaffold.Scaffold;
import com.zyeeda.coala.commons.base.entity.DomainEntity;

@Entity
@Table(name = "ZED_TODO")
@Scaffold("/scaffold/basic/todo")
public class Todo extends DomainEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 7355937947747365327L;
	private String name ;
	private String description ;
	private Integer status ;
	private User user ;
	
	private List<Tag> tags = null;

	@Column(name = "F_NAME",length=60)
	@NotNull
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	
	@Column(name ="F_DESCRIPTION",length=350)
	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Column(name ="F_STATUS")
	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	@ManyToOne
	@JoinColumn(name = "F_USER")
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@ManyToMany
	@JoinTable(name = "ZED_TODO_TAG",
	joinColumns=@JoinColumn(name = "F_TODO_ID"),
	inverseJoinColumns = @JoinColumn(name = "F_TAG_ID"))
	public List<Tag> getTags() {
		return tags;
	}
	
	public void setTags(List<Tag> tags) {
		this.tags = tags;
	}

	

}
