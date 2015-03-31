define(["jquery", "underscore", "backbone"],
    function ($, _, Backbone) {
        "use strict";
        var AudioModel = Backbone.Model.extend({
            defaults: {
                artist: String,
                duration: Number,
                genre: Number,
                lyrics_id: String,
                owner_id:Number,
                title: String,
                url:String,
                isPlayed: Boolean
            }
        });
        return AudioModel;
    }
);