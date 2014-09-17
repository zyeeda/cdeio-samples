package com.zyeeda.cdeio.example.listener.generate.bpm.listener.task;

import org.activiti.engine.delegate.DelegateTask;
import org.activiti.engine.delegate.TaskListener;

import com.zyeeda.cdeio.example.listener.generate.bpm.listener.BaseBpmListener;

/**
 * 任务分派监听
 * 当任务被分派给某个具体的人员或被某个具体的人员认领时将会被此监听监听到
 * 此监听监听的事件为 'assignment'
 */
public class TaskAssignmentListener extends BaseBpmListener implements TaskListener {
	private static final long serialVersionUID = -4829766263033792944L;

	public void notify(DelegateTask delegateTask) {
		log("'入职复审' 任务已被 zoro 认领");
	}

}
