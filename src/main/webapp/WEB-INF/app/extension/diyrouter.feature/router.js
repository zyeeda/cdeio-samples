var logger          = require('ringo/logging').getLogger(module.id);
var _               = require('underscore');
var {json}          = require('coala/response');
var {mark}          = require('coala/mark');
var {createRouter}  = require('coala/router');

var {JSONArray}     = org.json;
var {JSONObject}    = org.json;

var router = exports.router = createRouter();

exports.filters = {
    defaults: {
        '!personFilter': ''
    }
};

router.put('/password/:id', mark('services', 'extension/diyrouter').on(function (svc, request, id) {
    var data,
        result,
        filter;

    data = request.params;
    result = svc.changePassword(data, id);
    filter = exports.filters.defaults;

    if (result.violations) {
        return json(result, _.extend({ status: 422 }, filter));
    }

    return json(result, filter);
}));
