
###1. 业务描述
此业务是一个员工入职的二级审批审批流程。主要用于流程级别监听的演示。

###2. 机构及人员
&emsp;研发部(d-1001)<br/>
&emsp;&emsp;&emsp;－luffy<br/>
&emsp;人资部(d-1002)<br/>
&emsp;&emsp;&emsp;－zoro

###3. 具体操作
######1. 新增员工信息，审核流程将启动，在控制台可以看到"流程已启动"的日志输出。
######2. 使用账户 luffy 重新登录并完成任务。在控制台可以看到"连接 '入职初审' 和  '入职复审' 节点的  transition 已被选中并执行"的日志输出。
######3. 使用账户 zoro 重新登录并完成任务。在控制台可以看到"流程即将结束"的日志输出。
######4. 查看记录，状态为"流程已结束"。