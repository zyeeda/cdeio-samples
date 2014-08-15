var {mark} 		= require('coala/mark');
var {BasicTree} = com.zyeeda.coala.example.scaffold.tree.entity;

exports.createService = function () {
	return {
		isEmpty: mark('managers', BasicTree).on(function (treeMgr, basicTree) {
			var subClassifyCount = treeMgr.getSubBasicTreeCountById({ basicTreeId: basicTree.getId() }, 1);
			
			return subClassifyCount === 0;
		})
	};
};