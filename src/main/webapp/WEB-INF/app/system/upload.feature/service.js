var {mark}          = require('coala/mark');
var {createService} = require('coala/service');

var {Attachment}    = com.zyeeda.coala.commons.resource.entity;

exports.createService = function() {
    var service = {
        getAttachmentById: mark('managers', Attachment).mark('tx').on(function (attachmentMgr, id) {
            return attachmentMgr.find(id);
        })
    };

    return service;
};
