fis.config.set('project.exclude', '**/_*.scss');
fis.config.set('settings.postpackager.simple.autoCombine', true);

fis.config.merge({
    modules: {
        parser: {
            coffee : 'coffee-react',
            jsx: 'jsx-react',
            less : 'less',
            scss: 'sass'
        },
        // postprocessor: {
        //     js: "jswrapper, require-async",
        // },
        postpackager : ['autoload', 'simple']
    },
    // settings: {
    //     postprocessor: {
    //         jswrapper: {
    //             type: 'amd'
    //         }
    //     }
    // },
    deploy : {
        local : {
            to : './lib',
            exclude : /\/lib|styles|modules|widgets|vendor|README.md/
        }
    },
    roadmap: {
         ext : {
            less : 'css',
            scss: 'css',
            coffee : 'js',
            jsx: 'js'
        },
        path: [
            {
                reg : /^\/assets\/(.*)\.(scss)$/i,
                release : '/$&',
                id: '$1.css'
            },
            // {
            //     reg : /^\/app\/([^\/]+)\/index\.(coffee)$/i,
            //     isMod : true,
            //     id : '$1',
            //     release : '/$&'
            // },
            // {
            //     reg : /^\/app\/(.*)\.(coffee)$/i,
            //     isMod : true,
            //     id : '$1',
            //     release : '/$&'
            // },
            {
                reg : /^\/widgets\/([^\/]+)\/assets\/index\.(scss)$/i,
                id : 'widgets/$1.css',
                release : 'styles/$1/index.css'
            },
            // {
            //     reg : /^\/widgets\/([^\/]+)\/assets\/(.*)$/i,
            //     release : '/img/$1/$2'
            // },
            // {
            //     reg : /^\/widgets\/([^\/]+)\/index\.(coffee)$/i,
            //     isMod : true,
            //     id : 'widgets/$1',
            //     release : '/$&'
            // },
            // {
            //     reg : /^\/widgets\/(.*)\.(coffee)$/i,
            //     isMod : true,
            //     id : 'widgets/$1',
            //     release : '/$&'
            // },
            {
                id: 'app',
                reg: '/dist/app.js',
                release: 'dist/app.js',
                useHash: false
            }
        ]
    }
});

var path = require('./require-conf').paths;

path = fis.config.data.roadmap.path.concat(path || []);

fis.config.data.roadmap.path = path.concat([
    {
        reg: '**/*.coffee',
        release: false
    },
    {
        reg: '/node_modules/**',
        release: false
    },
    {
        reg: '/bower_components/**',
        release: false
    },
    {
        reg: '/lib/**',
        release: false
    },
    {
        reg: '/bower.json',
        release: false
    }
]);