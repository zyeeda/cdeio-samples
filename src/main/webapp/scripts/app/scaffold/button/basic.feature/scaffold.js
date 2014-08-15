define([
    'jquery',
    'coala/core/loader-plugin-manager'
], function($, LoaderManager) {
    return {
        renderers: {
            modifyCompleted: function(data) {
                var statusMap = {
                    false: '待办',
                    true: '已办'
                };
                return statusMap[data];
            }
        }
    };
});
