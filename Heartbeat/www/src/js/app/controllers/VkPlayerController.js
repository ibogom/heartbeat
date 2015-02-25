/**
 * Created by Ievgen on 31.01.2015.
 */
define([
    'jquery',
    'underscore',
    'App',
    'backbone',
    'marionette',
    'collections/VkAudioCollection',
    'views/PlayerView'
], function ($, _, App, Backbone, Marionette,
             VkAudioCollection,
             PlayerView) {
    "use strict";
    return Backbone.Marionette.Controller.extend({
        initialize: function () {
            this.global = Backbone.Wreqr.radio.channel('global');
            this.user = Backbone.Wreqr.radio.channel('user');
            this.user.beats = (this.user.beats !== undefined)? this.user.beats: 300;
            this.collection = new VkAudioCollection();
            this.collection.setData();
            if(!this.global.model){
                this.global.model = this.collection.models[0];
            }
            this.nextSong = function () {
                this.global.model.id++;
                return this.collection.models[this.global.model.id];
            };
            this.prevSong = function () {
                this.global.model.id--;
                return this.collection.models[this.global.model.id];
            };
            if (!this.global.volume) {
                this.global.volume = 0.5;
            }
        },
        getPlayer: function () {
            App.homePageLayout.playerBlock.show(new PlayerView({controller: this}));
        },
        loadSong: function () {
            var self = this,
                src = this.global.model.get("url");
            this.global.audio = new window.Audio(src);
            this.global.audio.volume = this.global.volume;
            this.global.audio.addEventListener('loadeddata', function () {
                self.global.model.set("loaded", true);
                self.playerView = new PlayerView({
                    controller: self
                });
                self.playSong();
                $(".beats-now").text(self.user.beats--);
                App.homePageLayout.playerBlock.show(self.playerView);
            }, false);
        },
        playSong: function () {
            this.collection.models[this.global.model.id].set("isPlayed", true);
            window.localStorage.setItem("songs", JSON.stringify(this.collection.models));
            (!this.global.audio)? this.loadSong() : this.global.audio.play();
        },
        pauseSong: function () {
            this.collection.models[this.global.model.id].set("isPlayed", false);
            window.localStorage.setItem("songs", JSON.stringify(this.collection.models));
            (!this.global.audio)? this.loadSong() : this.global.audio.pause();
        },
        stopAudio: function () {
            this.global.audio.pause();
            this.global.audio.currentTime = 0;
            _.each(this.collection.models, function (model) {
                model.set("isPlayed", false);
            });
            window.localStorage.setItem("songs", JSON.stringify(this.collection.models));
        },
        navigateSong: function (elTrigger) {
            this.stopAudio();
            this.global.model = (elTrigger === "next")? this.nextSong() : this.prevSong();
            this.loadSong();
        }
    });
});