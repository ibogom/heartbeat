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
            refresh: '#refresh-block',
            home: '#layout-home',
            playlists: '#layout-playlists'
        }
    });
});