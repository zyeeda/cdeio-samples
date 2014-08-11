var {SecurityUtils}     = org.apache.shiro;

var {mark}              = require('coala/mark');
var {json}              = require('coala/response');

var {Date}             = java.util;
var {SimpleDateFormat} = java.text;

exports.entityLabel = '路由';

exports.enableFrontendExtension = true;

exports.filters = {
    defaults: {
        '!routerFilter': ''
    }
};

exports.labels = {
    name: '名称',
    applicant: '申请人',
    applyTime: '申请时间',
    description: '描述'
};

exports.fieldGroups = {
	defaults: ['name', 'applicant', 'applyTime', 'description']
};

exports.picker = {
    grid: {
        columns: ['name', 'applicant', 'applyTime', 'description']
    },
    callback: 'routerPickerCallback',
    beforePickerConfirm: 'beforeRouterPickerConfirm',
    afterPickerConfirm: 'afterRouterPickerConfirm',
    beforeShowPicker: 'beforeRouterShowPicker'
};

exports.doWithRouter = function(router) {
    //取当前用户和时间
    router.get('/get-current-user-and-date', mark('services', 'extension/ui/router').on(function (routerSvc) {
        var subject = SecurityUtils.getSubject(),
            user = subject.getPrincipal(),
            date = new Date(),
            sd= new SimpleDateFormat("yyyy-MM-dd"),
            result = {};

            result.applicant = user.accountName;
            result.applyTime = sd.format(date);
        return json(result);
    }));
};
