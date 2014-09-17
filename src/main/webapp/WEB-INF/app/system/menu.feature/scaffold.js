var {json} = require('cdeio/response');
var data = require('system/menu.feature/data');

exports.doWithRouter = function(router) {
    router.get('all', function(request) {
    	return json(data);
    });
};