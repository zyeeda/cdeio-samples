define([
    'jquery',
    'underscore',
    'cdeio/core/util',
    'cdeio/components/picker-base'
], function($, _, util, Picker) {
    return {
        handlers: {
            typeChange: function(view, data, a, b) {
                // var type = $('input[name="type"]').parent().find('.select2-chosen').text();
                //    $.get(view.feature.module.getApplication().url(type + '/configuration/picker'), function(data) {
                //        // var options = _.extend(view.components[1].options, data);
                //        // var picker = new Picker.Picker(options);
                //        // picker.render();
                //    });
                return true;
            },
            funnelDataBeforeShowPicker: function(view, data) {
                var type = $('input[name="dataType"]').parent().find('.select2-chosen').text();
                if (type.trim() === "") {
                    app.error('请先选择类型!');
                    return false;
                }
                util.changePickerData(view, type);
                return true;
            }
        }
    };
});
