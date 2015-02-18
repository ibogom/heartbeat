define(['jquery', 'underscore', 'backbone', '../libs/utils',
        'layouts/MainLayout', 'layouts/HomePageLayout', 'layouts/PlaylistLayout'
    ],
    function ($, _, Backbone, utils, MainLayout, HomePageLayout, PlaylistLayout) {
        "use strict";
        var App = new Backbone.Marionette.Application(),
            layout = new MainLayout(),
            homePageLayout = new HomePageLayout(),
            playlistLayout = new PlaylistLayout();

        App.addRegions({
            mainRegion:"#main-layout",
            header: "header",
            footer: "footer"
        });

        App.addInitializer(function () {
            Backbone.history.start({
                pushState: false,
                root: ""
            });
        });

        window.loader = $(document).find("#loader");
        //App.footer.show(footer);
        //window.__ = utils.translate;

        App.layout = layout;
        App.homePageLayout = homePageLayout;
        App.playlistLayout = playlistLayout;

        return App;
    });