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
            if (window.localStorage.getItem("songs") === null) {
                window.localStorage.setItem("songs", "");
            }
            this.songs = window.localStorage.getItem("songs");
        },
        getAudio: function (songsNumber) {
            this.vkAudioCollection.songsNumber = songsNumber;
            (this.songs.length > 0) ? this.getLocalAudio() : this.getAudioRequest();
            SwipeDownHelper.action(this);
        },
        getLocalAudio: function () {
            this.vkAudioCollection.setData();
            this.showView();
        },
        getAudioRequest: function () {
            var self = this,
                date = new Date();
            window.loader.show();
            this.vkAudioCollection.fetch().done(function (result) {
                var songsCount = result.response.shift();
                $(App.layout.refresh.el).find(".update-date").empty().text(date.toLocaleString());
                //self.difItems = self.compareResponse(result.response);
                //if(self.difItems.length >= 0 && self.newItemAdded === false){
                //    self.replaceDifItems(self.difItems);
                //}else{
                    self.saveData(result.response);
                    self.showView();
                //}
            });
        },
        showView: function () {
            this.playListCollectionView = new PlayListCollectionView({
                collection: this.vkAudioCollection
            });
            if (!$(App.playlistLayout.list.el).html().trim()) {
                App.playlistLayout.list.show(this.playListCollectionView);
            }
            window.loader.hide();
        },
        refresh: function () {
            this.getAudioRequest();
        },
        compareResponse: function (items) {
            var diff, i = 0;
            if (window.localStorage.getItem("songs") !== null) {
                var localData = JSON.parse(window.localStorage.getItem("songs")),
                    detectArrayLength = (items.length >= localData.length) ? items : localData;
                this.newItemAdded = (items.length !== localData.length) ? true : false;
                diff = _.without(_.uniq(_.map(detectArrayLength, function (itemsObg) {
                    var currObj = localData[i++],changedItem;
                    if(itemsObg.artist !== currObj.artist || itemsObg.title !== currObj.title ||
                        itemsObg.url !== currObj.url){
                        changedItem = itemsObg;
                    } else{
                        changedItem = false;
                    }
                    return changedItem;
                })), false);
            } else {
                diff = [];
                this.newItemAdded = true;
            }
            return diff;

        },
        replaceDifItems: function(items){
            //_.each(items, function(attr){
            //    var app = $(".toDetails[data-id="+attr.id+"]"),
            //        header = app.find("h4 span:last-child"),
            //        image = app.find("img");
            //    image.attr("src",attr.icon);
            //    header.empty().text(attr.name);
            //});
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
                    isPlayed: false
                };
            });
            window.localStorage.setItem("songs", JSON.stringify(songs));
            this.vkAudioCollection.reset(songs);
        }
    });

});