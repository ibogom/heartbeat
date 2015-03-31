/**
 * Created by Ievgen on 29.01.2015.
 */
define([
    'jquery',
    'underscore',
    'App',
    'backbone',
    'marionette',
    'views/NotificationView'
], function ($, _, App, Backbone, Marionette,
             NotificationView) {
    "use strict";
    return Backbone.Marionette.Controller.extend({
        initialize: function () {
        },
        getMessage: function(){
            App.homePageLayout.notification.show(new NotificationView());
        }
    });
});