// Generated by CoffeeScript 1.7.1
define({
  layout: {
    regions: {
      breadcrumbs: 'breadcrumbs'
    }
  },
  views: [
    {
      name: 'inline:breadcrumbs',
      region: 'breadcrumbs',
      avoidLoadingHandlers: false,
      extend: {
        serializeData: function(_super) {
          var data;
          data = _super.apply(this) || {};
          data.home = this.home;
          data.items = this.items;
          return data;
        }
      },
      events: {
        'click view-source': 'viewSource',
        'click view-example': 'viewExample'
      }
    }
  ],
  extend: {
    onStart: function(_super) {
      var content, d, d1, d2, header, sidebar;
      d = $.Deferred();
      d1 = void 0;
      app.viewport = this;
      header = this.layout.$('header');
      sidebar = this.layout.$('sidebar');
      content = this.layout.$('content');
      app.startFeature('main/header', {
        container: header,
        ignoreExists: true
      }).done(function(headerFeature) {
        d1 = app.startFeature('main/account-menu', {
          container: headerFeature.views['inline:inner-header'].$('notification'),
          ignoreExists: true
        });
        return d1;
      });
      d2 = app.startFeature('main/menu', {
        container: sidebar,
        ignoreExists: true
      }).done(function(feature) {
        app.menuFeature = feature;
        return d2;
      });
      app.config.featureContainer = content;
      this.setHome({
        name: '首页',
        featurePath: 'main/home',
        iconClass: 'icon-home'
      });
      this.updateNavigator();
      $.when(d1, d2).then(function() {
        return d.resolve();
      });
      $('.menu-toggler').on('click', function() {
        $('.sidebar').toggleClass('display');
        $(this).toggleClass('display');
        return false;
      });
      return d.promise();
    },
    onStop: function(_super) {
      var mainModule;
      mainModule = app.findModule('main');
      app.menuFeature.stop();
      mainModule.findFeature('header').stop();
      return mainModule.findFeature('account-menu').stop();
    },
    setHome: function(_super, home) {
      this.views['inline:breadcrumbs'].home = home;
      return null;
    },
    updateNavigator: function(_super, menuItem) {
      var menu, v;
      v = this.views['inline:breadcrumbs'];
      if (menuItem) {
        menu = menuItem.toJSON();
      }
      v.home.isLast = !menuItem;
      v.items = [];
      while (menu) {
        v.items.unshift(menu);
        menu = menu.parent;
      }
      if (v.items.length > 0) {
        v.items[v.items.length - 1].isLast = true;
      }
      return v.render();
    }
  }
});