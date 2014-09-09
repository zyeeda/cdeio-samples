define([
    'underscore',
    'backbone',
    'config'
], function (_, Backbone, config) {
    return {
        routes: {
            '': 'showHome',
            'profile': 'showProfile',
            'feature/*name': 'showMenu',
            'report/*name': 'showReport',
            'code/*name': 'showCode'
        },

		showMenu: function(name) {
            this._showFeature(name);
		},

        showReport: function(name){
            var reportParamsFeature, parameters = {report: name};

            reportParamsFeature = app.loadFeature('commons/report-params', {container: '<div></div>', ignoreExists: true});

            reportParamsFeature.done(function (reportfeature) {
                if(config.reportParams && config.reportParams[name] && config.reportParams[name].paramViewName){
                    parameters.paramsView = reportfeature.views[config.reportParams[name].paramViewName];
                }

                if(config.reportParams && config.reportParams[name] && config.reportParams[name].defaultParams){
                    parameters.params = config.reportParams[name].defaultParams;
                }

                app.startFeature('coala:report', parameters);

                app.viewport.inRegionViews.breadcrumbs.$('view-source').show();
            });

            this._activateMenu(location.hash);
        },

        showHome: function() {
            me = this;
            return app.startFeature('main/viewport', { container: $(document.body), ignoreExists: true }).done(function () {
                me._activateMenu('#');
                app.startFeature('main/home', {container: $(document).body, ignoreExists: true});
            });
        },

        showProfile: function() {
            app.startFeature('profile/viewport', { container: $(document.body), ignoreExists: true });
        },

        showCode: function(name) {
            scaffold = false;
            url = name;
            if (name.indexOf('scaffold:') !== -1) {
                scaffold = true;
                url = name.replace('scaffold:', '');
            }
            var show = _.bind(function() {
                // 控制查看代码按钮
                var breadcrumbs = app.viewport.inRegionViews.breadcrumbs;
                var source = breadcrumbs.$('view-source');
                var example = breadcrumbs.$('view-example');
                source.hide();
                example.show();

                app.startFeature('code', {codeFeature: url, scaffold: scaffold, container: $(document).body, ignoreExists: true});
            });
            show();
        },

        _showFeature: function(featurePath) {
            var show = _.bind(function() {
                app.startFeature(featurePath, { ignoreExists: true });
                this._activateMenu(location.hash);
                app.viewport.inRegionViews.breadcrumbs.$('view-source').show();
            }, this);

            // if (app.viewport.module.baseName !== 'coala-features') {
            //     this.showHome().done(show);
            //     return;
            // }
            show();
        },

        _activateMenu: function(hash) {
            var menuItem = app.menuFeature.activateMenu(hash);
            if (menuItem) {
                app.viewport.updateNavigator(menuItem);
            }
        }

    };
});
