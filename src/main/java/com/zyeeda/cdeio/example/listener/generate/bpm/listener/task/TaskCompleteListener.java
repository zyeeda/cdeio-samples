package com.zyeeda.cdeio.example.listener.generate.bpm.listener.task;

import org.activiti.engine.delegate.DelegateTask;
import org.activiti.engine.delegate.TaskListener;

import com.zyeeda.cdeio.example.listener.generate.bpm.listener.BaseBpmListener;

/**
 * 任务完成监听
 * 在任务完成时，即调用 {@link TaskServcie#complete}方法时将被此监听监听到
 * 此监听监听的事件为 'complete'
 */
public class TaskCompleteListener extends BaseBpmListener implements TaskListener {
	private static final long serialVersionUID = -2189757284980300812L;

	public void notify(DelegateTask delegateTask) {
		log("'入职复审' 任务已完成");
	}

}
