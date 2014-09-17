define({
    ssoProviderUrl: 'provider/signin',

    disableAuthz: true,
    loadSettings: true,

    whitelist: [
        'cdeio/viewport',
        'cdeio/account-menu',
        'cdeio/header',
        'cdeio/menu',
        'profile/viewport',
        'profile/account-menu'
    ],

    reportParams: {
        'birt-examples/custom-params': {paramViewName: 'params', defaultParams: {country: ''}},
        'birt-examples/params': {defaultParams: {country: ''}}
    },

    urlPrefix: function(app, path) {
        if ('/about' === path) {
            return 'invoke' + path;
        }
        return 'invoke/scaffold/' + path;
    }
});
