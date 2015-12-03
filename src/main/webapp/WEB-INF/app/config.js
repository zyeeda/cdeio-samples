var {SecurityUtils} = org.apache.shiro;
var logger = require('ringo/logging').getLogger(module.id);
var {FrontendSettingsCollector} = com.zyeeda.cdeio.web;
var {mark} = require('cdeio/mark');

exports.cdeio = {
    entityPackages : [
        'com.zyeeda.cdeio.commons.authz.entity',
        'com.zyeeda.cdeio.commons.organization.entity',
        'com.zyeeda.cdeio.commons.resource.entity',
        'com.zyeeda.cdeio.example.entity.entity',
        'com.zyeeda.cdeio.example.scaffold.basic.entity',
        'com.zyeeda.cdeio.example.scaffold.field.entity',
        'com.zyeeda.cdeio.example.scaffold.form.entity',
        'com.zyeeda.cdeio.example.scaffold.grid.entity',
        'com.zyeeda.cdeio.example.scaffold.hooks.entity',
        'com.zyeeda.cdeio.example.scaffold.validators.entity',
        'com.zyeeda.cdeio.example.scaffold.tree.entity',
        'com.zyeeda.cdeio.example.scaffold.button.entity',
        'com.zyeeda.cdeio.example.extension.ui.form.entity',
        'com.zyeeda.cdeio.example.extension.service.entity',
        'com.zyeeda.cdeio.example.entity.generate',
        'com.zyeeda.cdeio.example.entity.generate.bpm.task',
        'com.zyeeda.cdeio.example.entity.generate.bpm.gateway',
        'com.zyeeda.cdeio.example.entity.generate.bpm.listener',
        'com.zyeeda.cdeio.example.entity.generate.bpm.subprocess',
        'com.zyeeda.cdeio.example.entity.generate.bpm.multiple',
        'com.zyeeda.cdeio.example.extension.ui.form.entity',
        'com.zyeeda.cdeio.example.extension.tree.entity'
    ],

    orms: [

    ],

    disableAuthz: true
};

FrontendSettingsCollector.add('collector', 'registered in collector');

exports.frontendSettings = {
    'application_name': 'cdeio.application.name',
    'application_logo': 'cdeio.application.logo',
    // 'cdeio.sso.rp.base.path': 'cdeio.sso.rp.base.path',
    'collector': 'collector',
    currentUser: function(context) {
        var subject = SecurityUtils.getSubject(),
        	p = subject.getPrincipal(),
        	isAdmin;

        if (p == null) {
            return {};
        }

        if('admin' === (p.getAccountName()).toLowerCase()){
        	isAdmin = true;
        }

        return {
            accountName: p.getAccountName(),
            realName: p.getRealName() || p.getAccountName(),
            email: p.getEmail(),
            isAdmin: isAdmin,
            photo: 'assets/images/avatars/user.jpg'
        };
    },
    signOutUrl: mark('beans', 'openIdProvider').on(function(openIdProvider, context) {
        return openIdProvider.getSignOutUrl();
    })
};
