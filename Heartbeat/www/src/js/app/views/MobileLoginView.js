/**
 * Created by Ievgen on 15.01.2015.
 */
define(['jquery', 'underscore', 'backbone', 'marionette', 'App',
        'models/VkAuthModel','models/FacebookAuthModel',
        'templates/templateCollection'],
    function ($, _, Backbone, Marionette, App,
              VkAuthModel,FacebookAuthModel,
              templateFn) {
        "use strict";
        return Backbone.Marionette.ItemView.extend({
            tagName: 'div',
            id: 'mobileLogin',

            template: templateFn['MobileLogin.hbs'],

            ui: {
                "vk": "#vkLogin",
                "fb": "#fbLogin"
            },

            events: {
                'click @ui.vk': 'showLogin',
                'click @ui.fb': 'showLogin',
                'click @ui.tw': 'showLogin'
            },

            showLogin: function (e) {
                var authUrl, loginMethod = e.currentTarget.id;
                e.preventDefault();
                switch (loginMethod){
                    case "vkLogin":
                        authUrl = VkAuthModel.url(loginMethod);
                        break;
                    case "fbLogin":
                        authUrl = FacebookAuthModel.url(loginMethod);
                        break;
                    case "twLogin":
                        break;
                }
                //window.location.href = authUrl;
                //console.log(Inappbrowser);
                var appInBrowser = window.open(authUrl, '_blank', 'location=yes');
                appInBrowser.addEventListener('loadstart', function(event){
                        window.alert("hello from:"+event.url);
                    });

            }
        });
    });