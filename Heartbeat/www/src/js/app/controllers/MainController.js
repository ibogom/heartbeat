define([
    'App',
    'jquery',
    'backbone',
    'marionette',
    'views/MobileLoginView', 'views/HomeHeaderView','views/PlaylistHeaderView','views/PlaylistFooterView', 'views/FriendsFooterView',
    'controllers/MobileLoginController', 'controllers/VkAPIrequestController', 'controllers/GetBeatsController',
    'controllers/NotificationController'
], function (App, $, Backbone, Marionette,
             MobileLoginView, HomeHeaderView, PlaylistHeaderView,
             PlaylistFooterView, FriendsFooterView,
             MobileLoginController, VkAPIrequestController, GetBeatsController, NotificationController) {
    "use strict";
    return Backbone.Marionette.Controller.extend({
        initialize: function (options) {
            this.vkAPIrequestController = new VkAPIrequestController();
        },
        loginScreen: function () {
            App.mainRegion.show(new MobileLoginView());
        },
        validationScreen: function () {
            this.mobileLoginController = new MobileLoginController();
            this.mobileLoginController.detectRoute();
        },

        homeScreen: function () {
            App.header.show(new HomeHeaderView());
            this.vkAPIrequestController = new VkAPIrequestController();
            this.getBeatsController = new GetBeatsController();
            this.notificationController = new NotificationController();
            this.vkAPIrequestController.startPlayer();
            this.vkAPIrequestController.startUserInfo();
            this.getBeatsController.startBeats();
            this.notificationController.getMessage();
        },
        beatsScreen: function () {
            this.getBeatsController = new GetBeatsController();
            this.getBeatsController.getCategory();
        },
        showRating: function () {
            //App.header.show(new HomeHeaderView());
            //this.vkAPIrequestController = new VkAPIrequestController();
        },
        showSettings: function () {

        },
        showPlaylist: function () {
            App.header.show(new PlaylistHeaderView());
            App.footer.show(new PlaylistFooterView());
            this.vkAPIrequestController.startPlayList();
        },
        downloadsPlayList: function (){

        },
        likesPlayList: function (){

        },
        recommendsPlayList: function () {

        },
        showFriends: function () {
            App.footer.show(new FriendsFooterView());
            //this.vkAPIrequestController = new VkAPIrequestController();
            this.vkAPIrequestController.startFriends();
        }
    });
});