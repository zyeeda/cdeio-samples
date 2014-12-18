exports.path = [
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
        release: 'vendor/jquery/jquery.js'
    },
    {
        id: 'bootstrap',
        reg: '/bower_components/bootstrap/dist/js/bootstrap.js',
        release: 'vendor/bootstrap/bootstrap.js',
        requires: ['jquery', 'bootstrap.css'],
    },
    {
        id: 'underscore',
        reg: '/bower_components/lodash/dist/lodash.underscore.js',
        release: 'vendor/underscore/underscore.js',
    },
    {
        id: 'backbone',
        reg: '/bower_components/backbone/backbone.js',
        release: 'vendor/backbone/backbone.js',
        requires: ['jquery', 'underscore'],
    },
    {
        id: 'react',
        reg: '/bower_components/react/react.js',
        release: 'vendor/react/react.js',
    },
    {
        id: 'colorvest',
        reg: '/bower_components/colorvest/colorvest.js',
        release: 'vendor/colorvest/colorvest.js'
    }
];