/**
 * Created by Ievgen on 18.01.2015.
 */
define(['App', 'jquery', 'underscore', 'backbone', 'marionette', 'collections/VkAudioCollection',
        'views/PlayListView', 'views/SearchView'],
    function (App, $, _, Backbone, Marionette, VkAudioCollection, PlayListView, SearchView) {
        "use strict";
        return Backbone.Marionette.CollectionView.extend({
            childView: PlayListView,
            className: "songs-wrapper",
            tagName: "ul",
            collection: VkAudioCollection,
            setContentHeight: function(){
                this.$el.height(function () {
                    // 45px header height and 45px footer height
                    var caculatedHeight = window.innerHeight - 90;
                    return caculatedHeight + 'px';
                }).css('overflow-y', 'scroll');
            },
            onRender: function () {
                App.playlistLayout.search.show(new SearchView());
                App.layout.playlists.$el.show();
                this.setContentHeight();
            }
        });
    });