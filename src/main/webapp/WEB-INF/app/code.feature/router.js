var logger          = require('ringo/logging').getLogger(module.id);
var {json, html}    = require('cdeio/response');
var {mark}          = require('cdeio/mark');
var {createRouter}  = require('cdeio/router');

var router = exports.router = createRouter();

router.get('/', mark('services', 'code').on(function (svc, request) {
	var servletRequest = request.env.servletRequest;
	var projectPath = request.env.servletRequest.getRealPath('/');

    return json(svc.test(projectPath, request.queryParams.feature, request.queryParams.scaffold));
}));
