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

                // iframe 加载完成 1 秒后删除，因 dom 操作有延迟，故此处留 1 秒
                $ifrm.attr('onload', function(){
                    setTimeout(function(){
                        $ifrm.remove();
                    }, 1000);
                });

                // 设置 src 属性为处理下载文件请求的 router
                $ifrm.attr('src', 'invoke/scaffold/extension/service/downloadfile/download/' + selected.attachment.id);

                // 将 iframe 添加到 html 的 body 中
                $(document.body).append($ifrm);
            }
        }
    };
});
