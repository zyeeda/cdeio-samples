var {mark} 		    = require('cdeio/mark');
var {createManager} = require('cdeio/manager');

var {ArrayList}     = java.util;

var {EntityMetaResolver} = com.zyeeda.cdeio.web.scaffold;
var {AdvancedTree} 		 = com.zyeeda.cdeio.example.extension.tree.entity;

exports.createService = function () {
	return {
        list: mark('beans', EntityMetaResolver).mark('tx').on(function(resolver, entity, options) {
            var meta = resolver.resolveEntity(AdvancedTree),
                clasMgr = createManager(meta.entityClass),
                iconTree,
                iconTrees = new ArrayList(),
                iconTreeList = [],
                i;

            if (options.filters) {
                iconTrees = clasMgr.findByEntity(options);
            } else {
                iconTrees = clasMgr.findByExample(entity, options);
            }

            for (i = 0; i < iconTrees.size(); i++) {
                iconTree = iconTrees.get(i);

                if (iconTree.type === '省级节点') {
                    iconTree.iconSkin = 'countryNode';
                } else if (iconTree.type === '市级节点') {
                    iconTree.iconSkin = 'cityNode';
                } else if (iconTree.type === '县级节点') {
                    iconTree.iconSkin = 'countyNode';
                }

                iconTreeList.push(iconTree);
            }

            return iconTreeList;
        })
	};
};
