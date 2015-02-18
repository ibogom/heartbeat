define(["jquery", "underscore", "backbone", "models/VkAudioModel", "models/VkAuthModel", "helpers/VkRequestHelper"],
    function ($, _, Backbone, VkAudioModel, VkAuthModel, VkRequestHelper) {
        "use strict";
        var AudioCollection = Backbone.Collection.extend({
            model: VkAudioModel,
            getUrl: function (songsNumber) {
                VkAuthModel.setData();
                return VkRequestHelper.getAudioUrl(
                    VkAuthModel.defaults.userId,
                    songsNumber,
                    VkAuthModel.defaults.accessToken);
            },
            setData: function () {
                if (window.localStorage.getItem("songs") !== null && window.localStorage.getItem("songs") !== "") {
                    var songs = JSON.parse(window.localStorage.getItem("songs"));
                    this.reset(songs);
                }
            },
            url: function () {
                return this.getUrl(this.songsNumber);
            }
        });
        return AudioCollection;

    }
);