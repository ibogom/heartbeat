/**
 * Created by Ievgen on 18.01.2015.
 */
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
        template: templateFn['HomePageLayout.hbs'],
        regions: {
            playerBlock: '#layout-player-block',
            notification: '#layout-notification',
            info: '#layout-info',
            beatsBlock: '#layout-beats-block',
            contentBlock: '#layout-content-block'
        }
    });
});