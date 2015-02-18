define(["jquery", "underscore", "backbone","models/VkAuthModel" ,"helpers/VkRequestHelper"],
    function ($, _, Backbone, VkAuthModel, VkRequestHelper) {
        "use strict";
        var searchModel = Backbone.Model.extend({
            getUrl: function () {
                VkAuthModel.setData();
                var keyWords = window.localStorage.getItem("searchItem");
                return VkRequestHelper.searchAudios(keyWords, VkAuthModel.defaults.accessToken);
            },
            url: function () {
                return this.getUrl();
            }
        });
        return searchModel;

    }
);