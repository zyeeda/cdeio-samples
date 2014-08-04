var mark = require('coala/mark').mark;

var Basic = com.zyeeda.coala.example.extension.service.entity.Basic;

exports.createService = function() {

	return {
		testSave: mark('managers', Basic).mark('tx').on(function(BasicMgr) {
			basic = new Basic();
			basic.id = '5555555';
			basic.name = 'testid';
			// basic.description = '11111';
			BasicMgr.merge(basic);
		})
	};
};