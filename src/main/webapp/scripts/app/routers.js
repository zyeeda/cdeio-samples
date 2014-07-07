define([
    'underscore',
    'backbone'
], function(_, Backbone) {
    return {
        routes: {
            '': 'showHome',
            'profile': 'showProfile',
            'feature/*name': 'showMenu'
        },

		showMenu: function(name) {
            this._showFeature(name);
		},

        showHome: function() {
            return app.startFeature('coala:viewport', { container: $(document.body), ignoreExists: true }).done(function () {
                if (location.hash) {
                    return;
                }
                app.startFeature('main/home');
            });
        },

        showProfile: function() {
            app.startFeature('profile/viewport', { container: $(document.body), ignoreExists: true });
        },

        _showFeature: function(featurePath) {
            var show = _.bind(function() {
                app.startFeature(featurePath, { ignoreExists: true });
                this._activateMenu(location.hash);
            }, this);

            if (app.viewport.module.baseName !== 'coala-features') {
                this.showHome().done(show);
                return;
            }

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
