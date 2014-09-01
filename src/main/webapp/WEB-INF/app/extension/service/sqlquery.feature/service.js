var {mark} = require('coala/mark');

var {Task} = com.zyeeda.coala.example.extension.service.entity;

exports.createService = function() {
	return {
        getById: mark('managers', Task).mark('tx').on(function (taskMgr, id) {
            return taskMgr.getTaskById({id: id}, 1);
        })
	};
};
