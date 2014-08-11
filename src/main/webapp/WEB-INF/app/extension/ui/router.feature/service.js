var {createService} = require('coala/service');
var {mark}          = require('coala/mark');

var Router = com.zyeeda.coala.example.extension.ui.form.entity.Router;


exports.createService = function() {

	return {
        getById: mark('managers', Router).mark('tx').on(function (routerMgr, id) {
            return routerMgr.find(id);
        })
	};
};
