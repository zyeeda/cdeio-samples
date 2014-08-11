package com.zyeeda.coala.example.entity.entity;

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
@Table(name = "CDE_BAR")
@Scaffold("/entity/bar")
public class Bar extends DomainEntity implements TreeNode<Bar> {

    private static final long serialVersionUID = 2164009717735941225L;

    private String name = null;
    private Foo foo = null;
    private Bar parent = null;
    private List<Bar> children = null;

    @Column(name = "F_NAME")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @ManyToOne
    @JoinColumn(name = "F_FOO")
    public Foo getFoo() {
        return foo;
    }

    public void setFoo(Foo foo) {
        this.foo = foo;
    }

    @ManyToOne
    @JoinColumn(name = "F_PARENT")
    public Bar getParent() {
        return parent;
    }

    public void setParent(Bar parent) {
        this.parent = parent;
    }

    @OneToMany(mappedBy = "parent")
    public List<Bar> getChildren() {
        return children;
    }

    public void setChildren(List<Bar> children) {
        this.children = children;
    }

}
