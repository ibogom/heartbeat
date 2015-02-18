/**
 * Created by Ievgen on 01.02.2015.
 */
/**
 * Created by Ievgen on 01.02.2015.
 */
define(['App', 'jquery', 'underscore', 'backbone', 'marionette', 'models/UserModel', 'models/BeatsModel',
        'templates/templateCollection'],
    function (App, $, _, Backbone, Marionette, UserModel, BeatsModel, templateFn) {
        "use strict";
        return Backbone.Marionette.ItemView.extend({
            tagName: "div",
            className: "get-category-wrapper",
            template: templateFn['GetBeats.hbs'],
            initialize: function(){
                this.model = new BeatsModel();
                this.$contentBlock = $("#layout-content-block").hide();
                this.$el.show().css({"margin-top":window.innerHeight+"px"});
                this.$el.animate({marginTop: -75+"px"}, 200);
            },
            ui:{
                "done":"span.done"
            },
            events:{
                "click @ui.done":"getStarted"
            },
            getStarted: function(){
                Backbone.history.navigate("start", {trigger:true, replace:false});
            },
            onRender: function(){
                this.$el.empty().append(this.template({showBeatsCategorys: true, genre_id: this.model.genre_id }));
            }
        });
    });