var mark = require('cdeio/mark').mark;
var json = require('cdeio/response').json;
var {FunnelData, FunnelDataType} = com.zyeeda.cdeio.commons.funnel.entity;

exports.enableFrontendExtension = true;

exports.filters = {
    defaults: {
        '!funnelDataFilter': [],
        'funnelDataTypeFilter': ['name', 'feature'],
        '!funnelFilter': ['accounts'],
        '!funnelTypeFilter': []
    }
};

exports.entityLabel = '漏斗数据';

exports.labels = {
	'name': '名称',
	'dataType.name': '类型',
	'dataType.feature': '路径',
    dataType: '类型',
    dataId: '数据Id'
};


exports.operators = {
	// show: false,
    // edit: false
};

exports.fieldGroups = {
	defaults: [
		{name: 'dataType', type: 'dropdown', textKey: 'feature', url: 'invoke/scaffold/funnel/funnel-data-type'}, 
		{name: 'dataId', type: 'grid-picker', source: 'funnel/funnel-data-type'}
	],
	show: [
		'dataType', 'name', 'dataId'
	],
};

exports.grid = {
	columns: [{name: 'dataType.name', header: '类型'}, {name: 'dataType.feature', header: '路径'}, 'name', 'dataId']
}

exports.picker = {
    grid: {
        columns: [{name: 'dataType.name', header: '类型'}, 'name', 'dataId']
    }
};

exports.hooks = {
	afterCreate: {
        defaults: mark('managers', FunnelData).mark('tx').on(function(mgr, funnelData, req) {
        	var funnelDataType = new FunnelDataType();
        	funnelDataType.setId(req.params.dataType);
    		funnelData.setDataType(funnelDataType);
    		funnelData.setDataId(req.params.dataId.id);
    		funnelData = mgr.merge(funnelData);
    		return json(funnelData, exports.filters.defaults);
        })
    }
}
