/**
 * Created by Ievgen on 29.01.2015.
 */
define([
    'jquery',
    'underscore',
    'App',
    'backbone',
    'marionette',
    'models/UserModel',
    'views/ProfileItemView'
], function ($, _, App, Backbone, Marionette,
             UserModel,
             ProfileItemView) {
    "use strict";
    return Backbone.Marionette.Controller.extend({
        initialize: function () {
            this.user = Backbone.Wreqr.radio.channel('user');
            this.user.model = new UserModel();
            this.user.beats = (this.user.beats !== undefined)? this.user.beats: 300;
        },
        userInfoResponse: function(attr){
            return{
                src: attr.photo_100,
                lastName: attr.last_name,
                firstName: attr.first_name,
                SongsNumber: attr.counters.audios,
                ListenersNumber: attr.counters.followers,
                Rating: this.user.rating,
                MaxBeats: this.user.model.get("maxBeats"),
                BeatsNow: this.beats
            };
        },
        getUserInfo: function () {
            var self = this;
            this.user.model.fetch().done(function (result) {
                self.user.model.set("userInfo",self.userInfoResponse(result.response[0]));
                App.homePageLayout.contentBlock.show(new ProfileItemView());
            });
        }
    });
});