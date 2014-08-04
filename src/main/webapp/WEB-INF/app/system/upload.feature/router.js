var json = require('coala/response').json,
    router = exports.router = require('coala/router').createRouter(),
    upload = require('coala/util/upload'),
    response = require('ringo/jsgi/response'),
    {notFound} = require('coala/response'),
    {getOptionInProperties} = require('coala/config'),
    {mark} = require('coala/mark'),
    {join} = require('coala/util/paths'),
    String = java.lang.String,
    CONFIG_UPLOAD_PATH = 'coala.upload.path';

router.post('/', upload.createRequestHandler('images'));
router.get('/image/:id', upload.createViewer());
router.get('/file/:id', upload.createViewer());

router.get('/:id', mark('services', 'system/upload').on(function(uploadSvc, request, id) {
    var attachment, filepath;

    attachment = uploadSvc.getAttachmentById(id);
    if (!attachment) {
        return notFound('附件不存在');
    }
    filepath = join(getOptionInProperties(CONFIG_UPLOAD_PATH), attachment.path);
    var res = response["static"](filepath, attachment.contentType);
    var filename = new String(new String(attachment.filename).bytes, 'ISO8859-1');
    // res.headers['Content-Disposition'] = 'attachment;filename=' + filename;
    res.headers['Content-Disposition'] = 'inline;filename=' + filename;
    return res;
}));
