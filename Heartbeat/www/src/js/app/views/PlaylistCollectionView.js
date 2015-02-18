/**
 * Created by Ievgen on 18.01.2015.
 */
define(['App', 'jquery', 'underscore', 'backbone', 'marionette', 'collections/VkAudioCollection',
        'views/PlayListView','views/PlaylistHeaderView', 'views/SearchView'],
    function (App, $, _, Backbone, Marionette, VkAudioCollection, PlayListView, PlaylistHeaderView, SearchView) {
        "use strict";
        return Backbone.Marionette.CollectionView.extend({
            childView: PlayListView,
            className: "songs-wrapper",
            tagName: "ul",
            collection: VkAudioCollection,
            initialize: function () {
                App.header.show(new PlaylistHeaderView());
            },
            onRender: function () {
                App.playlistLayout.search.show(new SearchView());
                App.layout.playlists.$el.show();
            }
        });
    });