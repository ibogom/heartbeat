/**
 * Created by Ievgen on 17.01.2015.
 */
define([
    'jquery',
    'underscore',
    'App',
    'backbone',
    'marionette',
    'controllers/VkPlayListController',
    'controllers/VkFriendsController',
    'controllers/VkUserController',
    'controllers/VkPlayerController'
], function ($, _, App, Backbone, Marionette,
             VkPlayListController,VkFriendsController, VkUserController, VkPlayerController) {
    "use strict";
    return Backbone.Marionette.Controller.extend({
        initialize: function () {

        },
        startPlayer: function(){
             this.vkPlayerController = new VkPlayerController();
             this.vkPlayerController.getPlayer();
        },
        startPlayList: function () {
            this.vkPlayListController = new VkPlayListController();
            this.vkPlayListController.getAudio(25);
        },
        startFriends: function(){
            this.vkFriendsController = new VkFriendsController();
            this.vkFriendsController.getFriends(25);
        },
        startUserInfo: function () {
            this.vkUserController = new VkUserController();
            this.vkUserController.getUserInfo();
        }
    });
});