/**
 * Created by Ievgen on 18.01.2015.
 */
define(['jquery', 'underscore', 'backbone','marionette', 'models/VkFriendModel',
        'templates/templateCollection'],
    function ($, _, Backbone, Marionette, VkFriendModel, templateFn) {
        "use strict";
        return Backbone.Marionette.ItemView.extend({
            tagName: "li",
            className: "friend",
            template: templateFn['FriendsView.hbs'],
            model: VkFriendModel,
            ui:{
                "share":".fl-share",
                "listen":".fl-listen"
            },
            events: {

            },
            onRender: function(){
                this.template(this.model.toJSON());
            }
        });
    });