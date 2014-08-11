exports.results = [
	{id: "700", name: "工作台", iconClass: "icon-dashboard", path: "#"},

	{id: "800", name: "实体", iconClass: "icon-lock", path: "#/"},

	{id: "800003", name: "Scaffold", iconClass: "icon-lock", path: "#feature/entity/scaffold:test", parent: {id: "800", name: '实体'}},
	{id: "800002", name: "JPA", iconClass: "icon-lock", path: "#feature/entity/scaffold:foo", parent: {id: "800", name: '实体'}},
	{id: "800004", name: "BeanValidator", iconClass: "icon-lock", path: "#feature/entity/scaffold:bar", parent: {id: "800", name: '实体'}},
	{id: "800005", name: "Jackson", iconClass: "icon-lock", path: "#/", parent: {id: "800", name: '实体'}},
	{id: "800006", name: "全文检索", iconClass: "icon-lock", path: "#/", parent: {id: "800", name: '实体'}},

	{id: "100", name: "自动生成", opened: false, iconClass: "icon-lock", path: "#/"},

	{id: "100001001", name: "基础", iconClass: "icon-unlock", path: "#/", parent: {id: "100"}},
	{id: "100001001001", name: "最简配置", iconClass: "icon-unlock", path: "#feature/scaffold/basic/scaffold:basic-todo", parent: {id: "100001001", name: "基础"}},
	{id: "100001001002", name: "Json序列化", iconClass: "icon-unlock", path: "#feature/scaffold/basic/scaffold:todo", parent: {id: "100001001", name: "基础"}},
	{id: "100001001003", name: "标签", iconClass: "icon-unlock", path: "#feature/scaffold/basic/scaffold:tag", parent: {id: "100001001", name: "基础"}},

	{id: "100001002", name: "列表", iconClass: "icon-unlock", path: "#/", parent: {id: "100"}},
	{id: "100001002001", name: "基础配置", iconClass: "icon-unlock", path: "#feature/scaffold/grid/scaffold:grid-user", parent: {id: "100001002", name: "列表"}},
	{id: "100001002002", name: "高级配置", iconClass: "icon-unlock", path: "#feature/scaffold/grid/scaffold:user", parent: {id: "100001002", name: "列表"}},

	{id: "100001003", name: "树", iconClass: "icon-lock", path: "#/", parent: {id: "100"}},
	{id: "100001003001", name: "基础配置", iconClass: "icon-lock", path: "#/", parent: {id: "100001003"}},
	{id: "100001004002", name: "高级配置", iconClass: "icon-lock", path: "#", parent: {id: "100001003"}},

	{id: "100001009", name: "字段", iconClass: "icon-unlock", path: "#/", parent: {id: "100"}},
	{id: "100001009001", name: "基础", iconClass: "icon-unlock", path: "#feature/scaffold/field/scaffold:todo", parent: {id: "100001009", name: "字段"}},
	/*{id: "100001009003", name: "下拉列表", iconClass: "icon-unlock", path: "#/", parent: {id: "100001009", name: "字段"}},
	{id: "100001009004", name: "日期选择器", iconClass: "icon-unlock", path: "#/", parent: {id: "100001009", name: "字段"}},
	{id: "100001009002", name: "GridPicker", iconClass: "icon-unlock", path: "#/", parent: {id: "100001009", name: "字段"}},
	{id: "100001009005", name: "TreePicker", iconClass: "icon-unlock", path: "#feature/scaffold/field/scaffold:tag", parent: {id: "100001009", name: "字段"}},
	{id: "100001009006", name: "FilePicker", iconClass: "icon-unlock", path: "#/", parent: {id: "100001009"}},
	{id: "100001009007", name: "InlineGrid", iconClass: "icon-unlock", path: "#feature/scaffold/field/scaffold:user", parent: {id: "100001009", name: "字段"}},*/
	{id: "100001009008", name: "验证规则", iconClass: "icon-unlock", path: "#feature/scaffold/field/scaffold:account", parent: {id: "100001009", name: "字段"}},



	{id: "100001004", name: "表单", iconClass: "icon-lock", path: "#/", parent: {id: "100"}},
	{id: "100001004001", name: "基础", iconClass: "icon-lock", path: "#/", parent: {id: "100001004"}},
	{id: "100001004002", name: "分组", iconClass: "icon-lock", path: "#/", parent: {id: "100001004"}},
	{id: "100001004003", name: "页签", iconClass: "icon-lock", path: "#/", parent: {id: "100001004"}},

	{id: "100001005", name: "操作按钮", iconClass: "icon-lock", path: "#/", parent: {id: "100"}},
	{id: "100001005001", name: "基础配置", iconClass: "icon-lock", path: "#/", parent: {id: "100001005"}},
	{id: "100001005002", name: "高级配置", iconClass: "icon-lock", path: "#/", parent: {id: "100001005"}},

	{id: "100001006", name: "hooks", iconClass: "icon-lock", path: "#/", parent: {id: "100"}},
	{id: "100001006001", name: "基础", iconClass: "icon-lock", path: "#/", parent: {id: "100001006"}},

	{id: "100001007", name: "validations", iconClass: "icon-lock", path: "#/", parent: {id: "100"}},
	{id: "100001007001", name: "基础", iconClass: "icon-lock", path: "#/", parent: {id: "100001007"}},

	{id: "100001007", name: "其它", iconClass: "icon-lock", path: "#/", parent: {id: "100"}},
	{id: "100001007001", name: "动态Feature", iconClass: "icon-lock", path: "#/", parent: {id: "100001007"}},


	{id: "100001008", name: "工作流", iconClass: "green icon-key", path: "#/", parent: {id: "100"}},
	{id: "300001", name: "任务", iconClass: "green icon-key", path: "#/", parent: {id: "100001008"}},
	{id: "300001001", name: "人工任务", iconClass: "green icon-key", path: "#feature/generate/bpm/task/scaffold:userTask", parent: {id: "300001"}},
	{id: "300001002", name: "召回", iconClass: "green icon-key", path: "#feature/generate/bpm/task/scaffold:callback", parent: {id: "300001"}},
	{id: "300001003", name: "回退", iconClass: "green icon-key", path: "#feature/generate/bpm/task/scaffold:reject", parent: {id: "300001"}},
	{id: "300001004", name: "指定负责人", iconClass: "icon-lock", path: "#/", parent: {id: "300001"}},
	{id: "300001005", name: "自由流", iconClass: "icon-lock", path: "#/", parent: {id: "300001"}},
	{id: "300001006", name: "脚本任务", iconClass: "icon-lock", path: "#/", parent: {id: "300001"}},
	{id: "300001007", name: "手工任务", iconClass: "icon-lock", path: "#/", parent: {id: "300001"}},
	{id: "300001008", name: "Java服务任务", iconClass: "icon-lock", path: "#/", parent: {id: "300001"}},
	{id: "300001009", name: "Java接收任务", iconClass: "icon-lock", path: "#/", parent: {id: "300001"}},
	{id: "300002", name: "网关", iconClass: "green icon-key", path: "#/", parent: {id: "100001008"}},
	{id: "300002001", name: "排他网关", iconClass: "green icon-key", path: "#feature/generate/bpm/gateway/scaffold:exclusive", parent: {id: "300002"}},
	{id: "300002002", name: "并行网关", iconClass: "green icon-key", path: "#feature/generate/bpm/gateway/scaffold:parallel", parent: {id: "300002"}},
	{id: "300002003", name: "包含网关", iconClass: "icon-lock", path: "#/", parent: {id: "300002"}},
	{id: "300002004", name: "事件网关", iconClass: "icon-lock", path: "#/", parent: {id: "300002"}},
	{id: "300003", name: "监听", iconClass: "green icon-key", path: "#/", parent: {id: "100001008"}},
	{id: "300003001", name: "流程监听", iconClass: "green icon-key", path: "#feature/generate/bpm/listener/scaffold:execution", parent: {id: "300003"}},
	{id: "300003002", name: "任务监听", iconClass: "green icon-key", path: "#feature/generate/bpm/listener/scaffold:task", parent: {id: "300003"}},
	{id: "300004", name: "子流程", iconClass: "green icon-key", path: "#/", parent: {id: "100001008"}},
	{id: "300004001", name: "嵌入式子流程", iconClass: "green icon-key", path: "#feature/generate/bpm/subprocess/scaffold:embedded", parent: {id: "300004"}},
	{id: "300004002", name: "外部引用子流程", iconClass: "icon-lock", path: "#/", parent: {id: "300004"}},
	{id: "300005", name: "多实例", iconClass: "green icon-key", path: "#/", parent: {id: "100001008"}},
	{id: "300005001", name: "子流程", iconClass: "green icon-key", path: "#feature/generate/bpm/multiple/scaffold:subprocess", parent: {id: "300005"}},
	{id: "300005002", name: "人工任务", iconClass: "green icon-key", path: "#feature/generate/bpm/multiple/scaffold:userTask", parent: {id: "300005"}},
	{id: "300005003", name: "脚本任务", iconClass: "icon-lock", path: "#/", parent: {id: "300005"}},
	{id: "300006", name: "中间事件", iconClass: "icon-lock", path: "#/", parent: {id: "100001008"}},
	{id: "300006001", name: "定时中间事件", iconClass: "icon-lock", path: "#/", parent: {id: "300006"}},
	{id: "300006002", name: "消息中间事件", iconClass: "icon-lock", path: "#/", parent: {id: "300006"}},
	{id: "300006003", name: "信号中间事件", iconClass: "icon-lock", path: "#/", parent: {id: "300006"}},
	{id: "300006004", name: "错误中间事件", iconClass: "icon-lock", path: "#/", parent: {id: "300006"}},
	{id: "300007", name: "边界事件", iconClass: "icon-lock", path: "#/", parent: {id: "100001008"}},
	{id: "300007001", name: "定时边界事件", iconClass: "icon-lock", path: "#/", parent: {id: "300007"}},
	{id: "300007002", name: "消息边界事件", iconClass: "icon-lock", path: "#/", parent: {id: "300007"}},
	{id: "300007003", name: "信号边界事件", iconClass: "icon-lock", path: "#/", parent: {id: "300007"}},
	{id: "300007004", name: "错误边界事件", iconClass: "icon-lock", path: "#/", parent: {id: "300007"}},

	{id: "400", name: "扩展", opened: false, iconClass: "icon-lock", path: "#/"},
	{id: "400001", name: "服务", iconClass: "icon-lock", path: "#/", parent: {id: "400"}},

	{id: "400001001", name: "基础", iconClass: "icon-lock", path: "#/", parent: {id: "400001"}},
	{id: "400001002", name: "文件下载", iconClass: "icon-lock", path: "#/", parent: {id: "400001"}},
	{id: "400001003", name: "文件上传", iconClass: "icon-lock", path: "#/", parent: {id: "400001"}},
	{id: "400001004", name: "SQL查询", iconClass: "icon-lock", path: "#/", parent: {id: "400001"}},
	{id: "400001005", name: "全文检索", iconClass: "icon-lock", path: "#/", parent: {id: "400001"}},

	{id: "400002", name: "界面", iconClass: "icon-lock", path: "#/", parent: {id: "400"}},
	{id: "400002001", name: "基础", iconClass: "icon-lock", path: "#/", parent: {id: "400002"}},
	{id: "400002002", name: "路由", iconClass: "icon-lock", path: "#/", parent: {id: "400002"}},
	{id: "400002003", name: "表单视图", iconClass: "icon-lock", path: "#feature/extension/ui/form", parent: {id: "400002"}},
	{id: "400002004", name: "自定义表单视图", iconClass: "icon-lock", path: "#/", parent: {id: "400002"}},
	{id: "400002005", name: "继承", iconClass: "icon-lock", path: "#/", parent: {id: "400002"}},
	{id: "400002006", name: "回调", iconClass: "icon-lock", path: "#/", parent: {id: "400002"}},
	{id: "400002007", name: "viewport", iconClass: "icon-lock", path: "#/", parent: {id: "400002"}},
	{id: "400002008", name: "多级菜单", iconClass: "icon-lock", path: "#/", parent: {id: "400002"}},

	{id: "500", name: "报表", iconClass: "icon-lock", path: "#/"},
	{id: "500001", name: "基础", iconClass: "icon-lock", path: "#/", parent: {id: "500"}},
	{id: "500002", name: "参数", iconClass: "icon-lock", path: "#/", parent: {id: "500"}},
	{id: "500003", name: "自定义参数", iconClass: "icon-lock", path: "#/", parent: {id: "500"}},
	{id: "500004", name: "复杂", iconClass: "icon-lock", path: "#/", parent: {id: "500"}},

	{id: "600", name: "数据权限", iconClass: "icon-lock", path: "#", opened: false},
	{id: "600001", name: "文件", iconClass: "icon-lock", path: "#feature/tenant/scaffold:document", parent: {id: "600"}},
	{id: "600002", name: "文件夹", iconClass: "icon-lock", path: "#feature/tenant/scaffold:folder", parent: {id: "600"}},
	{id: "600003", name: "项目", iconClass: "icon-lock", path: "#feature/tenant/scaffold:project", parent: {id: "600"}},
	{id: "600004", name: "用户", iconClass: "icon-lock", path: "#feature/tenant/scaffold:user", parent: {id: "600"}},
	{id: "600005", name: "数据租户", iconClass: "icon-lock", path: "#feature/tenant/scaffold:tenant", parent: {id: "600"}},

	{id: "900", name: "漏斗", iconClass: "icon-lock", path: "#", opened: true},
	{id: "900001", name: "漏斗类型", iconClass: "icon-lock", path: "#feature/funnel/scaffold:funnel-type", parent: {id: "900", name: "漏斗"}},
	{id: "900002", name: "漏斗", iconClass: "icon-lock", path: "#feature/funnel/scaffold:funnel", parent: {id: "900", name: "漏斗"}},
	{id: "900003", name: "漏斗数据类型", iconClass: "icon-lock", path: "#feature/funnel/scaffold:funnel-data-type", parent: {id: "900", name: "漏斗"}},
	{id: "900004", name: "漏斗数据", iconClass: "icon-lock", path: "#feature/funnel/scaffold:funnel-data", parent: {id: "900", name: "漏斗"}}
	// {id: "900005", name: "漏斗用户", iconClass: "icon-lock", path: "#feature/funnel/scaffold:funnel-account", parent: {id: "900", name: "漏斗"}}

];

/*
实体
	JPA
	Scaffold
	BeanValidator
	Jackson
	全文检索

自动生成
	基础
		最简配置
		JSON序列化
		标签
	列表
		基础配置
		过滤器
		查询条件？
		高级配置？（datatables）
	树
		基础配置
		高级配置？（ztree）
	表单
		基础
		分组
		页签
	字段
		基础
		下拉列表
		日期选择器
		GridPicker
		TreePicker
		FilePicker
		InlineGrid
		验证规则
	操作按钮
		基础配置
		高级配置？扩展
	hooks
		基础
	validations
		基础
	其它
		动态Feature
	工作流
		####

扩展
	服务？
		基础（两种模式）
		download
		upload
		SQL查询
		全文检索
	界面
		基础（两种模式）
		表单视图
		自定义表单视图
		自定义视图
		继承
		回调
		viewport
		多级菜单
报表
	基础
	参数
	自定义参数
	复杂
*/