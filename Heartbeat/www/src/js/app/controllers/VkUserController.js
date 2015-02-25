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
            this.user.model.setData();
            this.user.beats = (this.user.beats !== undefined)? this.user.beats: 300;
            this.userGlobals = JSON.parse(window.localStorage.getItem("userGlobals"));
        },
        userInfoResponse: function(attr){
            return{
                src: attr.photo_100,
                lastName: attr.last_name,
                firstName: attr.first_name,
                songsNumber: attr.counters.audios,
                listenersNumber: attr.counters.followers,
                rating: this.user.rating,
                maxBeats: this.user.model.get("maxBeats")
            };
        },
        getUserInfo: function () {
            (this.user.info !== undefined)? this.showView() : this.getUserRequest();
        },
        showView: function(){
            App.homePageLayout.contentBlock.show(new ProfileItemView());
        },
        getUserRequest: function(){
            var self = this;
            this.user.model.fetch().done(function (result) {
                var userInfo = self.userInfoResponse(result.response[0]);
                self.user.info = userInfo;
                self.userGlobals.userInfo = userInfo;
                window.localStorage.setItem("userGlobals",JSON.stringify(self.userGlobals));
                window.localStorage.setItem("beats",JSON.stringify(self.user.beats));
                self.showView();
            });
        }
    });
});