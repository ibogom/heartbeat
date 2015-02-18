/**
 * Created by Ievgen on 01.02.2015.
 */
define(['App', 'jquery', 'underscore', 'backbone', 'marionette', 'models/UserModel', 'models/BeatsModel',
        'templates/templateCollection'],
    function (App, $, _, Backbone, Marionette, UserModel, BeatsModel, templateFn) {
        "use strict";
        return Backbone.Marionette.ItemView.extend({
            tagName: "div",
            className: "get-beats-wrapper",
            template: templateFn['GetBeats.hbs']({
                showGetBeats: true
            }),
            ui:{
                "getBeats":"span.get-beats"
            },
            events:{
                "click @ui.getBeats":"getBeats"
            },
            getBeats: function(){
               Backbone.history.navigate("beats", {trigger:true, replace:false});
            }
        });
    });