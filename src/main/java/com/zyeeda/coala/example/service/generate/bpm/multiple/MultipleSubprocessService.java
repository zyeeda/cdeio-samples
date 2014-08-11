package com.zyeeda.coala.example.service.generate.bpm.multiple;

import java.util.List;

/**
 * 模拟 ldap 服务
 * 此服务提供两个查询方法
 *
 ****************************
 * @author child          *
 * @date   2014年4月22日        *
 ****************************
 */
public interface MultipleSubprocessService {
	
	public List<String> getDepartments();
	/**
	 * 根据给定的部门查询初审人员
	 * 
	 * @param department
	 * @return
	 *
	 ****************************
	 * @author child          *
	 * @date   2014年4月22日        *
	 ****************************
	 */
	public String getAssigneeByDepartment4Trial(String department);
	/**
	 * 根据给定对的部门查询复审人员
	 * 
	 * @param department
	 * @return
	 *
	 ****************************
	 * @author child          *
	 * @date   2014年4月22日        *
	 ****************************
	 */
	public String getAssigneeByDepartment4Review(String department);
}
