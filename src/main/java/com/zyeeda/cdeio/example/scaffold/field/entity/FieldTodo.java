package com.zyeeda.cdeio.example.scaffold.field.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

import com.zyeeda.cdeio.commons.annotation.scaffold.Scaffold;
import com.zyeeda.cdeio.commons.base.entity.DomainEntity;
import com.zyeeda.cdeio.commons.resource.entity.Attachment;
import com.zyeeda.cdeio.validation.constraint.NullableSize;

@Entity
@Table(name = "SA_FIELD_TODO")
@Scaffold("/scaffold/field/todo")
public class FieldTodo extends DomainEntity {

	/**
	 * 序列化
	 */
	private static final long serialVersionUID = -4809855036314184512L;
	private String name;
	private String description;
	private String level;
	private Date startDate;
	private Attachment attach;
	private List<FieldUser> users;
	private FieldTag tag;
	private FieldProject project;
	private List<Attachment> attachments;

	@Column(name = "F_NAME",length=60)
	@NotNull
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@NullableSize(max = 1333)
	@Column(name ="F_DESCRIPTION",length=4000)
	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Column(name ="F_LEVEL")
	public String getLevel() {
		return level;
	}

	public void setLevel(String level) {
		this.level = level;
	}

	@ManyToOne
	@JoinColumn(name = "F_Tag")
	public FieldTag getTag() {
		return tag;
	}
	public void setTag(FieldTag tag) {
		this.tag = tag;
	}

	@Column(name = "F_START_TIME")
	@Temporal(TemporalType.DATE)
	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	@OneToOne
	@JoinColumn(name = "F_ATTCHMENT_ID")
	public Attachment getAttach() {
		return attach;
	}

	public void setAttach(Attachment attach) {
		this.attach = attach;
	}

	@ManyToMany
	@JoinTable(name = "ZDA_FIELD_TODO_USER",
	joinColumns=@JoinColumn(name = "F_TODO_ID"),
	inverseJoinColumns = @JoinColumn(name = "F_USER_ID"))
	public List<FieldUser> getUsers() {
		return users;
	}

	public void setUsers(List<FieldUser> users) {
		this.users = users;
	}

	@ManyToOne
	@JoinColumn(name = "F_PROJECT")
	public FieldProject getProject() {
		return project;
	}

	public void setProject(FieldProject project) {
		this.project = project;
	}

	@OneToMany
	@JoinTable(name = "ZDA_FIELD_TODO_ATTACHMENT",
	joinColumns = @JoinColumn(name = "F_TODO_ID"),
	inverseJoinColumns = @JoinColumn(name = "F_ATTACHMENT_ID"))
	public List<Attachment> getAttachments() {
		return attachments;
	}

	public void setAttachments(List<Attachment> attachments) {
		this.attachments = attachments;
	}


}
