package com.zyeeda.coala.example.scaffold.field.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.zyeeda.coala.commons.annotation.scaffold.Scaffold;
import com.zyeeda.coala.commons.base.entity.DomainEntity;
@Entity(name="ScaffoldProject")
@Table(name = "ZED_FIELD_Project")
@Scaffold("/scaffold/field/project")
public class Project extends DomainEntity {

	/**
	 *
	 */
	private static final long serialVersionUID = 786804234696017100L;
	private String name;
	private List<FieldTodo> fieldTodos;
	@Column(name = "F_NAME",length = 80)
	@NotNull
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	@OneToMany(mappedBy = "project")
	public List<FieldTodo> getFieldTodos() {
		return fieldTodos;
	}
	public void setFieldTodos(List<FieldTodo> fieldTodos) {
		this.fieldTodos = fieldTodos;
	}

}
