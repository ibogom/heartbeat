/**
 * Created by Ievgen on 18.01.2015.
 */
define(['App', 'jquery', 'underscore', 'backbone','marionette','collections/VkFriendsCollection', 'views/FriendlistView'],
    function (App, $, _, Backbone, Marionette, VkFriendsCollection, FriendlistView) {
        "use strict";
        return Backbone.Marionette.CollectionView.extend({
            childView: FriendlistView,
            className:"friends-wrapper",
            tagName: "ul",
            collection: VkFriendsCollection
        });
    });