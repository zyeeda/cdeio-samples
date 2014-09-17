var {Class} = java.lang;
var mark = require('cdeio/mark').mark;
var json = require('cdeio/response').json;
var {createService} = require('cdeio/service');
var {FunnelData, FunnelDataType} = com.zyeeda.cdeio.commons.funnel.entity;

exports.filters = {
    defaults: {
        '!funnelDataTypeFilter': []
    }
};

exports.entityLabel = '漏斗数据类型';

exports.labels = {
	feature: '路径',
    name: '类型'
};

exports.fieldGroups = {
	defaults: ['name', 'feature']
};

exports.picker = {
    grid: {
        columns: ['name']
    },
    beforeShowPicker: 'funnelDataBeforeShowPicker'
};

exports.hooks = {
    afterCreate: {
        defaults: mark('managers', FunnelData).mark('tx').on(function(mgr, funnelDataType, req) {
            var baseSvc = createService();
            var typeMgr = baseSvc.createManager(Class.forName(funnelDataType.name));
            var list = typeMgr.getAll();
            var it = list.iterator();
            while(it.hasNext()) {
                var d = it.next();
                var fulData = new FunnelData();
                fulData.setName(d.name);
                fulData.setDataId(d.id);
                fulData.setDataType(funnelDataType);
                mgr.save(fulData);
            }
            return json(funnelDataType, exports.filters.defaults);
        })
    }
}

