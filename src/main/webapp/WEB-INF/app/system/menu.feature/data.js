exports.results = [
	{id: "700", name: "工作台", iconClass: "icon-dashboard", path: "#"},

	{id: "800", name: "实体", iconClass: "icon-lock", path: "#/"},
	
	{id: "800003", name: "Scaffold", iconClass: "icon-lock", path: "#feature/entity/scaffold:test", parent: {id: "800", name: '实体'}},
	{id: "800002", name: "JPA", iconClass: "icon-lock", path: "#/", parent: {id: "800"}},
	{id: "800004", name: "BeanValidator", iconClass: "icon-lock", path: "#/", parent: {id: "800"}},
	{id: "800005", name: "Jackson", iconClass: "icon-lock", path: "#/", parent: {id: "800"}},
	{id: "800006", name: "全文检索", iconClass: "icon-lock", path: "#/", parent: {id: "800"}},
	
	{id: "100", name: "自动生成", opened: true, iconClass: "icon-lock", path: "#/"},

	{id: "100001001", name: "基础", iconClass: "icon-lock", path: "#/", parent: {id: "100"}},
	{id: "100001001001", name: "最简配置", iconClass: "icon-lock", path: "#/", parent: {id: "100001001"}},
	{id: "100001001002", name: "Json序列化", iconClass: "icon-lock", path: "#/", parent: {id: "100001001"}},
	{id: "100001001003", name: "标签", iconClass: "icon-lock", path: "#/", parent: {id: "100001001"}},

	{id: "100001002", name: "列表", iconClass: "icon-lock", path: "#/", parent: {id: "100"}},
	{id: "100001002001", name: "基础配置", iconClass: "icon-lock", path: "#/", parent: {id: "100001002"}},
	{id: "100001002002", name: "高级配置", iconClass: "icon-lock", path: "#/", parent: {id: "100001002"}},
	
	{id: "100001003", name: "树", iconClass: "icon-lock", path: "#/", parent: {id: "100"}},
	{id: "100001003001", name: "基础配置", iconClass: "icon-lock", path: "#/", parent: {id: "100001003"}},
	{id: "100001004002", name: "高级配置", iconClass: "icon-lock", path: "#/", parent: {id: "100001003"}},

	{id: "100001003", name: "字段", iconClass: "icon-lock", path: "#/", parent: {id: "100"}},
	{id: "100001003001", name: "基础", iconClass: "icon-lock", path: "#/", parent: {id: "100001003"}},
	{id: "100001003003", name: "下拉列表", iconClass: "icon-lock", path: "#/", parent: {id: "100001003"}},
	{id: "100001003004", name: "日期选择器", iconClass: "icon-lock", path: "#/", parent: {id: "100001003"}},
	{id: "100001003002", name: "GridPicker", iconClass: "icon-lock", path: "#/", parent: {id: "100001003"}},
	{id: "100001003005", name: "TreePicker", iconClass: "icon-lock", path: "#/", parent: {id: "100001003"}},
	{id: "100001003006", name: "FilePicker", iconClass: "icon-lock", path: "#/", parent: {id: "100001003"}},
	{id: "100001003007", name: "InlineGrid", iconClass: "icon-lock", path: "#/", parent: {id: "100001003"}},
	{id: "100001003008", name: "验证规则", iconClass: "icon-lock", path: "#/", parent: {id: "100001003"}},

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
	
	
	{id: "100001008", name: "工作流", iconClass: "icon-lock", path: "#/", parent: {id: "100"}},
	{id: "300001", name: "中间事件", iconClass: "icon-lock", path: "#/", parent: {id: "100001008"}},
	{id: "300001001", name: "定时中间事件", iconClass: "icon-lock", path: "#/", parent: {id: "300001"}},
	{id: "300001002", name: "消息中间事件", iconClass: "icon-lock", path: "#/", parent: {id: "300001"}},
	{id: "300001003", name: "信号中间事件", iconClass: "icon-lock", path: "#/", parent: {id: "300001"}},
	{id: "300001004", name: "错误中间事件", iconClass: "icon-lock", path: "#/", parent: {id: "300001"}},
	{id: "300002", name: "边界事件", iconClass: "icon-lock", path: "#/", parent: {id: "100001008"}},
	{id: "300002001", name: "定时边界事件", iconClass: "icon-lock", path: "#/", parent: {id: "300002"}},
	{id: "300002002", name: "消息边界事件", iconClass: "icon-lock", path: "#/", parent: {id: "300002"}},
	{id: "300002003", name: "信号边界事件", iconClass: "icon-lock", path: "#/", parent: {id: "300002"}},
	{id: "300002004", name: "错误边界事件", iconClass: "icon-lock", path: "#/", parent: {id: "300002"}},
	{id: "300003", name: "网关", iconClass: "icon-lock", path: "#/", parent: {id: "100001008"}},
	{id: "300003001", name: "排他网关", iconClass: "icon-lock", path: "#/", parent: {id: "300003"}},
	{id: "300003002", name: "并行网关", iconClass: "icon-lock", path: "#/", parent: {id: "300003"}},
	{id: "300003003", name: "包含网关", iconClass: "icon-lock", path: "#/", parent: {id: "300003"}},
	{id: "300003004", name: "事件网关", iconClass: "icon-lock", path: "#/", parent: {id: "300003"}},
	{id: "300004", name: "任务", iconClass: "icon-lock", path: "#/", parent: {id: "100001008"}},
	{id: "300004001", name: "用户任务", iconClass: "icon-lock", path: "#/", parent: {id: "300004"}},
	{id: "300004002", name: "脚本任务", iconClass: "icon-lock", path: "#/", parent: {id: "300004"}},
	{id: "300004003", name: "召回", iconClass: "icon-lock", path: "#/", parent: {id: "300004"}},
	{id: "300004004", name: "回退", iconClass: "icon-lock", path: "#/", parent: {id: "300004"}},
	{id: "300004005", name: "manual task", iconClass: "icon-lock", path: "#/", parent: {id: "300004"}},
	{id: "300004006", name: "Java service task", iconClass: "icon-lock", path: "#/", parent: {id: "300004"}},
	{id: "300004007", name: "Java receive task", iconClass: "icon-lock", path: "#/", parent: {id: "300004"}},
	{id: "300005", name: "监听", iconClass: "icon-lock", path: "#/", parent: {id: "100001008"}},
	{id: "300005001", name: "Execution listener", iconClass: "icon-lock", path: "#/", parent: {id: "300005"}},
	{id: "300005002", name: "Task listener", iconClass: "icon-lock", path: "#/", parent: {id: "300005"}},
	{id: "300006", name: "子流程", iconClass: "icon-lock", path: "#/", parent: {id: "100001008"}},
	{id: "300006001", name: "嵌入式子流程", iconClass: "icon-lock", path: "#/", parent: {id: "300006"}},
	{id: "300006002", name: "外部引用子流程", iconClass: "icon-lock", path: "#/", parent: {id: "300006"}},
	{id: "300007", name: "多实例", iconClass: "icon-lock", path: "#/", parent: {id: "100001008"}},
	{id: "300007001", name: "子流程", iconClass: "icon-lock", path: "#/", parent: {id: "300007"}},
	{id: "300007002", name: "用户任务", iconClass: "icon-lock", path: "#/", parent: {id: "300007"}},
	{id: "300007003", name: "脚本任务", iconClass: "icon-lock", path: "#/", parent: {id: "300007"}},
	
	{id: "400", name: "扩展", opened: true, iconClass: "icon-lock", path: "#/"},
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
	{id: "500004", name: "复杂", iconClass: "icon-lock", path: "#/", parent: {id: "500"}}
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