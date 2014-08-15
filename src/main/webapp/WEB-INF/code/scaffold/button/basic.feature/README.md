##操作按钮(基础配置)

###设置操作按钮属性

	//设置操作按钮
	exports.operators = {
	    //默认按钮
	    add: {label: '添加', icon: 'icon-plus', group: '10-add', style: 'btn-success', show: 'always', order: 100},
	    show: {label: '查看', icon: 'icon-eye-open', group: '20-selected', style: 'btn-grey', show: 'single-selected', order: 100},
	    edit: {label: '编辑', icon: 'icon-edit', group: '20-selected', style: 'btn-primary', show: 'single-selected', order: 200},
	    del: {label: '删除', icon: 'icon-minus', group: '20-selected', style: 'btn-danger', order: 300},
	    refresh: {label: '刷新', icon: 'icon-refresh', group: '30-refresh', style: 'btn-purple', show: 'always', order: 100}
	};

####详细说明:

#####提示：增删改查以及刷新按钮如没有特殊需求，推荐使用默认设置，不需写在`exports.operators`中。

1. `label`:  按钮上显示的文本;

2. `icon` :  按钮的背景图标，背景图标样式参考http://fontawesome.io/3.2.1/icons/;

3. `style`:  按钮的样式，按钮样式参考http://www.bootcss.com/;

4. `group`:  按钮的分组;

5. `order`:  按钮在所属分组中的前后排序;

6. `show` :  按钮显示方式(1. `always`:总是显示；2. `selected`: 选中列表数据时显示；3. `unselected`: 列表数据没有被选中时显示).
