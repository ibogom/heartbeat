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
                showMenu: true,
                showlist: true,
                showPlaylist: true,
                showHomeNav: true
            }),

            ui: {
                "menu": "span.menu",
                "playlist": "span.playlist",
                "player": "li.player",
                "rating": "li.rating"
            },
            initialize: function(){
                $(App.layout.playlists.el).css({"margin-left":window.innerWidth+"px"});
            },
            events: {
                "click @ui.menu": "showSettings",
                "click @ui.playlist": "showPlaylist",
                "click @ui.player": "showPlayer",
                "click @ui.rating": "showRating"
            },
            showRating: function () {
                this.ui.rating.addClass("active").siblings().removeClass("active");
                Backbone.history.navigate("rating", {trigger: true, replace: false});
            },
            showPlayer: function () {
                this.ui.player.addClass("active").siblings().removeClass("active");
                Backbone.history.navigate("home", {trigger: true, replace: false});
            },
            showSettings: function () {
                Backbone.history.navigate("settings", {trigger: true, replace: false});
            },
            showPlaylist: function () {
                Backbone.history.navigate("playlist", {trigger: true, replace: false});
                $(App.layout.playlists.el).show();
                $(App.layout.playlists.el).animate({"margin-left":0+"px"},200, function(){
                    $(App.footer.el).show().animate({"margin-bottom": 0 + "px"}, 200, function(){
                    });
                });
            }
        });
    });