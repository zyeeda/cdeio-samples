package com.zyeeda.cdeio.example.listener.generate.bpm.listener.execution;

import org.activiti.engine.delegate.DelegateExecution;
import org.activiti.engine.delegate.ExecutionListener;
import org.activiti.engine.impl.el.FixedValue;

import com.zyeeda.cdeio.example.listener.generate.bpm.listener.BaseBpmListener;

/**
 * 流程监听器，会将给定的 message 输出
 */
public class ProcessExecutionListener extends BaseBpmListener implements ExecutionListener {

	private static final long serialVersionUID = -5512501047481178536L;
	// 流程定义中传入的 message
	private FixedValue message;

	public void notify(DelegateExecution execution) throws Exception {
	    log((String)message.getValue(execution));
	}
}
