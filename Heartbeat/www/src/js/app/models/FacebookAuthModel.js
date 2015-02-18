define(["jquery", "underscore", "backbone"],
    function ($, _, Backbone) {
        "use strict";
        // Creates a new Backbone Model class object
        var FacebookModel = Backbone.Model.extend({
            defaults: {

            },
            url: function () {
            }
        });
        // Returns the Model class
        return FacebookModel;
    });