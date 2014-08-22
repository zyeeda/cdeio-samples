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
        'statistics/energy-station-count-info': {paramViewName: 'params', defaultParams: {'companyName': '全部'}},
        'statistics/energy-collector-small-count-info': {paramViewName: 'params', defaultParams: {'companyName': '全部'}},
        'statistics/current-voltage-count-info': {paramViewName: 'params', defaultParams: {'companyName': '全部'}},
        'statistics/energy-collector-comm-time-count-info': {paramViewName: 'params', defaultParams: {'companyName': '全部'}},
        'statistics/energy-collector-model-count-info': {paramViewName: 'params', defaultParams: {'companyName': '全部'}}
    },

    urlPrefix: function(app, path) {
        if ('/about' === path) {
            return 'invoke' + path;
        }
        return 'invoke/scaffold/' + path;
    }
});
