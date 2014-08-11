package com.zyeeda.coala.example.service.generate.bpm.multiple;

import java.util.List;


/**
 * 多实例人工任务服务接口，提供相关服务。
 */
public interface MultipleUserTaskService {
	/**
	 * 查询参与审核的财务部人员
	 */
	public List<String> getAccountancyAssignees();
	/**
	 * 查询参与审核的领导
	 */
	public List<String> getLeaderAssignees();
}
