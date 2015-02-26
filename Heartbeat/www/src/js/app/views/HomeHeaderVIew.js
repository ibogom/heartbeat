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
                showSearch: true,
                showMessages: true,
                showHomeNav: true
            }),

            ui: {
                "menu": "span.menu",
                "playlist": "span.playlist",
                "player": "li.player",
                "message": "span.message",
                "search": "span.search",
                "cancel": "span.cancel",
                "music": "li.music"
            },
            initialize: function(){
            },
            events: {
                "touchend @ui.menu": "showSettings",
                "touchend @ui.search": "getSearch",
                "touchend @ui.cancel": "getSearch",
                "touchend @ui.player": "showPlayer",
                "touchend @ui.music": "showPlaylist"
            },
            showPlayer: function () {
                this.ui.player.addClass("active").siblings().removeClass("active");
                this.ui.search.hide();
                this.ui.message.show();
                Backbone.history.navigate("home", {trigger: true, replace: false});
                $(App.layout.playlists.el).animate({"margin-left":100+"%"},250, function(){
                    $(this).hide();
                    $(App.footer.el).show().animate({"margin-bottom": -45 + "px"}, 150, function(){
                    });
                });
            },
            showSettings: function () {
                Backbone.history.navigate("settings", {trigger: true, replace: false});
            },
            showPlaylist: function () {
                this.ui.music.addClass("active").siblings().removeClass("active");
                if(Backbone.history.fragment !== "playlist") {
                    this.ui.message.hide();
                    this.ui.search.show();
                    Backbone.history.navigate("playlist", {trigger: true, replace: false});
                    $(App.layout.playlists.el).css({"margin-left": "100%"});
                    $(App.layout.playlists.el).show().animate({"margin-left": 0 + "%"}, 300, function () {
                        $(App.footer.el).show().animate({"margin-bottom": 0 + "px"}, 300, function () {
                        });
                    });
                }
            },
            getSearch: function (e) {
                var margin;
                if(e.currentTarget.attributes.class.value === "search"){
                    margin = 0;
                    this.ui.search.hide();
                    this.ui.cancel.show();
                } else{
                    margin = -45;
                    this.ui.search.show();
                    this.ui.cancel.hide();
                }
                App.playlistLayout.search.$el.show().find(".search-wrapper").show().animate({
                    "margin-top":margin+"px"
                },300, function(){
                    if(margin === 0){
                        App.playlistLayout.search.$el.find("#searchInput").focus();
                    } else {
                        App.playlistLayout.search.$el.find("#searchInput").val('');
                        App.playlistLayout.searchResult.$el.empty();
                        App.playlistLayout.search.$el.hide();
                        App.playlistLayout.list.$el.show();
                    }
                });
            },
            onRender: function(){
                this.ui.message.show();
            }
        });
    });