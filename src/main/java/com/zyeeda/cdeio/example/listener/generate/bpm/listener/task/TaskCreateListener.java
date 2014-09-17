package com.zyeeda.cdeio.example.listener.generate.bpm.listener.task;

import org.activiti.engine.delegate.DelegateTask;
import org.activiti.engine.delegate.TaskListener;

import com.zyeeda.cdeio.example.listener.generate.bpm.listener.BaseBpmListener;

/**
 * 任务创建监听
 * 当任务被创建时将被此监听监听到
 */
public class TaskCreateListener extends BaseBpmListener implements TaskListener {
	private static final long serialVersionUID = -4829766263033792944L;
	public void notify(DelegateTask delegateTask) {
		log("'入职初审' 任务已被创建");
	}

}
