define(["jquery", "underscore", "backbone", "models/VkAuthModel", "helpers/VkRequestHelper"],
    function ($, _, Backbone, VkAuthModel, VkRequestHelper) {
        "use strict";
        var userModel = Backbone.Model.extend({
            getUrl: function () {
                VkAuthModel.setData();
                return VkRequestHelper.getUserInfoUrl(
                    VkAuthModel.defaults.userId);
            },
            url: function () {
                return this.getUrl();
            }
        });
        return userModel;

    }
);