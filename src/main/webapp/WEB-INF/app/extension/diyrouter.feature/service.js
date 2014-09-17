var {mark}                    = require('cdeio/mark');
var {createValidationContext} = require('cdeio/validation/validation-context');

exports.createService = function() {
    return {
        changePassword: mark('managers', 'extension/diyrouter').mark('tx').on(function (manager, data, id) {
            var person,
                context;

            person = manager.getPersonById(id);
            context = createValidationContext();

            if (data.oldPassword !== person.password) {
                context.addViolation({ message: '原密码不正确', properties: 'oldPassword' });
            }

            if (context.hasViolations()) {
                return { violations: context.collectViolations() };
            }

            person.password = data.newPassword;
            return manager.merge(person);
        })
    };
};
