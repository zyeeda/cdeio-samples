define ["jquery", "vendors/ZeroClipboard", "vendors/marked.min", "vendors/prettify"], ($, ZeroClipboard, marked) ->
    avoidLoadingHandlers: true
    extend:
        afterRender: ->
            #markdown处理流程图
            $img = $('.lang-image')
            $img.parent().after('<div class="imaged"><br/><br/>' + $img.text() + '</div>')
            $img.parent().remove()

            #markdown处理及代码块样式
            $md = $('.lang-markdown')
            markup = marked($md.text())
            $md.parent().after('<div class="marked">' + markup + '</div>')
            $md.parent().remove()
            $('.marked pre code').addClass('prettyprint linenums')

            #增加复制代码功能
            $('pre code').each (i, e) ->
                $el = $(e)
                $a = $('<a>')
                $a.addClass('copy-btn btn btn-minier btn-light')
                $a.attr('data-clipboard-text', $el.text())
                $a.append('<i class=\"icon-code\">Copy</i>')
                $el.parent().before($a)
            client = new ZeroClipboard($('.copy-btn'))
            client.on 'aftercopy', ->
                app.info('已复制')



            #代码高亮
            prettyPrint()

            # 以下是highlight插件用法，但不能显示行号
            # hljs.initHighlightingOnLoad() if window.hljs
            # $('pre code').each (i, block) ->
            #     if $(block).hasClass('lang-markdown')
            #         md = $(block).text()
            #         $(block).parent().after('<div class="marked">' + marked(md) + '</div>')
            #         $('div.marked pre code').each (i, block) ->
            #             hljs.highlightBlock(block)
            #         $(block).parent().remove()
            #     else
            #         hljs.highlightBlock(block)

        templateHelpers: ->
            codeFeature = @feature.startupOptions.codeFeature
            scaffold = @feature.startupOptions.scaffold
            obj = {}
            $.ajax
                url: 'invoke/code?feature=' + codeFeature + '&scaffold=' + scaffold,
                type: 'get', data: {}, async: false
            .done (data) ->
                obj.sources = data.results
                obj
            obj
