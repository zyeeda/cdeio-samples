package com.zyeeda.coala.example.service.generate.bpm.multiple.impl;

import java.util.ArrayList;
import java.util.List;

import com.zyeeda.coala.example.service.generate.bpm.multiple.MultipleSubprocessService;

/**
 * 模拟 ldap 服务
 * 此服务提供两个查询方法
 *
 ****************************
 * @author child          *
 * @date   2014年4月22日        *
 ****************************
 */
public class MultipleSubprocessServiceImpl implements MultipleSubprocessService {
	
	public List<String> getDepartments(){
		List<String> departments = new ArrayList<String>();
		departments.add("d-1003");
		departments.add("d-1004");
		return departments;
	}
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
	public String getAssigneeByDepartment4Trial(String department){
		String actor = null;
		if("d-1003".equals(department)){
			actor = "nami";
		}else if("d-1004".equals(department)){
			actor = "franky";
		}else{
			
		}
		return actor;
	}
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
	public String getAssigneeByDepartment4Review(String department){
		String actor = null;
		if("d-1003".equals(department)){
			actor = "robin";
		}else if("d-1004".equals(department)){
			actor = "chopper";
		}else{
			
		}
		return actor;
	}	
}
