/**
 * Created by snopp_000 on 22.11.2014.
 */
define(['jquery', 'underscore', 'backbone', 'marionette', 'App', 'models/VkAuthModel', 'views/HomeHeaderView', 'helpers/VkRequestHelper',
        'templates/templateCollection'],
    function ($, _, Backbone, Marionette, App, VkAuthModel, HomeHeaderView, VkRequestHelper, templateFn) {
        "use strict";
        return Backbone.Marionette.ItemView.extend({
            className: "header-wrapper",
            tagName: "div",
            template: templateFn['HeaderView.hbs']({
                showLeftBack: true,
                showSearch: true,
                showSend: true
            }),
            ui: {
                "back": "span.left-back",
                "search": "span.search",
                "cancel": "span.cancel",
                "send": "span.send"
            },
            initialize: function () {
                VkAuthModel.setData();
                this.user = Backbone.Wreqr.radio.channel('user');
                this.user.beats = (this.user.beats !== undefined)? this.user.beats: 300;
                this.messages = Backbone.Wreqr.radio.channel('messages');
            },
            events: {
                "touchend @ui.back": "goBack",
                "touchend @ui.search": "getSearch",
                "touchend @ui.cancel": "getSearch",
                "touchend @ui.send": "sendMusic"
            },
            goBack: function () {
                App.header.show(new HomeHeaderView());
                $(".message").hide();
                $(".search").show();
                $(App.footer.el).animate({"margin-bottom": -45 + "px"}, 150);
                $(App.playlistLayout.list.el).show().animate({"margin-left": 0 + "px"}, 300, function () {
                    $(App.playlistLayout.friends.el).hide();
                    $(App.footer.el).show().animate({"margin-bottom": 0 + "px"}, 150);
                    $("li.music").addClass("active").siblings().removeClass("active");
                    window.history.back();
                });
            },
            getSearch: function (e) {
                var margin;
                (e.currentTarget.attributes.class.value === "search") ? margin = 0 : margin = -45;
                $(e.currentTarget).hide().siblings().show();
                App.playlistLayout.search.$el.show().find(".search-wrapper").show().animate({
                    "margin-top": margin + "px"
                }, 300, function () {
                    if (margin === 0) {
                        App.playlistLayout.search.$el.find("#searchInput").focus();
                    } else {
                        App.playlistLayout.search.$el.find("#searchInput").val('');
                        App.playlistLayout.searchResult.$el.empty();
                        App.playlistLayout.search.$el.hide();
                        App.playlistLayout.list.$el.show();
                    }
                });
            },
            sendMusic: function () {
                var self = this;
                this.user.beats = this.user.beats+6;
                window.localStorage.setItem("beats",JSON.stringify(this.user.beats));
                _.each($("input:checked"), function (ids) {
                    VkRequestHelper.sendAudio(VkAuthModel.defaults.userId, ids.dataset.id, self.messages.send.audio,
                        VkAuthModel.defaults.accessToken);
                });
                Backbone.history.navigate("home", {trigger: true, replace: false});
            },
            onRender: function () {
                this.ui.search.show();
            }
        });
    });