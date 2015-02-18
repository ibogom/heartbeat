/**
 * Created by Ievgen on 21.01.2015.
 */
define([
    'jquery',
    'underscore',
    'App',
    'backbone',
    'marionette',
    'collections/VkFriendsCollection',
    'views/FriendsCollectionView'
], function ($, _, App, Backbone, Marionette,
             VkFriendsCollection,
             FriendsCollectionView) {
    "use strict";
    return Backbone.Marionette.Controller.extend({
        initialize: function () {
            this.vkFriendsCollection = new VkFriendsCollection();
            if(window.localStorage.getItem("friends") === null){
                window.localStorage.setItem("friends","");
            }
            this.friends = window.localStorage.getItem("friends");
        },
        getFriends: function (FriendsNumber) {
            this.vkFriendsCollection.FriendsNumber = FriendsNumber;
            (this.friends.length > 0)? this.getFriendsLocal() : this.getFriendsRiquest();
        },
        getFriendsLocal: function(){
            var friends = JSON.parse(window.localStorage.getItem("friends"));
            this.vkFriendsCollection.reset(friends);
            this.showView();
        },
        getFriendsRiquest: function(){
            var self = this;
            this.vkFriendsCollection.fetch().done(function (result) {
                self.saveData(result.response);
                self.showView();
            });
        },
        showView: function(){
            this.vkFriendsCollectionView = new FriendsCollectionView({
                collection: this.vkFriendsCollection
            });
            App.playlistLayout.friends.show(this.vkFriendsCollectionView);
        },
        saveData: function (result) {
            var friends = _.map(result, function (friends) {
                return {
                    firstName: friends.first_name,
                    lastName: friends.last_name,
                    isOnline: friends.online,
                    photo: friends.photo_50,
                    country: friends.country,
                    city: friends.city
                };
            });
            window.localStorage.setItem("friends",JSON.stringify(friends));
            this.vkFriendsCollection.reset(friends);
        }
    });
});