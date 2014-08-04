package com.zyeeda.coala.example.listener.generate.bpm.listener;

/**
 * 任务监听类的父类，提供日志输出方法。
 */
public class BaseBpmListener {
	
	public void log(String message){
		System.out.println("----coala-example task listener message : " + message);
	}

}
