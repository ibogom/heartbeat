/**
 * Created by snopp_000 on 22.11.2014.
 */
define(['jquery', 'underscore', 'backbone','marionette', 'templates/templateCollection'],
    function ($, _, Backbone, Marionette, templateFn) {
        "use strict";
        return Backbone.Marionette.LayoutView.extend({
            tagName: "div",
            className: "footer-wrapper",
            template: templateFn['FriendsFooterView.hbs'],
            ui:{

            },
            events:{

            }
        });
    });