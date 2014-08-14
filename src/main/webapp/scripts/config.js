define({
    ssoProviderUrl: 'provider/signin',

    disableAuthz: true,
    loadSettings: true,

    whitelist: [
        'coala/viewport',
        'coala/account-menu',
        'coala/header',
        'coala/menu',
        'profile/viewport',
        'profile/account-menu'
    ],

    urlPrefix: function(app, path) {
        if ('/about' === path || '/extension/diyrouter' === path) {
            return 'invoke' + path;
        }
        return 'invoke/scaffold/' + path;
    }
});
