/**
 * Created by Ievgen on 18.01.2015.
 */
define(['jquery', 'underscore', 'backbone', 'marionette', 'templates/templateCollection'],
    function ($, _, Backbone, Marionette, templateFn) {
        "use strict";
        return Backbone.Marionette.ItemView.extend({
            className: "player-wrapper",
            tagName: "div",
            template: templateFn['PlayerView.hbs'],
            initialize: function () {
                this.controller = this.options.controller;
                this.global = Backbone.Wreqr.radio.channel('global');
                this.$content = $("#layout-content-block");
            },
            ui: {
                "play": ".play",
                "pause": ".pause",
                "next": ".next",
                "prev": ".prev",
                "profile": ".profile",
                "volume": ".volume",
                "volBar": ".volume-bar",
                'volTrigger': ".volume-trigger-button"
            },
            events: {
                "touchend @ui.play": "startMusic",
                "touchend @ui.pause": "pauseMusic",
                "touchend @ui.next": "nextSong",
                "touchend @ui.prev": "prevSong",
                "touchend @ui.volume": "showVolume",
                "touchend @ui.profile": "showProfile",
                "touchstart @ui.volTrigger": "startVolumeSwipe",
                "touchmove @ui.volBar": "swipeVolume"
            },
            startMusic: function (e) {
                e.preventDefault();
                $(e.currentTarget).removeClass("play").addClass("pause");
                this.controller.playSong();
            },
            pauseMusic: function (e) {
                e.preventDefault();
                $(e.currentTarget).removeClass("pause").addClass("play");
                this.controller.pauseSong();
            },
            nextSong: function (e) {
                e.preventDefault();
                this.ui.play.removeClass("play").addClass("pause");
                this.controller.navigateSong("next");
            },
            prevSong: function (e) {
                e.preventDefault();
                this.ui.play.removeClass("play").addClass("pause");
                this.controller.navigateSong("prev");
            },
            showVolume: function (e) {
                $(e.currentTarget).toggleClass("active");
                var margin = ($(e.currentTarget).hasClass("active")) ? 0 : -30;
                this.$el.find(".volume-bar").animate({"margin-top": margin + "px"}, 200);
            },
            swipeVolume: function (e) {
                var volWrapper = $(e.currentTarget).find(".volume-wrapper"),
                    volTrigger = $(e.currentTarget).find(".volume-trigger"),
                    dist = Math.round(parseInt(e.originalEvent.changedTouches[0].clientX) - volWrapper.offset().left);
                    this.swipeInPercent = (dist*100)/volWrapper.width();
                    this.global.volume = (this.swipeInPercent/100).toFixed(2);
                if (this.touchStart && this.swipeInPercent < 94.5 && this.swipeInPercent >= 0 ) {
                    volTrigger.css({"width": this.swipeInPercent+"%"});
                    (this.global.audio)? this.global.audio.volume = this.global.volume : false;
                }
            },
            startVolumeSwipe: function (e) {
                this.touchStart = true;
            },
            showProfile: function(e){
                  $(e.currentTarget).toggleClass("active");
                  var margin = ($(e.currentTarget).hasClass("active"))? 0 : -160;
                  this.$content.show().animate({"margin-top": margin+"px"},300);
            },
            onRender: function () {
                if (this.global.model !== undefined) {
                    this.$el.empty().append(this.template({
                        author: this.global.model.get("artist"),
                        title: this.global.model.get("title"),
                        minutes: this.global.model.get("minutes"),
                        seconds: this.global.model.get("seconds"),
                        isPlayed: this.global.model.get("isPlayed"),
                        volume: (this.global.volume*100)
                    }));
                } else {
                    this.$el.empty().append(this.template({
                        author: "No artist",
                        title: "No title",
                        minutes: "0",
                        seconds: "00"
                    }));
                }

            }
        });
    });