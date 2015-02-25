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
            //model: UserModel,
            initialize: function(){
                this.user = Backbone.Wreqr.radio.channel('user');
                this.user.beats = (this.user.beats !== undefined)? this.user.beats: 300;
            },
            ui: {

            },

            events: {

            },
            onRender: function () {
                //this.template(this.model.toJSON());
                if(this.user.model !== undefined ){
                    var userInfo = this.user.model.get("userInfo");
                    this.$el.empty().append(this.template({
                        src: userInfo.src,
                        lastName: userInfo.lastName,
                        firstName: userInfo.firstName,
                        SongsNumber: userInfo.SongsNumber,
                        ListenersNumber: userInfo.ListenersNumber,
                        Rating: this.user.rating,
                        MaxBeats: this.user.model.get("maxBeats"),
                        BeatsNow: this.user.beats
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