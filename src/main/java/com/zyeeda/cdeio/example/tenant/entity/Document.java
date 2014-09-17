package com.zyeeda.cdeio.example.tenant.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.zyeeda.cdeio.commons.annotation.scaffold.Scaffold;
import com.zyeeda.cdeio.commons.base.entity.DomainEntity;
import com.zyeeda.cdeio.commons.resource.entity.Attachment;
import com.zyeeda.cdeio.validation.constraint.NullableSize;

@Entity
@Table(name = "CDE_DOCUMENT")
@Scaffold("/tenant/document")
public class Document extends DomainEntity {

    private static final long serialVersionUID = 8747083799856614504L;

    private String name = null;

    private String description = null;
    
    private String type = null;
    
    private Double size = null;
    
    private Attachment attachment = null;
    
    private Folder folder = null;
    
    private Project project;

    @Column(name = "F_NAME", length = 20)
    @NotNull
    @NullableSize(min = 2, max = 20)
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
    
    @Column(name = "F_TYPE", length = 10)
    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Column(name="F_SIZE")
    public Double getSize() {
        return size;
    }

    public void setSize(Double size) {
        this.size = size;
    }

    @ManyToOne
    @JoinColumn(name = "ATTACHMENT_ID")
    public Attachment getAttachment() {
        return attachment;
    }

    public void setAttachment(Attachment attachment) {
        this.attachment = attachment;
    }

    @ManyToOne
    @JoinColumn(name = "F_FOLDER")
    public Folder getFolder() {
        return folder;
    }

    public void setFolder(Folder folder) {
        this.folder = folder;
    }

    @ManyToOne
    @JoinColumn(name = "F_PROJECT")
    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }
}
