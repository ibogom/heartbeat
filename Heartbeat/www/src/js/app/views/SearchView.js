/**
 * Created by Ievgen on 18.01.2015.
 */
define(['jquery', 'underscore', 'backbone','marionette', 'templates/templateCollection',
        'controllers/SearchController'],
    function ($, _, Backbone, Marionette,templateFn, SearchController) {
        "use strict";
        return Backbone.Marionette.ItemView.extend({
            className:"search-wrapper",
            tagName: "div",
            template: templateFn['SearchView.hbs'],
            initialize: function(){
              this.searchController = new SearchController();
            },
            events: {
                "keyup :input":"doSearch",
                "keypress :input":"doSearch"
            },
            doSearch: _.debounce(function(e){
                this.searchController.startSearch(e.currentTarget.value);
            },500)
        });
    });