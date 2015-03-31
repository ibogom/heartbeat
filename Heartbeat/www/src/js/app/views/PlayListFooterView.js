/**
 * Created by snopp_000 on 22.11.2014.
 */
define(['jquery', 'underscore', 'backbone','marionette', 'templates/templateCollection'],
    function ($, _, Backbone, Marionette, templateFn) {
        "use strict";
        return Backbone.Marionette.LayoutView.extend({
            tagName: "div",
            className: "footer-wrapper",
            template: templateFn['PlaylistFooterView.hbs'],
            ui:{
                "listItem":"li"
            },
            events:{
                "click @ui.listItem":"checkPlayList"
            },
            checkPlayList: function(e){
               $(e.currentTarget).addClass("active").siblings().removeClass("active");
                switch(e.currentTarget.classList[0]){
                    case "downloads":
                        Backbone.history.navigate("downloads", {trigger: true, replace:false});
                        break;
                    case "likes":
                        Backbone.history.navigate("likes", {trigger: true, replace:false});
                        break;
                    case "recommends":
                        Backbone.history.navigate("recommends", {trigger: true, replace:false});
                        break;
                    case "online":
                        Backbone.history.navigate("playlist", {trigger: true, replace:false});
                        break;
                }
            }
        });
    });