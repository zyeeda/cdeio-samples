var fs = require('fs');

var UUID = java.util.UUID;

exports.createService = function() {

    var svc = {
        test: function(path, feature, scaffold) {
            var codePath = path + '/WEB-INF/code';
            var webinfPath = path + '/WEB-INF/app';
            var scriptsPath = path + '/scripts/app';

            var config = require(codePath + '/config.js');
            var results = [];

            var mdPath = codePath + '/' + feature + '.feature/README.md'
            if(fs.exists(mdPath)) {
                var md = fs.read(mdPath, {charset: 'utf8'});
                results.push({id: 'markdown', name: '说明', lang: 'markdown', code: md, isLeaf: true, noCode: true, active: true});
            }

            if(config.docs[feature] && config.docs[feature].java) {
                var javaPath = path + '/WEB-INF/classes/java/' + config.docs[feature].java;
                if(fs.exists(javaPath)) {
                    var java = fs.read(javaPath, {charset: 'utf8'});
                    results.push({id: 'java', name: '实体', lang: 'java', code: java, isLeaf: true, path: 'src/main/java/' + config.docs[feature].java});
                }
            }
            if(config.docs[feature] && config.docs[feature].bpmn) {
                var bpmnPath = path + '/WEB-INF/classes/bpmn/' + config.docs[feature].bpmn + '.bpmn';
                if(fs.exists(bpmnPath)) {
                    var bpmn = fs.read(bpmnPath, {charset: 'utf8'});
                    results.push({id: 'bpmn', name: '流程定义', lang: 'xml', code: bpmn, isLeaf: true, path: 'src/main/resources/bpmn/' + config.docs[feature].bpmn + '.bpmn'});
                    results.push({id: 'image', name: '流程图', lang: 'image', code: '<img src="invoke/scaffold/bpm/diagram/processDefinitionKey/' + config.docs[feature].bpmn + '"/>', isLeaf: true});
                }
            }
            var backendSource = null;
            if(scaffold) {
                var scaffoldPath = webinfPath + '/' + feature + '.feature/scaffold.js';
                if (fs.exists(scaffoldPath)) {
                    var scaffoldjs = fs.read(scaffoldPath, {charset: 'utf8'});
                    backendSource = {id: 'scaffoldjs', name: '自动生成', lang: 'js', code: scaffoldjs, isLeaf: true, path: 'WEB-INF/app' + '/' + feature + '.feature/scaffold.js'};
                }
            } else {
                var routerPath = webinfPath + '/' + feature + '.feature/router.js';
                if (fs.exists(routerPath)) {
                    var routerjs = fs.read(routerPath, {charset: 'utf8'});
                    backendSource = {id: 'routerjs', name: 'Router', lang: 'js', code: routerjs, isLeaf: true, path: 'WEB-INF/app' + '/' + feature + '.feature/router.js'};
                }
            }
            var hasBackend = false;
            var serviceSource = null;
            var servicePath = webinfPath + '/' + feature + '.feature/service.js';
            if (fs.exists(servicePath)) {
                var servicejs = fs.read(servicePath, {charset: 'utf8'});
                serviceSource = {id: 'servicejs', name: 'Service', lang: 'js', code: servicejs, isLeaf: true, path: 'WEB-INF/app' + '/' + feature + '.feature/service.js'};
                hasBackend = true;
            }

            var managerSource = null;
            var managerPath = webinfPath + '/' + feature + '.feature/manager.js';
            if (fs.exists(managerPath)) {
                var managerjs = fs.read(managerPath, {charset: 'utf8'});
                managerSource = {id: 'managerjs', name: 'Manager', lang: 'js', code: managerjs, isLeaf: true, path: 'WEB-INF/app' + '/' + feature + '.feature/manager.js'};
                hasBackend = true;
            }
            if(hasBackend) {
                var backend = {id: 'backend', name: '后台代码', children: []};
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
                    results.push({id: 'scaffoldscript', name: '界面生成', lang: 'js', code: scaffoldscript, isLeaf: true, path: 'scripts/app' + '/' + feature + '.feature/scaffold.js'});
                }
            }else if (feature.indexOf('birt-examples') === -1) {
                var frontend = {id: 'frontend', name: '前台代码', children: []};
                var featurePath = scriptsPath + '/' + feature + '.feature/feature.js';
                if (fs.exists(featurePath)) {
                    var featurejs = fs.read(featurePath, {charset: 'utf8'});
                    frontend.children.push({id: 'featurejs', name: 'feature.js', lang: 'js', code: featurejs, isLeaf: true, path: 'scripts/app' + '/' + feature + '.feature/feature.js'});
                }
                var templatesPath = scriptsPath + '/' + feature + '.feature/templates.html';
                if (fs.exists(templatesPath)) {
                    var templates = fs.read(templatesPath, {charset: 'utf8'});
                    frontend.children.push({id: 'templates', name: 'templates.html', lang: 'html', code: templates, isLeaf: true, path: 'scripts/app' + '/' + feature + '.feature/templates.html'});
                }
                var viewsPath = scriptsPath + '/' + feature + '.feature/views';
                if (fs.exists(viewsPath)) {
                    var files = fs.list(viewsPath);
                    for(var i = 0; i < files.length; i++) {
                        var f = files[i];
                        var js = fs.read(viewsPath + '/' + f, {charset: 'utf8'});
                        frontend.children.push({id: 'views' + i, name: 'views/' + f, lang: f.substring(f.lastIndexOf('.') + 1), code: js, isLeaf: true, path: 'scripts/app' + '/' + feature + '.feature/views/' + f});
                    }
                }
                var handlersPath = scriptsPath + '/' + feature + '.feature/handlers';
                if (fs.exists(handlersPath)) {
                    var files = fs.list(handlersPath);
                    for(var i = 0; i < files.length; i++) {
                        var f = files[i];
                        var js = fs.read(handlersPath + '/' + f, {charset: 'utf8'});
                        frontend.children.push({id: 'handlers' + i, name: 'handlers/' + f, lang: 'js', code: js, isLeaf: true, path: 'scripts/app' + '/' + feature + '.feature/handlers/' + f});
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
                        others.children.push({id: UUID.randomUUID().toString(), name: e.name, lang: e.path.substring(e.path.lastIndexOf('.') + 1), code: code, isLeaf: true, path: 'WEB-INF/app/' + e.path});
                    }
                }
                if(config.docs[feature].scripts) {
                    var files = config.docs[feature].scripts;
                    for(var i = 0; i < files.length; i++) {
                        var e = files[i];
                        var code = fs.read(scriptsPath + '/' + e.path, {charset: 'utf8'});
                        others.children.push({id: UUID.randomUUID().toString(), name: e.name, lang: e.path.substring(e.path.lastIndexOf('.') + 1), code: code, isLeaf: true, path: 'scripts/app/' + e.path});
                    }
                }
                if(config.docs[feature].javas) {
                    var files = config.docs[feature].javas;
                    for(var i = 0; i < files.length; i++) {
                        var e = files[i];
                        var code = fs.read(path + '/WEB-INF/classes/java/' + e.path, {charset: 'utf8'});
                        others.children.push({id: UUID.randomUUID().toString(), name: e.name, lang: e.path.substring(e.path.lastIndexOf('.') + 1), code: code, isLeaf: true, path: 'src/main/java/' + e.path});
                    }
                }
                if(others.children.length > 0) {
                    results.push(others);
                }
            }

            // // 正式用
            // if(results.length > 0) {
            //     results[0].active = true;
            //     if(results[0] && !results[0].isLeaf && results[0].children[0]) {
            //         results[0].children[0].active = true;
            //     }
            // }

            return {results: results};
        }
    };
    return svc;
}
