var mark = require('cdeio/mark').mark;
var json = require('cdeio/response').json;

var createService = require('cdeio/scaffold/service').createService;
var createManager = require('cdeio/manager').createManager;
var {Funnel, FunnelType, FunnelData} = com.zyeeda.cdeio.commons.funnel.entity;
var {Account} = com.zyeeda.cdeio.commons.organization.entity;

exports.enableFrontendExtension = true;

exports.filters = {
    defaults: {
        '!funnelFilter': [],
        'funnelTypeFilter': ['name', 'feature'],
        'accountFilter': ['id', 'realName', 'accountName', 'mobile', 'department'],
        'departmentFilter': ['id', 'name'],
        '!funnelDataFilter': [],
        '!funnelDataTypeFilter': []
    }
};
exports.entityLabel = '漏斗';

exports.labels = {
	'type.name': '类型',
	'type.feature': '路径',
    type: '类型',
    name: '数据值',
    dataId: '数据Id',
    accounts: '关联用户',
    datas: '关联数据',
    dataType: '数据类型'
};


exports.operators = {
	// show: false,
    // edit: false
};

exports.fieldGroups = {
	defaults: [
		{name: 'type', type: 'dropdown', textKey: 'feature', url: 'invoke/scaffold/funnel/funnel-type'}, 
		{name: 'dataId', type: 'grid-picker', source: 'funnel/funnel-type'},
        {name: 'accounts', type: 'inline-grid', multiple: true, crossPage: true},
        {name: 'datas', type: 'inline-grid', multiple: true, crossPage: true}
	],
	show: [
		'type', 'name',
		{name: 'datas', type: 'inline-grid'},
		{name: 'accounts', type: 'inline-grid'}
	],
	edit: [
        {name: 'accounts', type: 'inline-grid', multiple: true, crossPage: true},
		{name: 'datas', type: 'inline-grid', multiple: true, crossPage: true}
	]
};

exports.grid = {
	columns: [{name: 'type.name', header: '类型'}, {name: 'type.feature', header: '路径'}, 'name', 'dataId']
}

exports.picker = {
    grid: {
        columns: [{name: 'type.name', header: '类型'}, {name: 'type.feature', header: '路径'}, 'name', 'dataId']
    }
};

exports.hooks = {
	afterCreate: {
        defaults: mark('managers', Funnel).mark('tx').on(function(mgr, funnel, req) {
        	var funnelType = new FunnelType();
        	funnelType.setId(req.params.type);
    		funnel.setType(funnelType);
    		funnel.setDataId(req.params.dataId.id);
    		funnel.setName(req.params.dataId.name);
    		funnel = mgr.merge(funnel);
    		return json(funnel, exports.filters.defaults);
        })
    }
}

exports.doWithRouter = function(router) {
    router.get('/test', mark('managers', Funnel, FunnelData, Account).mark('tx').on(function (funMgr, fdMgr, accMgr, request) {
        var fun = funMgr.find('8a81819a478f314601478f6c0ebd0032');
        fun.accounts.add(accMgr.find('2'));
        fun.datas.add(fdMgr.find('8a81819a47903a5d0147906cb914001a'));
        return json({results: fun}, exports.filters.defaults);
    }));
}