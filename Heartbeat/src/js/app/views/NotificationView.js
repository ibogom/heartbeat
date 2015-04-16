/**
 * Created by Ievgen on 01.02.2015.
 */
define(['App', 'jquery', 'underscore', 'backbone', 'marionette', 'models/UserModel',
        'templates/templateCollection'],
    function (App, $, _, Backbone, Marionette, UserModel, templateFn) {
        "use strict";
        return Backbone.Marionette.ItemView.extend({
            tagName: "div",
            className: "notification-wrapper",
            template: templateFn['Notifications.hbs'],
            ui:{
                "getMessage":"span.get-message"
            },
            events:{
                "click @ui.getMessage":"showMessage"
            },
            showMessage: function(){

            }
        });
    });