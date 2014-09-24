package com.zyeeda.cdeio.example.scaffold.tree.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OrderBy;
import javax.persistence.Table;

import com.zyeeda.cdeio.commons.annotation.scaffold.Scaffold;
import com.zyeeda.cdeio.commons.base.data.TreeNode;
import com.zyeeda.cdeio.commons.base.entity.TreeNodeRevisionDomainEntity;
import com.zyeeda.cdeio.validation.constraint.NullableSize;

/**
 * 自动生成——树——基础配置
 *
 * $Autuor$
 */

@SuppressWarnings("serial")
@Entity
@Table(name = "SA_SCAFFOLD_BASIC_TREE")
@Scaffold("/scaffold/tree/basic")
public class BasicTree extends TreeNodeRevisionDomainEntity implements TreeNode<BasicTree> {

	/**
	 *名称
	 */
	private String name;

	/**
	 *父级
	 */
	private BasicTree parent;

	/**
	 *子类
	 */
	private List<BasicTree> children = new ArrayList<BasicTree>();

	@NullableSize(max = 166)
	@Column(name = "F_NAME", length = 500)
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@ManyToOne
	@JoinColumn(name = "F_PARENT_ID")
	public BasicTree getParent() {
		return parent;
	}

	public void setParent(BasicTree parent) {
		this.parent = parent;
	}

	@OneToMany(mappedBy = "parent", fetch = FetchType.LAZY)
	@OrderBy("name ASC")
	public List<BasicTree> getChildren() {
		return children;
	}

	public void setChildren(List<BasicTree> children) {
		this.children = children;
	}

}
