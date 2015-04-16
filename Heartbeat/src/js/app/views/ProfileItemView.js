/**
 * Created by Ievgen on 18.01.2015.
 */
define(['jquery', 'underscore', 'backbone', 'marionette',
        'templates/templateCollection'],
    function ($, _, Backbone, Marionette, templateFn) {
        "use strict";
        return Backbone.Marionette.ItemView.extend({
            className:"profile-wrapper",
            tagName: "div",
            template: templateFn['ProfileView.hbs'],
            initialize: function(){
                this.user = Backbone.Wreqr.radio.channel('user');
                this.user.beats = (this.user.beats !== undefined)? this.user.beats: 300;
            },
            ui: {

            },

            events: {

            },
            onRender: function () {
                if(this.user.info !== undefined ){
                    this.$el.empty().append(this.template({
                        src: this.user.info.src,
                        lastName: this.user.info.lastName,
                        firstName: this.user.info.firstName,
                        songsNumber: this.user.info.songsNumber,
                        listenersNumber: this.user.info.listenersNumber,
                        rating: this.user.rating,
                        maxBeats: this.user.info.maxBeats,
                        beatsNow: this.user.beats
                    }));
                } else {
                    this.$el.empty().append(this.template({
                        src: "",
                        lastName: "No",
                        firstName: "Name",
                        SongsNumber: "0",
                        ListenersNumber : "0",
                        Rating : "0",
                        MaxBeats: "1500",
                        BeatsNow: "0"
                    }));
                }
            }
        });
    });