define(['jquery'], function($) {
    return {
        beforeShowDialog: function(dialogType, v){
            var me = this;
            //打开编辑页面前验证状态是否为待办
            if('edit' === dialogType){
                var grid = me.feature.views['grid:body'].components[0],
                    data = grid.getSelected().toJSON();
                //状态（1 : 待办, 2: 已办）
                if (data.status && '1' !== data.status) {
                    app.error('请选择状态为待办的事项');
                    return false;
                }
            }
            return true;
        },
        afterShowDialog: function(dialogType, view, data){
            if ('add' === dialogType) {
                //新增页面状态设置为只读
                $('input[name="status"]', view.$el).attr('disabled', true);
            }
        },
        renderers: {
            modifyStatus: function(data) {
                var statusMap = {
                    1: '待办',
                    2: '已办'
                };
                return statusMap[data];
            }
        },
        handlers: {
            //删除验证
            beforeDel: function (gridView, grid, selected) {
                if ('1' !== selected.status) {
                    app.error('请选择状态为待办的事项');
                    return false;
                }
                return true;
            },
            //标记完成
            modifyStatus: function () {
                var me, grid, selected, data;

                me = this;
                grid = me.feature.views['grid:body'].components[0];
                selected = grid.getSelected();
                data = selected.toJSON();

                //状态（1: 待办, 2: 已办
                if ('1' !== data.status) {
                    app.error('请选择状态为待办的事项');
                    return;
                }

                me.feature.request({
                    url: 'update-status',
                    type: 'put',
                    data: data
                }).done(function(){
                    grid.refresh();
                    app.success('状态已变更为已办');
                });
            },
            //按钮一
            buttonOne: function () {
                app.success('按钮一被点击');
            },
            //按钮二
            buttonTwo: function () {
                app.success('按钮二被点击');
            },
            //按钮三
            buttonThree: function () {
                app.success('按钮三被点击');
            }
        }
    };
});
