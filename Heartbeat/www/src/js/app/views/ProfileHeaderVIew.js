/**
 * Created by snopp_000 on 22.11.2014.
 */
define(['jquery', 'underscore', 'backbone', 'marionette', 'App', 'templates/templateCollection'],
    function ($, _, Backbone, Marionette, App, templateFn) {
        "use strict";
        return Backbone.Marionette.ItemView.extend({
            className: "header-wrapper",
            tagName: "div",
            template: templateFn['HeaderView.hbs']({
                showTitle: true,
                Title: "Profile page",
                showRightBack: true
            }),

            ui: {
                "settings": "span.settings",
                "back": "span.right-back"
            },
            events: {
                "click @ui.settings": "showSettings",
                "click @ui.back": "goBack"
            },
            showSettings: function () {
                console.log("showSettings");
                Backbone.history.navigate("settings", {trigger: true, replace: false});
            },
            goBack: function () {
                console.log("showSettings");
                Backbone.history.navigate("beats", {trigger: true, replace: false});
            },
            showBeats: function () {
                this.ui.beats.addClass("active").siblings().removeClass("active");
                Backbone.history.navigate("beats", {trigger: true, replace: false});
            }
        });
    });