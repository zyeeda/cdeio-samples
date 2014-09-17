var {mark} = require('cdeio/mark');

var {Task} = com.zyeeda.cdeio.example.extension.service.entity;

exports.createService = function() {
	return {
        getById: mark('managers', Task).mark('tx').on(function (taskMgr, id) {
            return taskMgr.getTaskById({id: id}, {firstResult: 0, maxResults: 1});
        })
	};
};
