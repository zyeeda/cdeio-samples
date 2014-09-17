var {mark}                    = require('cdeio/mark');
var {createValidationContext} = require('cdeio/validation/validation-context');

var {Person} = com.zyeeda.cdeio.example.extension.service.entity;

exports.createService = function() {
	return {
		saveEntity: mark('managers', Person).mark('tx').on(function (personMgr, data) {
            var person;

			person = new Person();
			person.name = data.name;
            person.password = data.password;
            person.description = data.description;

			return personMgr.save(person);
		}),
        getById: mark('managers', Person).mark('tx').on(function (personMgr, id) {
            return personMgr.find(id);
        }),
        modifyEntity: mark('managers', Person).mark('tx').on(function (personMgr, data) {
            var person;

            person = personMgr.find(data.id);
            person.name = data.name;
            person.description = data.description;

            return person;
        }),
        removeEntity: mark('managers', Person).mark('tx').on(function (personMgr, id) {
            personMgr.removeById(id);
        })
	};
};
