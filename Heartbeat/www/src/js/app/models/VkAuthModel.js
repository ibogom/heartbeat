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
                "redirectUriHome": "http://localhost:8010",
                //"redirectUriWork": "http://10.131.171.143:8443",
                //"redirectUri5rooms": "http://192.168.1.103:8443",
                //"redirectWebSite": "https://comeon.com.ua/",
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
                    "&redirect_uri=" + this.defaults.redirectUriHome + "?loginMethod=" + loginMethod +
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