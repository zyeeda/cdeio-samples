var {mark} 		    = require('coala/mark');
var {createManager} = require('coala/manager');

var {ArrayList}     = java.util;

var {EntityMetaResolver} = com.zyeeda.coala.web.scaffold;
var {AdvancedTree} 		 = com.zyeeda.coala.example.scaffold.tree.entity;

exports.createService = function () {
	return {
		list: mark('beans', EntityMetaResolver).mark('tx').on(function (resolver, entity, options) {
            var meta = resolver.resolveEntity(AdvancedTree),
                clasMgr = createManager(meta.entityClass),
                advancedTree,
                advancedTrees = new ArrayList(),
                advancedTreeList = [],
                i;

            if (options.filters) {
                advancedTrees = clasMgr.findByEntity(options);
            } else {
                advancedTrees = clasMgr.findByExample(entity, options);
            }

            for (i = 0; i < advancedTrees.size(); i ++) {
                advancedTree = advancedTrees.get(i);

                if (advancedTree.type === '省级节点') {
                    advancedTree.iconSkin = 'countryNode';
                } else if (advancedTree.type === '市级节点') {
                    advancedTree.iconSkin = 'cityNode';
                } else if (advancedTree.type === '县级节点') {
                    advancedTree.iconSkin = 'countyNode';
                }
                
                advancedTreeList.push(advancedTree);
            }

            return advancedTreeList;
        }),
		isEmpty: mark('managers', AdvancedTree).on(function (treeMgr, advancedTree) {
			var subClassifyCount = treeMgr.getSubAdvancedTreeCountById({ advancedTreeId: advancedTree.getId() }, 1);
			
			return subClassifyCount === 0;
		})
	};
};