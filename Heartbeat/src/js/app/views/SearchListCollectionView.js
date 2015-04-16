/**
 * Created by Ievgen on 18.01.2015.
 */
define(['App' , 'jquery', 'underscore', 'backbone','marionette','collections/VkAudioCollection', 'views/PlayListView'],
    function (App, $, _, Backbone, Marionette, VkAudioCollection, PlayListView) {
        "use strict";
        return Backbone.Marionette.CollectionView.extend({
            childView: PlayListView,
            className:"songs-wrapper",
            tagName: "ul",
            collection: VkAudioCollection
        });
    });