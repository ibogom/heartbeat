/**
 * Created by Ievgen on 18.01.2015.
 */
define(['jquery', 'underscore', 'backbone', 'marionette', 'models/UserModel',
        'templates/templateCollection'],
    function ($, _, Backbone, Marionette, UserModel, templateFn) {
        "use strict";
        return Backbone.Marionette.ItemView.extend({
            className:"profile-wrapper",
            tagName: "div",
            template: templateFn['ProfileView.hbs'],
            model: UserModel,
            ui: {

            },

            events: {

            },
            onRender: function () {
                this.template(this.model.toJSON());
            }
        });
    });