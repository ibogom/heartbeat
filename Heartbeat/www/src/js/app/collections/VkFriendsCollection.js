define(["jquery", "underscore", "backbone", "models/VkFriendModel", "models/VkAuthModel", "helpers/VkRequestHelper"],
    function ($, _, Backbone, VkFriendModel, VkAuthModel, VkRequestHelper) {
        "use strict";
        var FriendsCollection = Backbone.Collection.extend({
            model: VkFriendModel,
            getUrl: function (FriendsNumber) {
                VkAuthModel.setData();
                return VkRequestHelper.getFriendsUrl(
                    VkAuthModel.defaults.userId,
                    FriendsNumber,
                    VkAuthModel.defaults.accessToken);
            },
            url: function () {
                return this.getUrl(this.FriendsNumber);
            }
        });
        return FriendsCollection;

    }
);