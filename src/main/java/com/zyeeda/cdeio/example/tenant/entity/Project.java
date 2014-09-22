package com.zyeeda.cdeio.example.tenant.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.zyeeda.cdeio.commons.annotation.scaffold.Scaffold;
import com.zyeeda.cdeio.commons.base.entity.DomainEntity;

@Entity
@Table(name = "CDEIO_PROJECT")
@Scaffold("/tenant/project")
public class Project extends DomainEntity {

    /**
     *
     */
    private static final long serialVersionUID = -2663145697591360845L;

    /**
     * 名称.
     */
    private String name;

    /**
     * 描述.
     */
    private String description;

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

    @OneToMany(mappedBy = "project")
    public List<Document> getDocuments() {
        return documents;
    }

    public void setDocuments(List<Document> documents) {
        this.documents = documents;
    }
}
