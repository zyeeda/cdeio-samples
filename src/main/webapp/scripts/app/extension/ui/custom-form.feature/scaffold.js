define(function () {
    return {
        handlers: {
            customForm: function(){
                var customFormFeature, customFormView,
                    me = this,
                    grid = this.feature.views['grid:body'].components[0];

                customFormFeature = app.loadFeature('extension/ui/custom-form', {container: '<div></div>', ignoreExists: true});
                customFormFeature.done(function (feature) {
                    customFormView = feature.views['custom-form-view'];
                    app.showDialog({
                        view: customFormView,
                        title: '自定义表单',
                        onClose: function() {
                            feature.stop();
                        },
                        buttons: [{
                            label: '确定',
                            status: 'btn-primary',
                            fn: function() {

                            }
                        }]
                    });
                });
            }
        }
    };
});
