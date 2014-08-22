define(['jquery'], function($){
	return {
        beforeShowDialog: function(dialogType, v){
            var me, tree, nodes, node;

            me = this;

            if ('add' === dialogType) {
                tree = me.feature.views['tree:body'].components[0];
                nodes = tree.getSelectedNodes();

                if (nodes.length > 0) {
                    node = nodes[0];

                    if (3 === node.level) {
                        app.error('请选择省市');

                        return false;
                    }
                }
            }

            return true;
        },
		handlers: {
            cityClicked: function(feature, view, tree, e, treeId, treeNode) {

                if (treeNode.level > 2) {
                    //增加按钮不可点样式处理
                    $('button[id="' + feature.views["tree:toolbar"].cid + '-add"]').attr('disabled', true);
                } else {
                    //增加按钮可点样式处理
                    $('button[id="' + feature.views["tree:toolbar"].cid + '-add"]').attr('disabled', false);
                }

                app.success('您点击了' + treeNode.name);
            },
            cityMoved: function(e, treeId, treeNodes, targetNode) {
                var me, tree;

                me = this;
                tree = me.feature.views['tree:body'].components[0];

                if (!targetNode) {
                    return;
                }else if (targetNode.level > 2) {
                    app.error('操作失败：禁止拖拽到县城节点下');
                    tree.reload();
                    return false;
                }

                me.feature.request({
                    type: 'put',
                    url: treeNodes[0].id,
                    data: {parent: targetNode}
                }).done(function() {
                    app.success('操作成功');
                    tree.reload();
                });

                return true;
            },
            toggleMove: function(e) {
                var me, tree, app, $el;

                me = this;
                tree = me.feature.views['tree:body'].components[0];
                app = me.feature.module.getApplication();
                $el = $(e.currentTarget);

                if (tree.setting.edit.enable) {
                    tree.setting.edit.enable = false;
                    $el.toggleClass('btn-danger');
                } else {
                    tree.setting.edit.enable = true;
                    $el.toggleClass('btn-danger');
                }
                return true;
            },
            cityBeforePickerConfirm: function(view, data) {
                if (data.level >= 2) {
                    app.error('请选择省市');
                    return false;
                }
            }
        }
    };
});
