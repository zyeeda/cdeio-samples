module.exports = {
    project: {
        watch: {
            exclude: [/src|widgets/]
        }
    },
    settings: {
        browserify: {
            main: 'src/index.coffee',
            transform: 'coffee-reactify',
            extension: '.coffee'
        }
    },
    roadmap: {
        path: [
            {
                reg : /^\/widgets\/([^\/]+)\/assets\/index\.(css|scss|sass|less)$/i,
                id : 'widgets/$1.css',
                release : 'css/$1/index.css'
            },
            {
                reg : /^\/widgets\/([^\/]+)\/assets\/(.*)$/i,
                release : 'img/$1/$2'
            },
            {
                reg: /^\/node_modules\/bootstrap\/dist\/fonts\/(.*)$/i,
                release: 'font/$1',
            },
            {
                id: 'bootstrap.css',
                reg: 'node_modules/bootstrap/dist/css/bootstrap.min.css',
                release: 'css/bootstrap.css'
            }
        ]
    }
}

fis.config.set('deploy', {
    local: {
        to : './public',
        exclude : /public|src|widgets|map.json|package.json|README.md/
    }
});
