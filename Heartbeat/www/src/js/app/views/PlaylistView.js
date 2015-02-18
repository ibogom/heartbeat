/**
 * Created by Ievgen on 18.01.2015.
 */
define(['App', 'jquery', 'underscore', 'backbone', 'marionette', 'models/VkAudioModel',
        'controllers/VkPlayerController',
        'templates/templateCollection'],
    function (App, $, _, Backbone, Marionette, VkAudioModel, Player, templateFn) {
        "use strict";
        return Backbone.Marionette.ItemView.extend({
            tagName: "li",
            className: "song",
            template: templateFn['PlaylistView.hbs'],
            model: VkAudioModel,
            initialize: function () {
                this.player = new Player();
                this.global = Backbone.Wreqr.radio.channel('global');
            },
            ui: {
                "info": ".song-info",
                "play": ".pl-play",
                "pause": ".pl-pause",
                "download": ".download",
                "share": '.share',
                "like": ".like",
                "remove": ".remove"
            },
            events: {
                "touchend @ui.play": "playMusic",
                "touchend @ui.pause": "pauseMusic",
                "touchend @ui.like": "likedSong",
                "touchend @ui.download": "downloadSong",
                "touchend @ui.info": "goBack"
            },
            goBack: function (e) {
                var event = $(e.currentTarget).parent().find(".pl-play");
                event.currentTarget = event;
                this.playMusic(event);
                $(App.footer.el).animate({"margin-bottom": -45 + "px"}, 200, function () {
                    App.layout.playlists.$el.animate({"margin-left": window.innerWidth + "px"}, 200, function () {
                        Backbone.history.navigate("home", {trigger: true, replace: false});
                        App.layout.playlists.$el.hide();
                    });
                });
            },
            playMusic: function (e) {
                $("li.song").find("div.pl-pause").removeClass("pl-pause").addClass("pl-play");
                $(e.currentTarget).removeClass("pl-play").addClass("pl-pause");
                if (this.global.audio !== undefined && this.global.model !== undefined &&
                    this.global.model.get("artist") !== this.model.get("artist")) {
                    this.player.stopAudio();
                }
                this.global.model = this.model;
                this.global.model.set("isPlayed",true);
               (this.global.model.get("loaded") === true)? this.player.playSong() : this.player.loadSong();
            },
            pauseMusic: function (e) {
                $(e.currentTarget).removeClass("pl-pause").addClass("pl-play");
                this.player.pauseSong();
            },
            likedSong: function () {
                var self = this;
                this.ui.share.show().animate({
                    "margin-left": 0 + "px"
                }, 300, function () {
                    self.ui.like.hide();
                });
            },
            downloadSong: function () {

            },
            onRender: function () {
                this.template(this.model.toJSON());
            }
        });
    });