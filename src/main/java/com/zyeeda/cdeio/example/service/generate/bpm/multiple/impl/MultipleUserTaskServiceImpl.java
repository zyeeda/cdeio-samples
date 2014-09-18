package com.zyeeda.cdeio.example.service.generate.bpm.multiple.impl;

import java.util.ArrayList;
import java.util.List;

import com.zyeeda.cdeio.example.service.generate.bpm.multiple.MultipleUserTaskService;

public class MultipleUserTaskServiceImpl implements MultipleUserTaskService {

	public List<String> getAccountancyAssignees(){
		// 财务部审核人员
		List<String> accountancyAssignees = new ArrayList<String>();
		accountancyAssignees.add("franky");
		accountancyAssignees.add("sanji");
		accountancyAssignees.add("chopper");

		return accountancyAssignees;
	}

	public List<String> getLeaderAssignees(){
		// 审核领导
		List<String> leaderAssignees = new ArrayList<String>();
		leaderAssignees.add("usopp");
		leaderAssignees.add("brook");

		return leaderAssignees;
	}
}