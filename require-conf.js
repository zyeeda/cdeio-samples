exports.paths = [
    {
        id: 'bootstrap.css',
        reg: '/node_modules/bootstrap/dist/css/bootstrap.min.css',
        release: 'styles/bootstrap.css'
    },
    {
        reg: /\/node_modules\/bootstrap\/dist\/fonts\/(.*)/,
        release: '/font/$1'
    },
    // {
    //     id: 'jquery',
    //     reg: '/node_modules/jquery/dist/jquery.js',
    //     release: 'vendor/jquery/jquery.js',
    // },
    // {
    //     id: 'lodash',
    //     reg: '/node_modules/lodash/dist/lodash.js',
    //     release: 'vendor/lodash/lodash.js',
    // },
    // {
    //     id: 'bootstrap',
    //     reg: '/node_modules/bootstrap/dist/js/bootstrap.js',
    //     release: 'vendor/bootstrap/bootstrap.js',
    //     requires: ['jquery', 'bootstrap.css'],
    // },
    // {
    //     id: 'react',
    //     reg: '/node_modules/react/react.js',
    //     release: 'vendor/react/react.js',
    // },
    // {
    //     id: 'flux',
    //     reg: '/node_modules/flux/dist/Flux.js',
    //     release: 'vendor/flux/flux.js',
    // },
    // {
    //     id: 'colorvest',
    //     reg: '/node_modules/colorvest/dist/colorvest.js',
    //     release: 'vendor/colorvest/colorvest.js',
    //     requires: ['jquery', 'lodash', 'bootstrap', 'react', 'flux', 'index.css']
    // }
];