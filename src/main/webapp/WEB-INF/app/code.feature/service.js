var fs = require('fs');
var config = require('config.js');

exports.createService = function() {
    
    var svc = {
        test: function(path, feature, scaffold) {
            var codePath = path + '/WEB-INF/code';
            var webinfPath = path + '/WEB-INF/app';
            var scriptsPath = path + '/scripts/app';
            
            var config = require(codePath + '/config.js');
            var results = [];

            if(config.docs[feature] && config.docs[feature].java) {
                var javaPath = path + '/WEB-INF/classes/java/' + config.docs[feature].java;
                if(fs.exists(javaPath)) {
                    var java = fs.read(javaPath, {charset: 'utf8'});
                    results.push({id: 'java', name: '实体', lang: 'java', code: java, isLeaf: true});
                }
            }

            var backendSource = null;
            if(scaffold) {
                var scaffoldPath = webinfPath + '/' + feature + '.feature/scaffold.js';
                if (fs.exists(scaffoldPath)) {
                    var scaffoldjs = fs.read(scaffoldPath, {charset: 'utf8'});
                    backendSource = {id: 'scaffoldjs', name: '自动生成', lang: 'js', code: scaffoldjs, isLeaf: true};
                }
            } else {
                var routerPath = webinfPath + '/' + feature + '.feature/router.js';
                if (fs.exists(routerPath)) {
                    var routerjs = fs.read(routerPath, {charset: 'utf8'});
                    backendSource = {id: 'routerjs', name: 'Router', lang: 'js', code: routerjs, isLeaf: true};
                }
            }
            var hasBackend = false;
            var serviceSource = null;
            var servicePath = webinfPath + '/' + feature + '.feature/service.js';
            if (fs.exists(servicePath)) {
                var servicejs = fs.read(servicePath, {charset: 'utf8'});
                serviceSource = {id: 'servicejs', name: 'Service（service.js）', lang: 'js', code: servicejs, isLeaf: true};
                hasBackend = true;
            }

            var managerSource = null;
            var managerPath = webinfPath + '/' + feature + '.feature/manager.js';
            if (fs.exists(managerPath)) {
                var managerjs = fs.read(managerPath, {charset: 'utf8'});
                managerSource = {id: 'managerjs', name: 'Manager', lang: 'js', code: managerjs, isLeaf: true};
                hasBackend = true;
            }
            if(hasBackend) {
                var backend = {id: 'backend', name: 'WEB-INF/app', children: []};
                backend.children.push(backendSource);
                if(serviceSource != null) backend.children.push(serviceSource);
                if(managerSource != null) backend.children.push(managerSource);
                results.push(backend);
            }else if(backendSource != null) {
                results.push(backendSource);
            }

            if(scaffold === 'true') {
                var scaffoldScriptPath = scriptsPath + '/' + feature + '.feature/scaffold.js';
                if (fs.exists(scaffoldScriptPath)) {
                    var scaffoldscript = fs.read(scaffoldScriptPath, {charset: 'utf8'});
                    results.push({id: 'scaffoldscript', name: '界面生成', lang: 'js', code: scaffoldscript, isLeaf: true});
                }
            }else {
                var frontend = {id: 'frontend', name: 'scripts/app', children: []};
                var featurePath = scriptsPath + '/' + feature + '.feature/feature.js';
                if (fs.exists(featurePath)) {
                    var featurejs = fs.read(featurePath, {charset: 'utf8'});
                    frontend.children.push({id: 'featurejs', name: '界面', lang: 'js', code: featurejs, isLeaf: true});
                }
                var templatesPath = scriptsPath + '/' + feature + '.feature/templates.html';
                if (fs.exists(templatesPath)) {
                    var templates = fs.read(templatesPath, {charset: 'utf8'});
                    frontend.children.push({id: 'templates', name: '模板', lang: 'html', code: templates, isLeaf: true});
                }
                var viewsPath = scriptsPath + '/' + feature + '.feature/views';
                if (fs.exists(viewsPath)) {
                    var files = fs.list(viewsPath);
                    for(var i = 0; i < files.length; i++) {
                        var f = files[i];
                        var js = fs.read(viewsPath + '/' + f, {charset: 'utf8'});
                        frontend.children.push({id: 'views' + i, name: 'views/' + f, lang: f.substring(f.lastIndexOf('.') + 1), code: js, isLeaf: true});
                    }
                }
                var handlersPath = scriptsPath + '/' + feature + '.feature/handlers';
                if (fs.exists(handlersPath)) {
                    var files = fs.list(handlersPath);
                    for(var i = 0; i < files.length; i++) {
                        var f = files[i];
                        var js = fs.read(viewsPath + '/' + f, {charset: 'utf8'});
                        frontend.children.push({id: 'handlers' + i, name: 'handlers/' + f, lang: 'js', code: js, isLeaf: true});
                    }
                }
                results.push(frontend);
            }
  
            if(config.docs[feature]) {
                var others = {id: 'others', name: '其它相关代码', children: []};
                if(config.docs[feature].webinf) {
                    var files = config.docs[feature].webinf;
                    for(var i = 0; i < files.length; i++) {
                        var e = files[i];
                        var code = fs.read(webinfPath + '/' + e.path, {charset: 'utf8'});
                        others.children.push({id: e.name + i, name: e.name, lang: e.path.substring(e.path.lastIndexOf('.') + 1), code: code, isLeaf: true});
                    }
                }
                if(config.docs[feature].scripts) {
                    var files = config.docs[feature].scripts;
                    for(var i = 0; i < files.length; i++) {
                        var e = files[i];
                        var code = fs.read(webinfPath + '/' + e.path, {charset: 'utf8'});
                        others.children.push({id: e.name + i, name: e.name, lang: e.path.substring(e.path.lastIndexOf('.') + 1), code: code, isLeaf: true});
                    }
                }
                if(others.children.length > 0) {
                    results.push(others);
                }
            }
            var mdPath = codePath + '/' + feature + '.feature/README.md'
            if(fs.exists(mdPath)) {
                var md = fs.read(mdPath, {charset: 'utf8'});
                results.push({id: 'markdown', name: '说明', lang: 'markdown', code: md, isLeaf: true});
            }

            if(results.length > 0) {
                results[0].active = true;
                if(!results[0].isLeaf) {
                    results[0].children[0].active = true;
                }
            }
            return {results: results};
        }
    };
    return svc;
}
