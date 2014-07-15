define({
    layout: {
        regions: {
            complex: 'complex',
            simple: 'simple',
            simple2: 'simple2',
            left: 'left',
            'left-one': 'left-one',

            regular: 'regular',
            'with-tab': 'with-tab',
            'tab-fixed': 'tab-fixed'
        }
    },

    views: [{
        name: 'simple', region: 'simple'
    },{
        name: 'simple2', region: 'simple2'
    },{
        name: 'left', region: 'left'
    },{
        name: 'left-one', region: 'left-one'
    },{
        name: 'regular', region: 'regular'
    },{
        name: 'with-tab', region: 'with-tab'
    },{
        name: 'tab-fixed', region: 'tab-fixed'
    }]
});
