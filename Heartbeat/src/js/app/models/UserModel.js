define(["jquery", "underscore", "backbone", "models/VkAuthModel", "helpers/VkRequestHelper"],
    function ($, _, Backbone, VkAuthModel, VkRequestHelper) {
        "use strict";
        var userModel = Backbone.Model.extend({
            defaults: {
              "maxBeats":"1500"
            },
            initialize: function(){
               this.user = Backbone.Wreqr.radio.channel('user');
            },
            setData: function(){
              if(JSON.parse(window.localStorage.getItem("userGlobals")).userInfo !== undefined &&
                 window.localStorage.getItem("beats") !== null
              ){
                      this.user.info = JSON.parse(window.localStorage.getItem("userGlobals")).userInfo;
                      this.user.beats = JSON.parse(window.localStorage.getItem("beats"));
              }
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