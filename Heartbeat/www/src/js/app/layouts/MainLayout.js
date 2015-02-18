define([
    'jquery', 'underscore', 'backbone', 'marionette',
    'App',
    'templates/templateCollection'
], function ($, _, Backbone, Marionette, App,
             templateFn) {
    "use strict";
    return Backbone.Marionette.LayoutView.extend({
        className: "layout-wrapper",
        tagName:"div",
        template: templateFn['MainLayout.hbs'],
        regions: {
            settings: '#layout-settings',
            home: '#layout-home',
            playlists: '#layout-playlists'
        },
        onAttach: function(){
          $(this.regions.playlists).width(window.innerWidth*2);
        }
    });
});