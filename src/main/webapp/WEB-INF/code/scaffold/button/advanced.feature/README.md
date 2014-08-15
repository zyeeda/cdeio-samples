##操作按钮(高级配置)

###1. 在后台定义按钮

	//设置操作按钮
	exports.operators = {
	    //默认按钮
	    add: {label: '添加', icon: 'icon-plus', group: '10-add', style: 'btn-success', show: 'always', order: 100},
	    show: {label: '查看', icon: 'icon-eye-open', group: '20-selected', style: 'btn-grey', show: 'single-selected', order: 100},
	    edit: {label: '编辑', icon: 'icon-edit', group: '20-selected', style: 'btn-primary', show: 'single-selected', order: 200},
	    del: {label: '删除', icon: 'icon-minus', group: '20-selected', style: 'btn-danger', order: 300},
	    refresh: {label: '刷新', icon: 'icon-refresh', group: '30-refresh', style: 'btn-purple', show: 'always', order: 100},
	    //另一个分组的按钮
	    buttonOne: {label: '按钮一', icon: 'icon-comment-alt', group: '40-other', style: 'btn-yellow', show: 'always', order: 300},
	    buttonTwo: {label: '按钮二', icon: 'icon-comment', group: '40-other', style: 'btn-grey', show: 'single-selected', order: 200},
	    buttonThree: {label: '按钮三', icon: 'icon-comments', group: '40-other', style: 'btn-light', order: 100},
	    //自定义按钮
	    modifyStatus: {label: '已办', icon: 'icon-check', group: '50-other', style: 'btn-pink', show: 'always'},
	};

####详细说明:

#####提示：增删改查以及刷新按钮如没有特殊需求，推荐使用默认设置，不需写在`exports.operators`中。

1. `label`:  按钮上显示的文本;

2. `icon` :  按钮的背景图标，背景图标样式参考http://fontawesome.io/3.2.1/icons/;

3. `style`:  按钮的样式，按钮样式参考http://www.bootcss.com/;

4. `group`:  按钮的分组;

5. `order`:  按钮在所属分组中的前后排序;

6. `show` :  按钮显示方式(1. `always`:总是显示；2. `selected`: 选中列表数据时显示；3. `unselected`: 列表数据没有被选中时显示).


###2. 自定义按钮

**注意：按钮事件的方法名要和按钮定义的方法名一致**

#####1. 首先在`exports.operators`中定义按钮的名称及属性
	
	//设置操作按钮
	exports.operators = {
	    //自定义按钮
	    modifyStatus: {label: '已办', icon: 'icon-check', group: '50-other', style: 'btn-pink', show: 'always'},
	};
	
#####2. 在前台scaffold.js文件中定义按钮事件

	define(['jquery'], function ($) {
	    return {
	        handlers: {
	            modifyStatus: function () {
	            	......
	            }
	        }
	    };
	});




