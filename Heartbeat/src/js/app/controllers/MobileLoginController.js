/**
 * Created by Евгений on 07.12.2014.
 */
define([
    'jquery',
    'underscore',
    'App',
    'backbone',
    'marionette',
    'models/VkAuthModel',
    'models/FacebookAuthModel'
], function ($, _, App, Backbone, Marionette,
             VkAuthModel, FacebookAuthModel) {
    "use strict";
    return Backbone.Marionette.Controller.extend({
        initialize: function () {
            this.facebookAuthModel = new FacebookAuthModel();
            //window.loader.show();
        },

        detectRoute: function () {
            var method = document.location.search.match(/loginMethod=(.+)/)[1];
            switch (method) {
                case "vkLogin":
                    this.vkRoute();
                    break;
            }
        },

        vkRoute: function () {
            if (Backbone.history.fragment.indexOf("error") !== -1) {
                Backbone.history.navigate("", {trigger: true, replace: false});
            } else {
                this.routeParse(Backbone.history.fragment);
                Backbone.history.navigate("home", {trigger: true, replace: false});
            }
        },

        routeParse: function (url) {
            this.queryString = _
                .chain(url.split("&"))
                .map(function (arg) {
                    return [arg.split("=")[0], decodeURIComponent(arg.split("=")[1])];
                })
                .object()
                .value();
            window.localStorage.setItem("userGlobals", JSON.stringify(this.queryString));
            VkAuthModel.setData();
        }

    });
});