define ["jquery", "vendors/marked.min", "vendors/highlight.pack"], ($, marked) ->
    avoidLoadingHandlers: true
    extend:
        afterRender: ->
            # hljs.initHighlightingOnLoad() if window.hljs
            $('pre code').each (i, block) ->
                if $(block).hasClass('lang-markdown')
                    md = $(block).text()
                    $(block).parent().after('<div class="marked">' + marked(md) + '</div>')
                    $('div.marked pre code').each (i, block) ->
                        hljs.highlightBlock(block)
                    $(block).parent().remove()
                else
                    hljs.highlightBlock(block)

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