var {mark}                    = require('coala/mark');
var {createValidationContext} = require('coala/validation/validation-context');

var {Person} = com.zyeeda.coala.example.extension.service.entity;

exports.createService = function() {
    return {
        changePassword: mark('managers', 'extension/diyrouter').mark('tx').on(function (manager, data, id) {
            var person, personMgr,
                context;

            personMgr = manager.getManager(id);
            person = personMgr.getPersonById();
            context = createValidationContext();

            if (data.oldPassword !== person.password) {
                context.addViolation({ message: '原密码不正确', properties: 'oldPassword' });
            }

            if (context.hasViolations()) {
                return { violations: context.collectViolations() };
            }

            person.password = data.newPassword;
            return personMgr.merge(person);
        })
    };
};
