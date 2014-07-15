exports.filters = {
    defaults: {
        '!testFilter': ''
    }
};

exports.labels = {
    name: '名称',
    description: '描述'
};

exports.fieldGroups = {
	defaults: ['name', 'description']
};

// exports.grid = {
//     defaultOrder: 'name-asc',
//     columns: ['name', 'description']
// };


exports.validators = {
	create: {
        defaults: function(context, entity, request) {
        	if(request.params.name == "") {
        		context.addViolation({name: 'name', message: '名称必填'});
        	}
        }
    }
}