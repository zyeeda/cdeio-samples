package com.zyeeda.cdeio.example.extension.tree.entity;

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
 * 扩展——树
 *
 * $Autuor$
 */

@SuppressWarnings("serial")
@Entity
@Table(name = "CDEIO_EXTENSION_ADVANCED_TREE")
@Scaffold({"/extension/tree/event", "/extension/tree/icon"})
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

