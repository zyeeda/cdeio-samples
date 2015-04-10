package com.zyeeda.cdeio.example.scaffold.form.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

import com.zyeeda.cdeio.commons.annotation.scaffold.Scaffold;
import com.zyeeda.cdeio.commons.base.entity.DomainEntity;
import com.zyeeda.cdeio.commons.resource.entity.Attachment;
import com.zyeeda.cdeio.example.extension.service.entity.Set;

@Entity
@Table(name = "SA_FORM_TODO")
@Scaffold("/scaffold/form/todo")
public class FormTodo extends DomainEntity {

	/**
	 *
	 */
	private static final long serialVersionUID = -6010668419308271982L;
	private String name;
	private String description;
	private String status;
	private Date startDate;
	private List<FormUser> users;
	private List<FormProject> projects;
	
    private Attachment attachment;
    private Set<Attachment> files = null;

	@Column(name = "F_NAME", length = 60)
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
	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}



	@Column(name = "F_START_TIME")
	@Temporal(TemporalType.DATE)
	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	@ManyToMany
	@JoinTable(name = "ZDA_FORM_TODO_USER",
	joinColumns=@JoinColumn(name = "F_TODO_ID"),
	inverseJoinColumns = @JoinColumn(name = "F_USER_ID"))
	public List<FormUser> getUsers() {
		return users;
	}

	public void setUsers(List<FormUser> users) {
		this.users = users;
	}

	@ManyToMany
	@JoinTable(name = "ZDA_FORM_TODO_PROJECT",
	joinColumns=@JoinColumn(name = "F_TODO_ID"),
	inverseJoinColumns = @JoinColumn(name = "F_PROJECT_ID"))
	public List<FormProject> getProjects() {
		return projects;
	}

	public void setProjects(List<FormProject> projects) {
		this.projects = projects;
	}
	
    @OneToOne
    @JoinColumn(name = "F_ATTACHMENT_ID")
    public Attachment getAttachment (){
        return attachment;
    }

    public void setAttachment (Attachment attachment){
        this.attachment = attachment;
    }
    
    @ManyToMany
    @JoinTable(name = "F_TODO_FILES", joinColumns = @JoinColumn(name = "F_TODO"), inverseJoinColumns = @JoinColumn(name = "F_FILE"))
    public Set<Attachment> getFiles() {
        return files;
    }

    public void setFiles(Set<Attachment> files) {
        this.files = files;
    }

}
