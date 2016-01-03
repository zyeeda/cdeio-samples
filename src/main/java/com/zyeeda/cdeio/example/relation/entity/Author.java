package com.zyeeda.cdeio.example.relation.entity;

import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.Table;

import com.zyeeda.cdeio.commons.base.entity.DomainEntity;

import com.zyeeda.cdeio.commons.annotation.scaffold.Scaffold;

@Entity
@Table(name = "SA_RELATION_AUTHOR")
@Scaffold("/relation/author")
public class Author extends DomainEntity {
  private String name;

  @Column(name="F_NAME")
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }
}
