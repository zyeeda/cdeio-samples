var {mark} = require('cdeio/mark');
var {Account} = com.zyeeda.cdeio.commons.organization.entity;
var {SecurityUtils} = org.apache.shiro;
var {createValidationContext} = require('cdeio/validation/validation-context');
var {BCrypt} = com.zyeeda.cdeio.commons.crypto;

exports.createService = function() {
    return {
    	editPwdInfo: mark('managers', Account).mark('tx').on(function (accountMgr, data) {
            var id = SecurityUtils.subject.principal.id;
            var account = accountMgr.find(id);
            var context = createValidationContext();
            var b = BCrypt.checkpw(data.oldPassword, account.password);
            if (!b) {
                context.addViolation({ message: '原密码不正确', properties: 'oldPassword' });
            }
            if (context.hasViolations()) {
                return { violations: context.collectViolations() };
            }
            var hashed = BCrypt.hashpw(data.newPassword1, BCrypt.gensalt());
            account.setPassword(hashed);
            return accountMgr.merge(account);
        })
    }
}