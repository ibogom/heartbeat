// Include Desktop Specific JavaScript files here (or inside of your Desktop Controller, or differentiate based off App.mobile === false)
    require(["App", "routers/AppRouter", "controllers/MainController"], function (App, AppRouter, AppController) {
        App.appRouter = new AppRouter({
            controller: new AppController()
        });

        // Start Marionette Application in desktop mode (default)
        //document.addEventListener("deviceready", function(){
            App.start();
        //}, false);
    });