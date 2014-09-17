var {Class} = java.lang;
var mark = require('cdeio/mark').mark;
var json = require('cdeio/response').json;
var {createService} = require('cdeio/service');
var {Funnel, FunnelType} = com.zyeeda.cdeio.commons.funnel.entity;

exports.filters = {
    defaults: {
        '!funnelTypeFilter': []
    }
};
exports.entityLabel = '漏斗类型';

exports.labels = {
	feature: '路径',
    name: '类型'
};

exports.fieldGroups = {
	defaults: ['name', 'feature']
};

exports.operators = {
    // show: false,
    // edit: false
};

exports.picker = {
    grid: {
        columns: ['name']
    },
    beforeShowPicker: 'funnelBeforeShowPicker'
};

exports.hooks = {
    afterCreate: {
        defaults: mark('managers', Funnel).mark('tx').on(function(mgr, funnelType, req) {
            var baseSvc = createService();
            var typeMgr = baseSvc.createManager(Class.forName(funnelType.name));
            var list = typeMgr.getAll();
            var it = list.iterator();
            while(it.hasNext()) {
                var d = it.next();
                var ful = new Funnel();
                ful.setName(d.name);
                ful.setDataId(d.id);
                ful.setType(funnelType);
                mgr.save(ful);
            }
            return json(funnelType, exports.filters.defaults);
        })
    }
}


