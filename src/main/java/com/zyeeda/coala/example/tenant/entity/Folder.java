package com.zyeeda.coala.example.tenant.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.zyeeda.coala.commons.annotation.scaffold.Scaffold;
import com.zyeeda.coala.commons.base.data.TreeNode;
import com.zyeeda.coala.commons.base.entity.DomainEntity;


@Entity
@Table(name = "CDE_FOLDER")
@Scaffold("/tenant/folder")
public class Folder extends DomainEntity implements TreeNode<Folder> {
    
    private static final long serialVersionUID = -3046047658797396616L;

    /**
     * 名称.
     */
    private String name;

    /**
     * 描述.
     */
    private String description;
    
    private Folder parent = null;
    
    private Boolean open = true;
   
    private List<Folder> children = null;
    
    private List<Document> documents = null;

    @Column(name = "F_NAME", length = 100)
    public String getName() {
        return this.name;
    }

    public void setName(final String name) {
        this.name = name;
    }

    @Column(name = "F_DESC", length = 2000)
    public String getDescription() {
        return this.description;
    }

    public void setDescription(final String description) {
        this.description = description;
    }
    
    @Column(name="F_OPEN")
    public Boolean getOpen() {
        return open;
    }

    public void setOpen(Boolean open) {
        this.open = open;
    }
    
    @Override
    @ManyToOne
    @JoinColumn(name = "F_PARENT")
    public Folder getParent() {
        return this.parent;
    }

    @Override
    public void setParent(Folder parent) {
        this.parent = parent;
    }

    @OneToMany(mappedBy = "parent")
    @Override
    public List<Folder> getChildren() {
        return children;
    }

    @Override
    public void setChildren(List<Folder> children) {
        this.children = children;
    }
    
    @OneToMany(mappedBy = "folder")
    public List<Document> getDocuments() {
        return documents;
    }

    public void setDocuments(List<Document> documents) {
        this.documents = documents;
    }

    
}
