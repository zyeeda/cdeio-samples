var {mark} 		     = require('coala/mark');

var {AdvancedButton} = com.zyeeda.coala.example.scaffold.button.entity;

exports.createService = function () {
	return {
		updateStatus: mark('managers', AdvancedButton).mark('tx').on(function (advancedButtonMgr, id) {
            var advancedButton;

            advancedButton = advancedButtonMgr.find(id);

            advancedButton.status = '2';

            return advancedButton;
		})
	};
};