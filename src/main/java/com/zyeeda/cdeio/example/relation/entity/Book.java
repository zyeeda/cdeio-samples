package com.zyeeda.cdeio.example.relation.entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import javax.persistence.Table;

import com.zyeeda.cdeio.commons.base.entity.DomainEntity;

import com.zyeeda.cdeio.commons.annotation.scaffold.Scaffold;

@Entity
@Table(name = "SA_RELATION_BOOK")
@Scaffold("/relation/book")
public class Book extends DomainEntity {
    private String name;
    private Set<Author> authors;

    @Column(name="F_NAME")
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    @ManyToMany
    @JoinTable(name = "F_BOOK_AUTHOR", joinColumns = @JoinColumn(name = "F_BOOK_ID"), inverseJoinColumns = @JoinColumn(name = "F_AUTHOR_ID"))
    public Set<Author> getAuthors() {
        return authors;
    }
    public void setAuthors(Set<Author> authors) {
        this.authors = authors;
    }
}
