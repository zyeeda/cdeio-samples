package com.zyeeda.cdeio.example.listener.generate.bpm.listener.task;

import org.activiti.engine.delegate.DelegateTask;
import org.activiti.engine.delegate.TaskListener;

import com.zyeeda.cdeio.example.listener.generate.bpm.listener.BaseBpmListener;

/**
 * 任务自动分派监听
 * 当任务被创建时将被此监听监听到，此监听会自动的将任务的执行人设置为 'luffy'
 * 此监听监听的事件为 'create'
 */
public class TaskAutoClaimListener extends BaseBpmListener implements TaskListener {
	private static final long serialVersionUID = -4829766263033792944L;

	public void notify(DelegateTask delegateTask) {
		// 让 luffy 自动认领任务
		delegateTask.setAssignee("luffy");
		log("'入职初审' 任务已被 luffy 认领");
	}

}
