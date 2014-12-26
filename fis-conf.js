fis.config.set('settings.postpackager.simple.autoCombine', true);
fis.config.set('settings.postpackager.simple.output', 'dist/app');
fis.config.set('project.include', /^\/app|assets|dist|modules|widgets\/(.*)$|index.html/i);
fis.config.set('project.exclude', '**/_*.scss');

fis.config.merge({
    modules: {
        postpackager : ['autoload', 'simple'],
        parser: {
            scss: 'sass'
        }
    },
    roadmap: {
        ext : {
            scss : 'css'
        },
        path: [
            {
                reg : /^\/assets\/(.*)\.(scss)$/i,
                release : '/css/$1.css',
                id: '$1.css'
            },
            {
                reg : /^\/assets\/(.*)$/i,
                release : '/css/$1.css',
            },
            {
                reg : /^\/widgets\/([^\/]+)\/assets\/index\.(scss)$/i,
                id : 'widgets/$1.css',
                release : 'css/$1/index.css'
            },
            {
                reg : /^\/widgets\/([^\/]+)\/assets\/(.*)$/i,
                release : 'img/$1/$2'
            },
            {
                id: 'bootstrap.css',
                reg: '/node_modules/bootstrap/dist/css/bootstrap.min.css',
                release: 'css/bootstrap.css'
            },
            {
                reg: /\/node_modules\/bootstrap\/dist\/fonts\/(.*)/,
                release: '/font/$1'
            },
            {
                id: 'app',
                reg: '/dist/app.js',
                release: 'dist/app.js'
            },
            {
                reg: '/index.html',
                release: 'index.html'
            },
            {
                reg: 'dist/app.css',
                release: 'dist/app.css'
            },
            {
                reg: '**',
                release: false
            }
        ]
    }
});