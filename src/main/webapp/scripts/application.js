define([
    'jquery',
    'underscore',
    'coala/coala',
    'coala/applications/default',
    'coala/core/config',
    'coala/vendors/ace-elements',
    'coala/vendors/ace'
], function($, _, coala, createDefault, config) {

    return function(options) {
        $.ajaxSetup({
            cache: false
        });

        var app, deferred = $.Deferred();

        options = _.extend(options, { useDefaultHome: false });
        app = createDefault(options);
        app.config = config;
        
        app.done(function() {
            if (location.hash) {
                app.startFeature('main/viewport', { container: $(document.body), ignoreExists: true }).done(function() {
                    deferred.resolve();
                });
            } else {
                deferred.resolve();
            }
        });

        app.addPromise(deferred.promise());
        return app;
    };

});

