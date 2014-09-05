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

    reportParams: {
        'birt-examples/custom-params': {paramViewName: 'params', defaultParams: {country: ''}}
    },

    urlPrefix: function(app, path) {
        if ('/about' === path) {
            return 'invoke' + path;
        }
        return 'invoke/scaffold/' + path;
    }
});
