// Generated by CoffeeScript 1.7.1
define(["jquery", "vendors/ZeroClipboard", "vendors/marked.min", "vendors/prettify"], function($, ZeroClipboard, marked) {
  return {
    avoidLoadingHandlers: true,
    extend: {
      afterRender: function() {
        var $md, client, markup;
        $md = $('.lang-markdown');
        markup = marked($md.text());
        $md.parent().after('<div class="marked">' + markup + '</div>');
        $md.parent().remove();
        $('.marked pre code').addClass('prettyprint linenums');
        $('pre code').each(function(i, e) {
          var $a, $el;
          $el = $(e);
          $a = $('<a>');
          $a.addClass('copy-btn btn btn-minier btn-light');
          $a.attr('data-clipboard-text', $el.text());
          $a.append('<i class=\"icon-code\">Copy</i>');
          return $el.parent().before($a);
        });
        client = new ZeroClipboard($('.copy-btn'));
        client.on('aftercopy', function() {
          return app.info('已复制');
        });
        return prettyPrint();
      },
      templateHelpers: function() {
        var codeFeature, obj, scaffold;
        codeFeature = this.feature.startupOptions.codeFeature;
        scaffold = this.feature.startupOptions.scaffold;
        obj = {};
        $.ajax({
          url: 'invoke/code?feature=' + codeFeature + '&scaffold=' + scaffold,
          type: 'get',
          data: {},
          async: false
        }).done(function(data) {
          obj.sources = data.results;
          return obj;
        });
        return obj;
      }
    }
  };
});
