define([
    'jquery',
    'scripts/cdeio/vendors/jquery/jquery.magnific-popup.js'
], function($) {
    return {
        showChangePasswordForm: function() {
            $('button[id$="change-password-btn"]').addClass('view-hide');
            $('button[id$="password"]').each(function(e) {
                $(this).removeClass('view-hide');
            });
            
            var app = this.feature.module.getApplication(), me = this;
            var accFeature = app.loadFeature('system/scaffold:accounts');
            accFeature.done(function(feature) {
                var view = feature.views['form:changePassword'];
                view.$el = $('.info-password');
                view.render();

                $('button[id$="quit-password"]').on('click', function() {
                    $('button[id$="change-password-btn"]').removeClass('view-hide');
                    $('button[id$="password"]').each(function(e) {
                        $(this).addClass('view-hide');
                    });
                    $('.c-action-form-changePassword').remove();
                });

                $('button[id$="reset-password"]').on('click', function() {
                    $('input[type="password"]').attr('');
                });

                $('button[id$="submit-password"]').on('click', function() {
                    var data = view.getFormData();
                    feature.request({
                        url: 'password', 
                        type: 'put',
                        data: data,
                        success: function(d) {
                            console.log(d);
                            app.success('密码修改成功');
                    }});
                });
                // app.showDialog({
                //     view: view,
                //     title: '修改密码',
                //     buttons: [{
                //         label: '确定',
                //         status: 'btn-primary',
                //         fn: function() {
                //             var data = view.getFormData();
                //             // if(data.oldPassword === ''){
                //             //     app.error('原密码不可为空');
                //             //     return false;
                //             // } else if(data.newPassword === ''){
                //             //     app.error('新密码不可为空');
                //             //     return false;
                //             // } else if(data.newPassword.length < 6 || data.newPassword.length > 12){
                //             //     app.error('新密码要由6到12个字符组成');
                //             //     return false;
                //             // } else if(data.newPassword != data.newPassword2){
                //             //     app.error('两次密码不一致');
                //             //     return false;
                //             // }
                //             feature.request({
                //                 url: 'password', 
                //                 type: 'put',
                //                 data: data,
                //                 success: function(d) {
                //                     console.log(d);
                //                     app.success('密码修改成功');
                //             }});
                //         }
                //     }]
                // });
            });
        },
    };
});
