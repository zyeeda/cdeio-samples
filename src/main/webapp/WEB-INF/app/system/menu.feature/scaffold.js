var {json} = require('coala/response');
var data = require('system/menu.feature/menu-data');

exports.doWithRouter = function(router) {
    router.get('all', function(request) {
    	return json(data);
    });
};