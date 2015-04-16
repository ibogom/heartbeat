/**
 * Created by ibogom on 24.02.2015.
 */
define([
    'jquery',
    'underscore',
    'App',
    'backbone',
    'marionette',
    'helpers/SwipeDownHelper'
], function ($, _, App, Backbone, Marionette, SwipeDownHelper) {
    "use strict";
    return Backbone.Marionette.Controller.extend({
        initialize: function () {
            this.controller = this.options.controller;
            this.view = this.options.view;
            this.collection = this.options.collection;
        },
        refresh: function () {
            this.detectRoute();
        },
        detectRoute: function () {
            switch (Backbone.history.fragment) {
                case "playlist":
                {
                    this.onlineMusicUpdate();
                }
                    break;
                case "friends":
                {
                    this.friendsUpdate();
                }
                    break;
                case "downloads":
                {
                    this.downloadedMusicUpdate();
                }
                    break;
                case "likes":
                {
                    this.likedMusicUpdate();
                }
                    break;
            }
        },

        onlineMusicUpdate: function () {

        },
        friendsUpdate: function () {

        },
        downloadedMusicUpdate: function () {

        },
        likedMusicUpdate: function(){

        }
    });

});