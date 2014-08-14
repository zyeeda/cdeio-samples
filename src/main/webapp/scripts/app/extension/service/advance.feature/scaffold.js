define([
    'jquery'
], function($) {
	return {
        handlers: {
            changePassword: function() {
                var me,
                    grid, view,
                    selected;

                me = this;
                grid = me.feature.views['grid:body'].components[0];
                selected = grid.getSelected();
                view = me.feature.views['form:changePassword'];

                /**
                 * 清空表单数据
                 * 也可用 view.setFormData({});
                 */
                view.model.clear();

                app.showDialog({
                    view: view,
                    title: '修改密码',
                    buttons: [{
                        label: '确定',
                        status: 'btn-primary',
                        fn: function() {
                            if (view.isValid()) {
                                data = view.getFormData();

                                $.ajax({
                                    url: 'invoke/extension/diyrouter/password/' + selected.id,
                                    type: 'put',
                                    data: data,
                                    success: function(result) {
                                        app.success('密码修改成功');

                                        /**
                                            在返回数据中包含 violations (未验证通过) 时保持窗口不被关闭
                                            在返回数据中不包含 violations (未验证通过) 时窗口自动关闭
                                         */
                                        app._modalDialog.modal.modal('hide');
                                    }
                                });
                            }
                            return false;
                        }
                    }]
                });
            }
        }
    };
});
