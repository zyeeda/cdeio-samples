if (window !== top) {
    top.$('#LOGIN-DIALOG').modal('hide');
} else {
    define([
        'jquery',
        'coala/coala',
        'application',
    ], function($, coala) {

        $(function() {
            var app = window.app = coala.startApplication('application');
        });

    });
}
