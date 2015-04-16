define(["jquery", "underscore", "backbone"],
    function ($, _, Backbone) {
        "use strict";
        var FriendModel = Backbone.Model.extend({
            defaults: {
                firstName: String,
                lastName: String,
                isOnline: Boolean,
                photo: String,
                country: Number,
                city: Number
            }
        });
        return FriendModel;
    }
);