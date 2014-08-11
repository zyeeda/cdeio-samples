package com.zyeeda.coala.example.service.generate.bpm.multiple;

import java.util.List;

/**
 * 多实例子流程服务接口，提供相关服务。
 */
public interface MultipleSubprocessService {

	/**
	 * 获取参与审核的部门
	 */
	public List<String> getDepartments();
	/**
	 * 根据给定的部门查询初审人员
	 */
	public String getAssigneeByDepartment4Trial(String department);
	/**
	 * 根据给定对的部门查询复审人员
	 */
	public String getAssigneeByDepartment4Review(String department);
}
