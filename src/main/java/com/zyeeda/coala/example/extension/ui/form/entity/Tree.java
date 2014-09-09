package com.zyeeda.coala.example.extension.ui.form.entity;

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
@Table(name = "CDE_TEST_TREE")
@Scaffold("test/trees")
public class Tree extends DomainEntity implements TreeNode<Tree> {

    private static final long serialVersionUID = -3311863197393407549L;

    private String name = null;
    private Tree parent = null;
    private List<Tree> children = null;

    @Column(name = "F_NAME", length = 200)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @ManyToOne
    @JoinColumn(name = "F_PARENT")
    public Tree getParent() {
        return parent;
    }

    public void setParent(Tree parent) {
        this.parent = parent;
    }

    @OneToMany(mappedBy = "parent")
    public List<Tree> getChildren() {
        return children;
    }

    public void setChildren(List<Tree> children) {
        this.children = children;
    }

}
