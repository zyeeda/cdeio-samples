package com.zyeeda.cdeio.example.scaffold.field.entity;

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

import com.zyeeda.cdeio.commons.base.entity.TreeNodeRevisionDomainEntity;

@Entity
@Table(name = "CDE_FIELD_TAG")
@Scaffold("/scaffold/field/tag")
public class FieldTag extends TreeNodeRevisionDomainEntity implements TreeNode<FieldTag> {

	/**
	 * 
	 */
	private static final long serialVersionUID = 8687653459817887084L;

	private String name = null;

	private String desc = null;
	
	private FieldTag parent = null;
	
	private List<FieldTag> children = null;
	
	private List<FieldTodo> todos = null;
	
	@Column(name = "F_NAME",length = 30)
	@NotNull
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	@Column(name = "F_DESC",length = 260)
	public String getDesc() {
		return desc;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}
	
	@OneToMany(mappedBy = "tag")
	public List<FieldTodo> getTodos() {
		return todos;
	}
	public void setTodos(List<FieldTodo> todos) {
		this.todos = todos;
	}
	@ManyToOne
	@JoinColumn(name = "F_PARENT")
	public FieldTag getParent() {
		return parent;
	}
	public void setParent(FieldTag parent) {
		this.parent = parent;
	}
	@OneToMany(mappedBy = "parent")
	public List<FieldTag> getChildren() {
		return children;
	}
	public void setChildren(List<FieldTag> children) {
		this.children = children;
	}
	

}
