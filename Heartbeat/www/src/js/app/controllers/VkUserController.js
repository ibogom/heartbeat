/**
 * Created by Ievgen on 29.01.2015.
 */
define([
    'jquery',
    'underscore',
    'App',
    'backbone',
    'marionette',
    'models/UserModel',
    'views/ProfileItemView'
], function ($, _, App, Backbone, Marionette,
             UserModel,
             ProfileItemView) {
    "use strict";
    return Backbone.Marionette.Controller.extend({
        initialize: function () {
            this.userModel = new UserModel();
        },
        getUserInfo: function () {
            var self = this;
            this.userModel.fetch().done(function (result) {
                _.each(result.response, function(attr){
                    self.userModel.set(attr);
                });
                self.profileItemView = new ProfileItemView({
                    model: self.userModel
                });
                App.homePageLayout.contentBlock.show(self.profileItemView);
            });
        }
    });
});