package com.zyeeda.cdeio.example.extension.ui.form.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.zyeeda.cdeio.commons.annotation.scaffold.Scaffold;
import com.zyeeda.cdeio.commons.base.entity.DomainEntity;
/**
 * 扩展/界面/回调类
 *
 */

@Entity
@Table(name = "SA_UI_CALL_BACK")
@Scaffold("/extension/ui/call-back")
public class CallBack extends DomainEntity{

	/**
	 * 序列化
	 */
	private static final long serialVersionUID = -7799525486370549204L;

	/**
	 * 名称
	 */
	private String name;

	/**
	 * 类型(1:小型;2:中型;3:大型)
	 */
	private String type;

	/**
	 * 关联路由
	 */
	private Router router;

	/**
	 * 明细类别
	 */
	private String detailType;

	/**
	 * 关联line-grid
	 */
	private List<CallBackInlineGrid> inlineGrid = new ArrayList<CallBackInlineGrid>();

	@Column(name = "F_NAME", length = 100)
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Column(name = "F_TYPE", length = 100)
	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	@ManyToOne
	@JoinColumn(name = "F_ROUTER_ID")
	public Router getRouter() {
		return router;
	}

	public void setRouter(Router router) {
		this.router = router;
	}

	@Column(name = "F_DETAIL_TYPE", length = 100)
	public String getDetailType() {
		return detailType;
	}

	public void setDetailType(String detailType) {
		this.detailType = detailType;
	}

	@OneToMany(mappedBy="callBack")
	public List<CallBackInlineGrid> getInlineGrid() {
		return inlineGrid;
	}

	public void setInlineGrid(List<CallBackInlineGrid> inlineGrid) {
		this.inlineGrid = inlineGrid;
	}
}
