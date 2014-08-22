define([
    'jquery'
], function ($) {
    return {
        //打开增加、编辑、查看页面后调的方法
        afterShowDialog: function(dialogType, view, data){
            var me = this;
            if ("add" === dialogType) {
                //当前用户和时间
                me.feature.request({
                    url: 'get-current-user-and-date',
                    type: 'get'
                }).done(function (result){
                    //默认当前用户和时间
                    $('input[name= "applyTime"]', view.$el).val(result.applyTime);
                    $('input[name= "applicant"]', view.$el).val(result.applicant);
                });
            }
        }
    };
});
