##树(高级配置)
---------------------------------------

####1. 设置页面显示为树

	//显示类型为树
	exports.style = 'tree';

####2. 配置树的基本属性

	//树配置
	exports.tree = {
	    isAsync: true,
	    root: '中国',
	    rootNodeSetting: {iconSkin: 'countryNode', nocheck: true},
	    edit: {
	        drag: {
	            autoExpandTrigger: true
	        },
	        showRemoveBtn: false,
	        showRenameBtn: false
	    },
	    view: {
	        selectedMulti: false,
	        showLine: true
	    },
	    callback: {
	        'onDrop': 'cityMoved'
	    },
	    events: {
	        'scaffold/tree/advanced#tree:onClick': 'cityClicked'
	    },
	    defaultOrder: 'name-asc'
	};

#####说明：

#####1. `isAsync` : 是否异步加载树的数据;

#####2. `root` : 根节点的名称;

#####3. `autoExpandTrigger` : 拖拽时父节点自动展开是否触发 onExpand 事件回调函数;

#####4. `showRemoveBtn` : 是否显示删除按钮;

#####5. `showRenameBtn` : 是否显示编辑名称按钮;

#####6. `selectedMulti` : 是否允许同时选中多个节点;

#####7. `showLine` : 是否显示节点之间的连线。

#####8. `onDrop` : 用于捕获节点拖拽操作结束的事件回调函数;

#####9. `onClick` : 用于捕获节点被点击的事件回调函数;

#####10. `defaultOrder` : 排序依据

想了解更多，请参考[zTree的官方API文档](http://www.ztree.me/v3/api.php)

####3. 回调函数

#####回调函数写在前台的同名scaffold.js文件中的handles中。

#####1. `'onDrop': 'cityMoved'`

#####代码：

	handlers: {
        cityClicked: function(feature, view, tree, e, treeId, treeNode) {

            app.success('您点击了' + treeNode.name);
        }
    }

#####2. `'scaffold/tree/advanced#tree:onClick': 'cityClicked'`

#####代码：

	handlers: {
		cityMoved: function(e, treeId, treeNodes, targetNode) {
			......
    	},
    	toggleMove: function(e) {
			......
    	}
    }



