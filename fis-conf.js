fis.config.set('project.exclude', '**/_*.scss');
fis.config.set('settings.postpackager.simple.autoCombine', true);
// fis.config.set('settings.postpackager.simple.output', 'dist/colorvest');

fis.config.merge({
    modules: {
        parser: {
            coffee : 'coffee-react',
            jsx: 'react',
            less : 'less',
            scss: 'sass'
        },
        postprocessor: {
            js: "jswrapper, require-async",
        },
        postpackager : ['autoload', 'simple']
    },
    settings: {
        postprocessor: {
            jswrapper: {
                type: 'amd'
            }
        }
    },
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
                reg : /^\/app\/([^\/]+)\/main\.(coffee)$/i,
                isMod : true,
                id : '$1',
                release : '/$&'
            },
            {
                reg : /^\/app\/(.*)\.(coffee)$/i,
                isMod : true,
                id : '$1',
                release : '/$&'
            },
            {
                reg : /^\/widgets\/([^\/]+)\/assets\/main\.(scss)$/i,
                id : 'widgets/$1/css',
                release : 'styles/$1/main.css'
            },
            {
                reg : /^\/widgets\/([^\/]+)\/assets\/(.*)$/i,
                release : '/img/$1/$2'
            },
            {
                reg : /^\/widgets\/([^\/]+)\/main\.(coffee)$/i,
                isMod : true,
                id : 'widgets/$1',
                release : '/$&'
            },
            {
                reg : /^\/widgets\/(.*)\.(coffee)$/i,
                isMod : true,
                id : 'widgets/$1',
                release : '/$&'
            },
            {
                id: 'mod',
                reg: '/bower_components/mod/mod.js',
                release: 'dist/mod.js',
                useHash: false
            },
            {
                id: 'require-conf',
                reg: 'require-conf.coffee',
                release: 'require-conf.js'
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