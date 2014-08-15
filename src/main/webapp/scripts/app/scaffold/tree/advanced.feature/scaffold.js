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
        afterShowDialog: function(dialogType, v, data){
            var me = this;

            if ('add' === dialogType) {

                if (data.parent === undefined) {
                    //当前节点是根节点时
                    $('input[name="type"]', v.$el).val('省级节点');
                } else if (1 === data.parent.level) {
                    //当前节点是城市节点时
                    $('input[name="type"]', v.$el).val('市级节点');
                } else if (2 === data.parent.level) {
                    //当前节点是县城节点时
                    $('input[name="type"]', v.$el).val('县级节点');
                }
            } else if ('edit' === dialogType) {
                //设置页面中picker字段为不可编辑状态
                $('input[name="parent"]', v.$el).unbind().attr('disabled', true);
                $('#trigger-' + v.components[0].id, v.$el).unbind().attr('disabled', true);
            }
            //设置页面中的类型字段为不可编辑状态
            $('input[name="type"]', v.$el).attr('readonly', true);
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
                var me, tree, type;

                me = this;
                tree = me.feature.views['tree:body'].components[0];

                if (!targetNode) {
                    return;
                }else if (targetNode.level === 0) {
                    type = '省级节点';
                }else if (targetNode.level === 1) {
                    type = '市级节点';
                }else if (targetNode.level === 2) {
                    type = '县级节点';
                }else if (targetNode.level > 2) {
                    app.error('操作失败：禁止拖拽到县城节点下');
                    tree.reload();
                    return false;
                }

                me.feature.request({
                    type: 'put',
                    url: treeNodes[0].id,
                    data: {parent: targetNode, type: type}
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
                if (0 === data.level) {
                    $('input[name="type"]', view.$el).val('市级节点');
                }else if (1 === data.level) {
                    $('input[name="type"]', view.$el).val('县级节点');
                }else if (data.level >= 2) {
                    app.error('请选择省市');
                    return false;
                }
            }
        }
    };
});