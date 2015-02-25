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
                showLeftBack: true,
                showSearch: true,
                showlist: true,
                showPlaylistNav: true
            }),

            ui: {
                "back": "span.left-back",
                "search": "span.search",
                "cancel": "span.cancel",
                "music":"li.music",
                "friends":"li.friends"
            },
            events: {
                "click @ui.back": "goBack",
                "click @ui.search": "getSearch",
                "click @ui.cancel": "getSearch",
                "click @ui.music": "getMusic",
                "click @ui.friends": "getFriends"
            },
            goBack: function () {
                Backbone.history.navigate("home", {trigger: true, replace: false});
                $(App.layout.home.el).show();
                $(App.footer.el).animate({"margin-bottom":-45+"px"},400,function(){
                    $(App.footer.el).hide();
                });
                $(App.layout.playlists.el).animate({"margin-left":100+"%"},400, function(){
                    App.layout.playlists.$el.hide();
                });

            },
            getSearch: function (e) {
              var self = this,
                  margin;
              (e.currentTarget.attributes.class.value === "search")? margin = 0 : margin = -45;
              $(e.currentTarget).hide().siblings().show();
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
            getMusic: function() {
                if(Backbone.history.fragment === "friends") {
                    this.ui.music.addClass("active").siblings().removeClass("active");
                    $(App.footer.el).animate({"margin-bottom":-45+"px"},300);
                    $(App.playlistLayout.list.el).show().animate({"margin-left": 0 + "px"}, 300, function () {
                        $(App.playlistLayout.friends.el).hide();
                        $(App.footer.el).animate({"margin-bottom":-0+"px"},300);
                        window.history.back();
                    });
                }
            },
            getFriends: function(){
                this.ui.friends.addClass("active").siblings().removeClass("active");
                Backbone.history.navigate("friends", {trigger: true, replace:false});
                $(App.playlistLayout.friends.el).show();
                $(App.footer.el).animate({"margin-bottom":-45+"px"},300);
                $(App.playlistLayout.list.el).animate({"margin-left": - window.innerWidth + "px"}, 300, function(){
                    $(App.footer.el).animate({"margin-bottom":-0+"px"},300);
                    $(this).hide();
                });
            }
        });
    });