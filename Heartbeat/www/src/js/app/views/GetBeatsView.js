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
            initialize: function(){
                this.user = Backbone.Wreqr.radio.channel('user');
                this.user.beats = (this.user.beats !== undefined)? this.user.beats: 300;
            },
            ui:{
                "getBeats":"span.get-beats"
            },
            events:{
                "click @ui.getBeats":"getBeats"
            },
            getBeats: function(){
               this.user.beats = this.user.beats-100;
                $(".beats-now").text(this.user.beats);
                window.localStorage.setItem("beats",JSON.stringify(this.user.beats));
               Backbone.history.navigate("beats", {trigger:true, replace:false});
            }
        });
    });