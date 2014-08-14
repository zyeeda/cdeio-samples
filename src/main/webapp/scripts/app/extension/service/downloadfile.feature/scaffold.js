define([
    'jquery'
], function($) {
    return {
        handlers: {
            downloadAttachment: function() {
                var me,
                    grid,
                    selected;

                me = this;
                grid = me.feature.views['grid:body'].components[0];
                selected = grid.getSelected().toJSON();

                $ifrm = $('<iframe></iframe>');
                $ifrm.css({
                    width: '0px',
                    height: '0px',
                    display: 'none'
                });
                $ifrm.attr('onload', function(){
                    setTimeout(function(){
                        $ifrm.remove();
                    }, 1000);
                });
                $ifrm.attr('src', 'invoke/scaffold/extension/service/downloadfile/download/' + selected.attachment.id);
                $(document.body).append($ifrm);
            }
        }
    };
});
