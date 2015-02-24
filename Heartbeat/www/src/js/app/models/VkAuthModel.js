define(["jquery", "underscore", "backbone"],
    function ($, _, Backbone) {
        "use strict";
        // Creates a new Backbone Model class object
        var Model = Backbone.Model.extend({
            defaults: {
                "userId": "",
                "accessToken": "",
                "clientId": "4790565",
                "securityKey": "sGkcxJvxfooJf7dHWWd6",
                "url": "http://oauth.vk.com/authorize?",
                "redirectUri": "http://10.131.171.143:8010",
                "redirectUriWork": "http://10.129.171.67:8010",
                "scope": "friends,audio",
                "display": "mobile",
                "versionApi": "5.27",
                "response": "token"
            },
            setData: function () {
                var globals = JSON.parse(window.localStorage.getItem("userGlobals")) || {};
                if (this.userId === undefined && this.accessToken === undefined) {
                    this.defaults.userId = globals.user_id;
                    this.defaults.accessToken = globals.access_token;
                }
            },
            url: function (loginMethod) {
                return this.defaults.url +
                    "client_id=" + this.defaults.clientId +
                    "&scope=" + this.defaults.scope +
                    "&redirect_uri=" + this.defaults.redirectUriWork + "?loginMethod=" + loginMethod +
                    "&display=" + this.defaults.display +
                    "&v=" + this.defaults.versionApi +
                    "&response_type=" + this.defaults.response;
            },
            parse: function (data) {
                return data.response;
            }
        });

        return new Model();

    }
);