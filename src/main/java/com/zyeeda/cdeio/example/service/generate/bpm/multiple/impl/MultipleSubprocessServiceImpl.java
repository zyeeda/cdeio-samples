package com.zyeeda.cdeio.example.service.generate.bpm.multiple.impl;

import java.util.ArrayList;
import java.util.List;

import com.zyeeda.cdeio.example.service.generate.bpm.multiple.MultipleSubprocessService;


public class MultipleSubprocessServiceImpl implements MultipleSubprocessService {

	public List<String> getDepartments(){
		List<String> departments = new ArrayList<String>();
		// 参与审核的部门为综合部与财务部
		departments.add("d-1003");
		departments.add("d-1004");
		return departments;
	}
	public String getAssigneeByDepartment4Trial(String department){
		String actor = null;
		if("d-1003".equals(department)){
			// 综合部初审人员为 nami
			actor = "nami";
		}else if("d-1004".equals(department)){
			// 财务部初审人员为 franky
			actor = "franky";
		}else{

		}
		return actor;
	}
	public String getAssigneeByDepartment4Review(String department){
		String actor = null;
		if("d-1003".equals(department)){
			// 综合部复审人员为 robin
			actor = "robin";
		}else if("d-1004".equals(department)){
			// 综合部复审人员为 chopper
			actor = "chopper";
		}else{

		}
		return actor;
	}
}
