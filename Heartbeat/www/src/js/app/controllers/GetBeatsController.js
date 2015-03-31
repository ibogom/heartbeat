/**
 * Created by Ievgen on 29.01.2015.
 */
define([
    'jquery',
    'underscore',
    'App',
    'backbone',
    'marionette',
    'models/BeatsModel',
    'views/GetBeatsView',
    'views/GetBeatsCategoryView'
], function ($, _, App, Backbone, Marionette,
             BeatsModel,
             GetBeatsView,GetBeatsCategoryView) {
    "use strict";
    return Backbone.Marionette.Controller.extend({
        initialize: function () {
            this.beatsModel = new BeatsModel();
        },
        startBeats: function(){
            App.homePageLayout.beatsBlock.show(new GetBeatsView());
        },
        getCategory: function(){
            App.homePageLayout.beatsBlock.show(new GetBeatsCategoryView());
        }
    });
});