define(['jquery', 'underscore'], function($, _) {
    return {
        layout: {
            regions: {
                customView: 'custom-view',
                main: 'main'
            }
        },
        views: [{
            name: 'main', region: 'main'
        }, {
            name: 'inline:custom-view',
            region: 'customView',
            model: 'extension/ui/router',
            events: {
                'click submitBtn': 'submitBtn'
            },
            extend: {
                serializeData: function(_super) {
                    var deferred = $.Deferred(),
                        m = this.model,
                        data = _super.apply(this),
                        routerResults = [];

                    m.fetch().done(function() {
                        results = m.toJSON().results;

                        $.each(results, function (i, v){
                            v.index = i + 1;
                            routerResults.push(v);
                        });
                        data.routers = routerResults;
                        deferred.resolve(data);
                    });
                    return deferred.promise();
                }
            }
        }]
    };
});
