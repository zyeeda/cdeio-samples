package com.zyeeda.coala.example.scaffold.tree.entity;

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

import com.zyeeda.coala.commons.annotation.scaffold.Scaffold;
import com.zyeeda.coala.commons.base.data.TreeNode;
import com.zyeeda.coala.commons.base.entity.TreeNodeRevisionDomainEntity;
import com.zyeeda.coala.validation.constraint.NullableSize;

/**
 * 自动生成——树——高级配置
 *
 * $Autuor$
 */

@SuppressWarnings("serial")
@Entity
@Table(name = "ZED_ADVANCED_TREE")
@Scaffold("/scaffold/tree/advanced")
public class AdvancedTree extends TreeNodeRevisionDomainEntity implements TreeNode<AdvancedTree> {
	
	/**
	 *名称
	 */
	private String name;
	
	/**
	 *父级
	 */
	private AdvancedTree parent;
	
	/**
	 *子类
	 */
	private List<AdvancedTree> children = new ArrayList<AdvancedTree>();
	
	/**
	 *类型(1:省级节点；2：市级节点；3:县级节点)
	 */
	private String type;

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
	public AdvancedTree getParent() {
		return parent;
	}

	public void setParent(AdvancedTree parent) {
		this.parent = parent;
	}

	@OneToMany(mappedBy = "parent", fetch = FetchType.LAZY)
	@OrderBy("name ASC")
	public List<AdvancedTree> getChildren() {
		return children;
	}

	public void setChildren(List<AdvancedTree> children) {
		this.children = children;
	}

	@Column(name = "F_TYPE")
	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	
}

