package com.zyeeda.cdeio.example.listener.generate.bpm.listener;

/**
 * 任务监听类的父类，将信息输出到控制台。
 */
public class BaseBpmListener {

	public void log(String message){
		System.out.println("----cdeio-example task listener message : " + message);
	}

}
