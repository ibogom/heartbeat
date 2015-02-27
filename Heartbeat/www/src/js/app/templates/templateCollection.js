define(['handlebars.runtime'], function(Handlebars) {

this["Heartbeat"] = this["Heartbeat"] || {};

Handlebars.registerPartial("FriendsFooterView.hbs", this["Heartbeat"]["FriendsFooterView.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<ul class=\"footer-list\">\r\n    <li class=\"social active\">Social</li>\r\n    <li class=\"f-online\">Online</li>\r\n    <li class=\"contacts\">Contacts</li>\r\n    <li class=\"application\">Application</li>\r\n</ul>";
  },"useData":true}));

Handlebars.registerPartial("FriendsView.hbs", this["Heartbeat"]["FriendsView.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return " online ";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"fl-photo ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isOnline : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\r\n    <img src=\""
    + escapeExpression(((helper = (helper = helpers.photo || (depth0 != null ? depth0.photo : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"photo","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + escapeExpression(((helper = (helper = helpers.lastName || (depth0 != null ? depth0.lastName : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"lastName","hash":{},"data":data}) : helper)))
    + escapeExpression(((helper = (helper = helpers.firstName || (depth0 != null ? depth0.firstName : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"firstName","hash":{},"data":data}) : helper)))
    + "\"/>\r\n</div>\r\n<div class=\"fl-info\">\r\n    <div class=\"name\">\r\n        <span class=\"last-name\">"
    + escapeExpression(((helper = (helper = helpers.lastName || (depth0 != null ? depth0.lastName : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"lastName","hash":{},"data":data}) : helper)))
    + "</span>\r\n        <span class=\"first-name\">"
    + escapeExpression(((helper = (helper = helpers.firstName || (depth0 != null ? depth0.firstName : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"firstName","hash":{},"data":data}) : helper)))
    + "</span>\r\n    </div>\r\n    <div class=\"fl-stat\">\r\n        <span class=\"raiting\">rating: </span>\r\n        <span class=\"rating-value\">10203</span>\r\n    </div>\r\n</div>\r\n<div class=\"fl-active-btns\">\r\n    <input class=\"checkbox\" type=\"checkbox\" data-id=\""
    + escapeExpression(((helper = (helper = helpers.user_id || (depth0 != null ? depth0.user_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"user_id","hash":{},"data":data}) : helper)))
    + "\" name=\"\" id=\"\"/><label class=\"icons check\"></label>\r\n</div>\r\n";
},"useData":true}));

Handlebars.registerPartial("GetBeats.hbs", this["Heartbeat"]["GetBeats.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "        <span class=\"btn-scnd-bg get-beats\">Start beats</span>\r\n";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "        <div class=\"beats-cat-title-wrapper\">\r\n            <span class=\"title\">Choose your favorite music categories :</span>\r\n            <span class=\"done btn-scnd-bg\">Done</span>\r\n        </div>\r\n        <ul class=\"beats-cat-wrapper\">\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.genre_id : depth0), {"name":"each","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </ul>\r\n";
},"4":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                <li class=\"beats-cat\">\r\n                    <span>"
    + escapeExpression(lambda(depth0, depth0))
    + "</span>\r\n                <span>\r\n                    <input type=\"checkbox\" name=\"\" id=\"\"/><label class=\"icons check\"></label>\r\n                </span>\r\n                </li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div>\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.showGetBeats : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.showBeatsCategorys : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"useData":true}));

Handlebars.registerPartial("HeaderView.hbs", this["Heartbeat"]["HeaderView.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "            <span class=\"settings\"></span>\r\n";
  },"3":function(depth0,helpers,partials,data) {
  return "            <span class=\"menu\"></span>\r\n";
  },"5":function(depth0,helpers,partials,data) {
  return "            <span class=\"left-back\"></span>\r\n";
  },"7":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "            <h1 class=\"title\">"
    + escapeExpression(((helper = (helper = helpers.Title || (depth0 != null ? depth0.Title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Title","hash":{},"data":data}) : helper)))
    + "</h1>\r\n";
},"9":function(depth0,helpers,partials,data) {
  var stack1, buffer = "            <ul class=\"list-switch\">\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.showHomeNav : depth0), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </ul>\r\n";
},"10":function(depth0,helpers,partials,data) {
  return "                    <li class=\"player active\">Player</li>\r\n                    <li class=\"music\">Music</li>\r\n";
  },"12":function(depth0,helpers,partials,data) {
  return "            <span class=\"btn-third-clr send\">Send</span>\r\n";
  },"14":function(depth0,helpers,partials,data) {
  return "            <span class=\"right-back\"></span>\r\n";
  },"16":function(depth0,helpers,partials,data) {
  return "        <span class=\"icons message\">\r\n            <span class=\"messages-count\">0</span>\r\n        </span>\r\n";
  },"18":function(depth0,helpers,partials,data) {
  return "            <span class=\"search\"></span>\r\n            <span class=\"cancel\">Cancel</span>\r\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div>\r\n    <div class=\"left-el icons\">\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.showSettings : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.showMenu : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.showLeftBack : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "    </div>\r\n    <div class=\"middle-el\">\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.showTitle : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.showlist : depth0), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.showSend : depth0), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "    </div>\r\n    <div class=\"right-el icons\">\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.showRightBack : depth0), {"name":"if","hash":{},"fn":this.program(14, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.showMessages : depth0), {"name":"if","hash":{},"fn":this.program(16, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.showSearch : depth0), {"name":"if","hash":{},"fn":this.program(18, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\r\n</div>";
},"useData":true}));

Handlebars.registerPartial("HomePageLayout.hbs", this["Heartbeat"]["HomePageLayout.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div id=\"layout-content-block\">\r\n\r\n</div>\r\n<div id=\"layout-notification\">\r\n\r\n</div>\r\n<div id=\"layout-info\">\r\n\r\n</div>\r\n<div id=\"layout-player-block\">\r\n\r\n</div>\r\n<div id=\"layout-beats-block\">\r\n\r\n</div>";
  },"useData":true}));

Handlebars.registerPartial("MainLayout.hbs", this["Heartbeat"]["MainLayout.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div id=\"layout-settings\">\r\n\r\n</div>\r\n<div id=\"layout-home\">\r\n\r\n</div>\r\n<div id=\"layout-playlists\">\r\n\r\n</div>";
  },"useData":true}));

Handlebars.registerPartial("MobileLogin.hbs", this["Heartbeat"]["MobileLogin.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "    <div id=\"logo\">\r\n        <p>heartbeats to the rhythm</p>\r\n    </div>\r\n    <div id=\"login\">\r\n        <form id=\"loginForm\">\r\n            <!--<div class=\"form-group\">-->\r\n                <!--<label for=\"userName\">Username</label>-->\r\n                <!--<input type=\"text\" class=\"form-control\" id=\"userName\" placeholder=\"Enter username\">-->\r\n            <!--</div>-->\r\n            <!--<div class=\"form-group\">-->\r\n                <!--<label for=\"password\">Password</label>-->\r\n                <!--<input type=\"password\" class=\"form-control\" id=\"password1\" placeholder=\"Password\">-->\r\n            <!--</div>-->\r\n            <!--<button type=\"submit\" class=\"btn btn btn-red-bg\">Submit</button>-->\r\n            <div class=\"form-group social\">\r\n                <p>Welcome to the Heartbeat application.</br>\r\n                    Login to the application using social accounts</p>\r\n                <a class=\"btn btn-auth\" id=\"vkLogin\" href=\"#\"><span>Login with VK account</span></a>\r\n                <a class=\"btn btn-auth\" id=\"fbLogin\" href=\"#\"><span>Login with Facebook account</span></a>\r\n                <a class=\"btn btn-auth\" id=\"twLogin\" href=\"#\"><span>Login with Twitter account</span></a>\r\n            </div>\r\n            <!--<div class=\"form-group\">-->\r\n                <!--<p>Need a Heartbeat account?</p>-->\r\n                <!--<a class=\"link\" href=\"#\">Sign up here.</a>-->\r\n            <!--</div>-->\r\n        </form>\r\n    </div>";
  },"useData":true}));

Handlebars.registerPartial("MobileRegistration.hbs", this["Heartbeat"]["MobileRegistration.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<p>This is registration template</p>";
  },"useData":true}));

Handlebars.registerPartial("Notifications.hbs", this["Heartbeat"]["Notifications.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<span class=\"message-text\"></span>";
  },"useData":true}));

Handlebars.registerPartial("PlayerView.hbs", this["Heartbeat"]["PlayerView.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "pause";
  },"3":function(depth0,helpers,partials,data) {
  return "play";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"volume-bar\">\r\n    <span class=\"volume-low icons\"></span>\r\n        <span class=\"volume-wrapper\">\r\n            <span class=\"volume-trigger\" style=\"width:"
    + escapeExpression(((helper = (helper = helpers.volume || (depth0 != null ? depth0.volume : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"volume","hash":{},"data":data}) : helper)))
    + "%;\"></span>\r\n            <span class=\"volume-trigger-button\"></span>\r\n        </span>\r\n    <span class=\"volume-high icons\"></span>\r\n</div>\r\n<div class=\"nav-player-wrapper\">\r\n    <div class=\"active-buttons-left\">\r\n        <span class=\"volume icons\"></span>\r\n        <span class=\"play-type-wrapper\">\r\n               <span class=\"repeat icons\"></span>\r\n        </span>\r\n    </div>\r\n    <div class=\"nav-buttons icons\">\r\n        <span class=\"prev\"></span>\r\n        <span class=\"";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isPlayed : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\"></span>\r\n        <span class=\"next\"></span>\r\n    </div>\r\n    <div class=\"active-buttons-right\">\r\n        <!--<span class=\"equalizer icons\"></span>-->\r\n        <span class=\"profile icons\"></span>\r\n        <span class=\"shuffle icons\"></span>\r\n    </div>\r\n</div>\r\n<div class=\"song-name-bar\">\r\n    <span class=\"artist-name\">"
    + escapeExpression(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"author","hash":{},"data":data}) : helper)))
    + " - "
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</span>\r\n</div>\r\n<div class=\"progress-bar\">\r\n    <span class=\"start-time\">0:00</span>\r\n    <span class=\"progress-bar-wrapper\">\r\n        <span class=\"progress-trigger\"></span>\r\n    </span>\r\n    <span class=\"end-time\">"
    + escapeExpression(((helper = (helper = helpers.minutes || (depth0 != null ? depth0.minutes : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"minutes","hash":{},"data":data}) : helper)))
    + ":"
    + escapeExpression(((helper = (helper = helpers.seconds || (depth0 != null ? depth0.seconds : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"seconds","hash":{},"data":data}) : helper)))
    + "</span>\r\n</div>\r\n<div class=\"action-button\">\r\n    <span class=\"get-beats\"></span>\r\n</div>";
},"useData":true}));

Handlebars.registerPartial("PlaylistFooterView.hbs", this["Heartbeat"]["PlaylistFooterView.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<ul class=\"footer-list\">\r\n    <li class=\"online active\"> Online</li>\r\n    <li class=\"downloads\">Downloads</li>\r\n    <li class=\"likes\">Likes</li>\r\n    <li class=\"recommends\">Recommends</li>\r\n</ul>";
  },"useData":true}));

Handlebars.registerPartial("PlaylistLayout.hbs", this["Heartbeat"]["PlaylistLayout.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div id=\"layout-search\">\r\n\r\n</div>\r\n<div id=\"layout-search-result\">\r\n\r\n</div>\r\n<div id=\"layout-list\">\r\n\r\n</div>\r\n<div id=\"layout-friends\">\r\n\r\n</div>";
  },"useData":true}));

Handlebars.registerPartial("PlaylistView.hbs", this["Heartbeat"]["PlaylistView.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "pl-pause";
  },"3":function(depth0,helpers,partials,data) {
  return "pl-play";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isPlayed : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " icons\"></div>\r\n<div class=\"song-info\">\r\n    <span class=\"song-name\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</span>\r\n    <span class=\"author\">"
    + escapeExpression(((helper = (helper = helpers.artist || (depth0 != null ? depth0.artist : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"artist","hash":{},"data":data}) : helper)))
    + "</span>\r\n    <span class=\"time-bar\">"
    + escapeExpression(((helper = (helper = helpers.minutes || (depth0 != null ? depth0.minutes : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"minutes","hash":{},"data":data}) : helper)))
    + ":"
    + escapeExpression(((helper = (helper = helpers.seconds || (depth0 != null ? depth0.seconds : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"seconds","hash":{},"data":data}) : helper)))
    + "</span>\r\n</div>\r\n<div class=\"active-btns icons\">\r\n    <div class=\"active-btns-wrapper\">\r\n        <div>\r\n            <span class=\"share\" data-id=\""
    + escapeExpression(((helper = (helper = helpers.media_id || (depth0 != null ? depth0.media_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"media_id","hash":{},"data":data}) : helper)))
    + "\"></span>\r\n            <span class=\"like\"></span>\r\n        </div>\r\n    </div>\r\n    <div class=\"active-btns-wrapper\">\r\n        <div>\r\n            <span class=\"remove\"></span>\r\n            <span class=\"download\"></span>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n";
},"useData":true}));

Handlebars.registerPartial("ProfileView.hbs", this["Heartbeat"]["ProfileView.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"photo\">\r\n    <img src=\""
    + escapeExpression(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"src","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + escapeExpression(((helper = (helper = helpers.lastName || (depth0 != null ? depth0.lastName : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"lastName","hash":{},"data":data}) : helper)))
    + "\"/>\r\n</div>\r\n<div class=\"info-wrapper\">\r\n    <div class=\"personal-info\">\r\n        <span class=\"second-name\">"
    + escapeExpression(((helper = (helper = helpers.lastName || (depth0 != null ? depth0.lastName : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"lastName","hash":{},"data":data}) : helper)))
    + "</span>\r\n        <span class=\"first-name\">"
    + escapeExpression(((helper = (helper = helpers.firstName || (depth0 != null ? depth0.firstName : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"firstName","hash":{},"data":data}) : helper)))
    + "</span>\r\n    </div>\r\n    <div class=\"stats\">\r\n        <div class=\"title-row\">\r\n            <span class=\"songs-title\">Songs</span>\r\n            <span class=\"listeners-title\">Listeners</span>\r\n            <span class=\"rating-title\">Rating</span>\r\n        </div>\r\n        <div class=\"stat-row\">\r\n            <span class=\"songs-total\">"
    + escapeExpression(((helper = (helper = helpers.songsNumber || (depth0 != null ? depth0.songsNumber : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"songsNumber","hash":{},"data":data}) : helper)))
    + "</span>\r\n            <span class=\"listeners-res\">"
    + escapeExpression(((helper = (helper = helpers.listenersNumber || (depth0 != null ? depth0.listenersNumber : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"listenersNumber","hash":{},"data":data}) : helper)))
    + "</span>\r\n            <span class=\"rating-res\">"
    + escapeExpression(((helper = (helper = helpers.rating || (depth0 != null ? depth0.rating : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"rating","hash":{},"data":data}) : helper)))
    + "</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"beats-main-title\">\r\n        Beats for today\r\n    </div>\r\n    <span class=\"beats-now-wrapper\"><span class=\"beats-now\">"
    + escapeExpression(((helper = (helper = helpers.beatsNow || (depth0 != null ? depth0.beatsNow : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"beatsNow","hash":{},"data":data}) : helper)))
    + "</span> / "
    + escapeExpression(((helper = (helper = helpers.maxBeats || (depth0 != null ? depth0.maxBeats : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"maxBeats","hash":{},"data":data}) : helper)))
    + "</span>\r\n</div>";
},"useData":true}));

Handlebars.registerPartial("SearchView.hbs", this["Heartbeat"]["SearchView.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<input type=\"text\" name=\"search\" id=\"searchInput\" placeholder=\"Search...\"/>\r\n";
  },"useData":true}));

return this["Heartbeat"];

});