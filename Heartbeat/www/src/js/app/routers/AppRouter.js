define(['backbone', 'marionette'],
    function (Backbone, Marionette) {
        "use strict";
        return Backbone.Marionette.AppRouter.extend({

            appRoutes: {
                "": "loginScreen",
                "access_token=:query": "validationScreen",
                "home": "homeScreen",
                "beats": "beatsScreen",
                "rating": "showRating",
                "playlist": "showPlaylist",
                "friends": "showFriends",
                "downloads": "downloadsPlayList",
                "likes": "likesPlayList",
                "recommends": "recommendsPlayList",
                "settings": "showSettings"
            }
        });
});