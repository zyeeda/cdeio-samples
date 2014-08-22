define(['jquery'], function($){
	return {
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
        }
    };
});
