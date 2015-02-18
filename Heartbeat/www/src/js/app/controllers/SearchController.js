/**
 * Created by Ievgen on 21.01.2015.
 */
define([
    'jquery',
    'underscore',
    'App',
    'backbone',
    'marionette',
    'models/SearchModel',
    'collections/VkAudioCollection',
    'views/SearchListCollectionView'
], function ($, _, App, Backbone, Marionette, SearchModel,
             VkAudioCollection, SearchListCollectionView) {
    "use strict";
    return Backbone.Marionette.Controller.extend({
        initialize: function () {
            this.model = new SearchModel();
            this.vkAudioCollection = new VkAudioCollection();
        },
        detectRoute: function (route) {
            var method;
            switch (route) {
                case "playlist":
                    method = "online";
                    break;
                case "downloads":
                    method = "offline";
                    break;
                case "likes":
                    method = "offline";
                    break;
                case "recommends":
                    method = "online";
                    break;
                case "friends":
                    method = "online";
                    break;
            }
            return method;
        },
        startSearch: function (value) {
            window.loader.show();
            window.localStorage.setItem("searchItem", value);
            this.method = this.detectRoute(Backbone.history.fragment);
            (this.method === "online") ? this.onlineSearch() : this.offlineSearch();
        },
        onlineSearch: function () {
            var self = this;
            //TODO realize method for friends search
            this.model.fetch().done(function (result) {
                var songsCount = result.response.shift();
                self.saveData(result.response);
                self.searchListCollectionView = new SearchListCollectionView({
                    collection: self.vkAudioCollection
                });
                App.playlistLayout.list.$el.hide();
                App.playlistLayout.searchResult.show(self.searchListCollectionView);
                window.loader.hide();
            }).fail(function (err) {
                console.log("Error: ", err);
            });
        },
        offlineSearch: function () {

        },
        saveData: function (result) {
            var songs = _.map(result, function (songs) {
                var minutes = parseInt(songs.duration / 60),
                    seconds = songs.duration % 60;
                return {
                    artist: songs.artist,
                    minutes: minutes,
                    seconds: seconds,
                    genre: songs.genre,
                    lyricsId: songs.lyrics_id,
                    ownerId: songs.owner_id,
                    title: songs.title,
                    url: songs.url,
                    showShare: true
                };
            });
            this.vkAudioCollection.reset(songs);
        }
    });
});