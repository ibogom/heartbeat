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
                this.user = Backbone.Wreqr.radio.channel('user');
                this.user.beats = (this.user.beats !== undefined)? this.user.beats: 300;
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
                "touchend @ui.share": "shareSong",
                "touchend @ui.download": "downloadSong"
            },
            goBack: function (e) {
                var event = $(e.currentTarget).parent().find(".pl-play");
                event.currentTarget = event;
                this.playMusic(event);
                Backbone.history.navigate("home", {trigger: true, replace: false});
                $(App.footer.el);
                App.layout.playlists.$el.css({"margin-left":100+"%"});
                //App.layout.playlists.$el.hide();
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
                this.player.loadSong();
               //(this.global.model.get("loaded") === true)? this.player.playSong() : this.player.loadSong();
            },
            pauseMusic: function (e) {
                $(e.currentTarget).removeClass("pl-pause").addClass("pl-play");
                this.player.pauseSong();
            },
            likedSong: function () {
                var self = this;
                this.user.beats = this.user.beats+3;
                this.ui.share.show().animate({
                    "margin-left": 0 + "px"
                }, 300, function () {
                    self.ui.like.hide();
                });
            },
            shareSong: function (){
                this.user.beats = this.user.beats+6;
            },
            downloadSong: function () {

            },
            onRender: function () {
                this.template(this.model.toJSON());
            }
        });
    });