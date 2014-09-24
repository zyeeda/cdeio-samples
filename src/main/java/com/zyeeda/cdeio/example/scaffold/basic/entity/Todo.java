package com.zyeeda.cdeio.example.scaffold.basic.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.zyeeda.cdeio.commons.annotation.scaffold.Scaffold;
import com.zyeeda.cdeio.commons.base.data.TreeNode;
import com.zyeeda.cdeio.commons.base.entity.DomainEntity;


@Entity
@Table(name = "SA_TODO")
@Scaffold("/scaffold/basic/todo")
public class Todo extends DomainEntity implements TreeNode<Todo> {

	/**
	 *
	 */
	private static final long serialVersionUID = 7355937947747365327L;
	private String name ;
	private String description ;

	private BasicUser basicUser ;
	private Todo parent ;
	private List<Todo> children = new ArrayList<Todo>() ;



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

	@ManyToOne
	@JoinColumn(name = "F_PARENT_ID")
	public Todo getParent() {
		return parent;
	}

	public void setParent(Todo parent) {
		this.parent = parent;
	}

	@OneToMany(mappedBy = "parent")
	public List<Todo> getChildren() {
		return children;
	}

	public void setChildren(List<Todo> children) {
		this.children = children;
	}

	@ManyToOne
	@JoinColumn(name = "F_BASICUSER")
	public BasicUser getBasicUser() {
		return basicUser;
	}

	public void setBasicUser(BasicUser basicUser) {
		this.basicUser = basicUser;
	}



}
