exports.paths = [
    {
        id: 'bootstrap.css',
        reg: '/bower_components/bootstrap/dist/css/bootstrap.min.css',
        release: 'styles/bootstrap.css'
    },
    {
        reg: /\/bower_components\/bootstrap\/dist\/fonts\/(.*)/,
        release: '/font/$1'
    },
    {
        id: 'jquery',
        reg: '/bower_components/jquery/dist/jquery.js',
        release: 'vendor/jquery/jquery.js',
    },
    {
        id: 'lodash',
        reg: '/bower_components/lodash/dist/lodash.js',
        release: 'vendor/lodash/lodash.js',
    },
    {
        id: 'bootstrap',
        reg: '/bower_components/bootstrap/dist/js/bootstrap.js',
        release: 'vendor/bootstrap/bootstrap.js',
        requires: ['jquery', 'bootstrap.css'],
    },
    {
        id: 'react',
        reg: '/bower_components/react/react.js',
        release: 'vendor/react/react.js',
    },
    {
        id: 'flux',
        reg: '/bower_components/flux/dist/Flux.js',
        release: 'vendor/flux/flux.js',
    },
    {
        id: 'colorvest',
        reg: '/bower_components/colorvest/dist/colorvest.js',
        release: 'vendor/colorvest/colorvest.js',
        requires: ['jquery', 'lodash', 'bootstrap', 'react', 'flux', 'index.css']
    }
];