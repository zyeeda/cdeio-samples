if (window !== top) {
    top.$('#LOGIN-DIALOG').modal('hide');
} else {
    define([
        'jquery',
        'cdeio/cdeio',
        'application',
    ], function($, cdeio) {

        $(function() {
            var app = window.app = cdeio.startApplication('application');
        });

    });
}
