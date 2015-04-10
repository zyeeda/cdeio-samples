package com.zyeeda.cdeio.example.scaffold.form.entity;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.Set;

import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Column;
import javax.persistence.Entity;
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
@Table(name = "SA_FORM_PROJECT")
@Scaffold("/scaffold/form/project")
public class FormProject extends DomainEntity {

	/**
	 *
	 */
	private static final long serialVersionUID = 3957069632448116353L;
	private String name;
	private String desc;
	private Date startDate;
	private String people;
	private String intro;
	private BigDecimal cost;

	private List<FormUser> users;
	private List<FormTodo> todos;
	
    private Attachment attachment;
    
    private Set<Attachment> files = null;


	@Column(name = "F_NAME")
	@NotNull
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	@Column(name = "F_DESC")
	public String getDesc() {
		return desc;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}

	@Column(name = "F_START_DATE")
	@Temporal(TemporalType.DATE)
	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	@Column(name = "F_PEOPLE")
	public String getPeople() {
		return people;
	}
	public void setPeople(String people) {
		this.people = people;
	}

	@NullableSize(max = 166)
	@Column(name = "F_COST", precision = 23, scale = 2)
	public BigDecimal getCost() {
		return cost;
	}
	public void setCost(BigDecimal cost) {
		this.cost = cost;
	}

	@Column(name = "F_INTRO")
	public String getIntro() {
		return intro;
	}
	public void setIntro(String intro) {
		this.intro = intro;
	}

	@ManyToMany
	@JoinTable(name = "ZDA_FORM_PROJECT_USER",
	joinColumns=@JoinColumn(name = "F_PROJECT_ID"),
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
    public List<FormTodo> getTodos() {
        return todos;
    }

    public void setTodos(List<FormTodo> todos) {
        this.todos = todos;
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
    @JoinTable(name = "F_PROJECT_FILES", joinColumns = @JoinColumn(name = "F_PROJECT"), inverseJoinColumns = @JoinColumn(name = "F_FILE"))
    public Set<Attachment> getFiles() {
        return files;
    }

    public void setFiles(Set<Attachment> files) {
        this.files = files;
    }

}
