define(['App',
    'jquery', 'underscore', 'backbone', 'marionette',
    'templates/templateCollection'
], function (App, $, _, Backbone, Marionette,
             templateFn) {
    "use strict";
    return Backbone.Marionette.LayoutView.extend({
        template: templateFn['PlaylistLayout.hbs'],
        regions: {
            search: '#layout-search',
            searchResult: '#layout-search-result',
            list: '#layout-list',
            friends: '#layout-friends'
        },
        events: {
            "touchmove #layout-list":"increaseScroll"
        },
        increaseScroll: function(e){
            //var currPos = window.event.targetTouches[0].pageY;
            //return window.scrollTo(currPos*2,0);
        }
    });
});