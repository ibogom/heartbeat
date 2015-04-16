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
            collection: VkFriendsCollection,
            setContentHeight: function(){
                this.$el.height(function () {
                    // 45px header height and 45px footer height
                    var caculatedHeight = window.innerHeight - 90;
                    return caculatedHeight + 'px';
                }).css('overflow-y', 'scroll');
            },
            onRender: function(){
                this.setContentHeight();
            }
        });
    });