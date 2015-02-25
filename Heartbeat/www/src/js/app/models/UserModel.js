define(["jquery", "underscore", "backbone", "models/VkAuthModel", "helpers/VkRequestHelper"],
    function ($, _, Backbone, VkAuthModel, VkRequestHelper) {
        "use strict";
        var userModel = Backbone.Model.extend({
            defaults: {
              "maxBeats":"1500"
            },
            getUrl: function () {
                VkAuthModel.setData();
                return VkRequestHelper.getUserInfoUrl(
                    VkAuthModel.defaults.userId,VkAuthModel.defaults.accessToken);
            },
            url: function () {
                return this.getUrl();
            }
        });
        return userModel;

    }
);