package com.zyeeda.cdeio.example.scaffold.field.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.zyeeda.cdeio.commons.annotation.scaffold.Scaffold;
import com.zyeeda.cdeio.commons.base.entity.DomainEntity;

@Entity
@Table(name = "CDE_FIELD_PROJECT")
@Scaffold("/scaffold/field/project")
public class FieldProject extends DomainEntity {

	/**
	 * 序列化
	 */
	private static final long serialVersionUID = 786804234696017100L;

	private String name;

	private List<FieldTodo> fieldTodos;

	@Column(name = "F_NAME", length = 80)
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
