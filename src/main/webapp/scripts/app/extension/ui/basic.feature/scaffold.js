define([
    'jquery',
    'coala/core/loader-plugin-manager'
], function ($, LoaderManager) {
    return {
        renderers: {
            modifyStatus: function(data) {
               var modifyStatusMap = {
                    '1': '好',
                    '2': '坏'
                };
                return modifyStatusMap[data];
            }
        },
        handlers: {
            trash: function () {
                app.info('这是个回收站按钮');
            }
        }
    };
});
