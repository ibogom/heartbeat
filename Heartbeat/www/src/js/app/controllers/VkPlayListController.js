/**
 * Created by Ievgen on 21.01.2015.
 */
define([
    'jquery',
    'underscore',
    'App',
    'backbone',
    'marionette',
    'collections/VkAudioCollection',
    'views/PlayListCollectionView',
    'helpers/SwipeDownHelper'
], function ($, _, App, Backbone, Marionette,
             VkAudioCollection,
             PlayListCollectionView,
             SwipeDownHelper) {
    "use strict";
    return Backbone.Marionette.Controller.extend({
        initialize: function () {
            this.vkAudioCollection = new VkAudioCollection();
            if(window.localStorage.getItem("songs") === null){
               window.localStorage.setItem("songs","");
            }
            this.songs = window.localStorage.getItem("songs");
        },
        getAudio: function (songsNumber) {
            this.vkAudioCollection.songsNumber = songsNumber;
            (this.songs.length > 0)? this.getLocalAudio() : this.getAudioRequest();
            SwipeDownHelper.action(this);
        },
        getLocalAudio: function(){
            this.vkAudioCollection.setData();
            this.showView();
        },
        getAudioRequest: function(){
            var self = this;
            window.loader.show();
            this.vkAudioCollection.fetch().done(function (result) {
                var songsCount = result.response.shift();
                self.saveData(result.response);
                self.compareResponse(result.response);
                self.showView();
            });
        },
        showView: function(){
            this.playListCollectionView = new PlayListCollectionView({
                collection: this.vkAudioCollection
            });
            if(!$(App.playlistLayout.list.el).html().trim()){
                App.playlistLayout.list.show(this.playListCollectionView);
            }
            window.loader.hide();
        },
        refresh: function(){
            this.getAudioRequest();
        },
        compareResponse: function(response){
            var localData = this.vkAudioCollection;
        },
        saveData: function (result) {
            var id = 0;
            var songs = _.map(result, function (songs) {
                var minutes = parseInt(songs.duration / 60),
                    seconds = songs.duration % 60;

                return {
                    media_id: songs.aid,
                    artist: songs.artist,
                    minutes: minutes,
                    seconds: seconds,
                    genre: songs.genre,
                    lyricsId: songs.lyrics_id,
                    ownerId: songs.owner_id,
                    title: songs.title,
                    url: songs.url,
                    id: id++,
                    isPlayed:false
                };
            });
            window.localStorage.setItem("songs",JSON.stringify(songs));
            this.vkAudioCollection.reset(songs);
        }
    });

});