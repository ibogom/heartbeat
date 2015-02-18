/**
 * Created by Ievgen on 20.01.2015.
 */
define([
    'underscore',
    'backbone'
], function( _,Backbone){
   'use strict';

    var channel = _.extend({}, Backbone.Events);
    return channel;
});