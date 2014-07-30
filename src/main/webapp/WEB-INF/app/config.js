var {SecurityUtils} = org.apache.shiro;
var logger = require('ringo/logging').getLogger(module.id);
var {FrontendSettingsCollector} = com.zyeeda.coala.web;
var {mark} = require('coala/mark');

exports.coala = {
    entityPackages : [
        // 'com.zyeeda.coala.commons.authc.entity',
        'com.zyeeda.coala.commons.resource.entity',
        // 'com.zyeeda.coala.commons.organization.entity',
        'com.zyeeda.coala.example.entity.entity',
        'com.zyeeda.coala.example.extension.ui.form.entity',
        'com.zyeeda.coala.example.extension.service.entity',
        'com.zyeeda.coala.example.tenant.entity'
        'com.zyeeda.coala.example.entity.generate',
        'com.zyeeda.coala.example.entity.generate.bpm.task',
    ],

    orms: [

    ],
    
    disableAuthz: true
};

FrontendSettingsCollector.add('collector', 'registered in collector');

exports.frontendSettings = {
    'application_name': 'coala.application.name',
    'application_logo': 'coala.application.logo',
    // 'coala.sso.rp.base.path': 'coala.sso.rp.base.path',
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
