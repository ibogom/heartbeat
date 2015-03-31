define(["jquery", "underscore", "backbone", "models/VkAuthModel"],
    function ($, _, Backbone, VkAuthModel) {
        "use strict";
        var beatsModel = Backbone.Model.extend({
                genre_id: [
                    "Rock",
                    "Pop",
                    "Rap & Hip-Hop",
                    "Easy Listening",
                    "Dance & House",
                    "Instrumental",
                    "Metal",
                    "Alternative",
                    "Dubstep",
                    "Jazz & Blues",
                    "Drum & Bass",
                    "Trance",
                    "Chanson",
                    "Ethnic",
                    "Acoustic & Vocal",
                    "Reggae",
                    "Classical",
                    "Indie Pop",
                    "Speech",
                    "Electropop & Disco",
                    "Other"
                ]
        });
        return beatsModel;

    }
);