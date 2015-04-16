/**
 * Created by Ievgen on 22.01.2015.
 */
define(["jquery", "underscore"],
    function ($, _) {
       "use strict";
        var swipeDownHelper = function(){
            return {
                action: function(controller){
                    this.wrapper = $("#layout-list");
                    this.swipeStarted = false;
                    this.refreshBlock = $("#refresh-block");
                    this.animationComplete = false;
                    this.controller = controller;
                    this.events();
                },
                events: function () {
                    var self = this;
                    $(this.wrapper).on("touchmove", function (event) {
                        self.checkSwipeDirection(event);
                    });
                    $(this.wrapper).on("touchstart", function (event) {
                        self.checkSwipeStartPosition(event);
                    });
                    $(this.wrapper).on("touchend", function (event) {
                        self.doDataUpdate(event);
                    });
                },
                checkSwipeStartPosition: function(e){
                    this.scrollHeight = window.document.documentElement.scrollHeight;
                    this.abilityToScroll = this.scrollHeight - window.pageYOffset;
                    this.swipeStart = e.originalEvent.touches.length ? e.originalEvent.touches[0].pageY : e.pageY;
                    this.swipeStarted = (window.scrollY === 0 && this.abilityToScroll === this.scrollHeight)? true: false;
                },
                checkSwipeDirection: function(e){
                    this.swipeStartedOffsetY = e.originalEvent.touches.length ? e.originalEvent.touches[0].pageY : e.pageY;
                    this.swipeMaxHeightDetection = (window.innerHeight - this.swipeStart) / 2;
                    this.swipeStartedToMax = (this.swipeStartedOffsetY - this.swipeStart);
                    this.detectSwipeHeight = (this.swipeStartedToMax * 100 / this.swipeMaxHeightDetection);
                    this.isSwipeDown = (this.swipeStartedToMax > 10) ? true : false;
                    if (this.isSwipeDown && this.swipeStarted) {
                        e.preventDefault();
                        this.animationComplete = true;
                        this.refreshBlock.css({
                            "height": (Math.round(this.detectSwipeHeight) + "px")
                        }).find("p.swipe").empty().text("Swipe down to refresh data");
                        if (this.detectSwipeHeight >= 60) {
                            this.refreshBlock.css({
                                "height": 60 + "px"
                            }).find("p.swipe").empty().text("Release to update");
                        }
                    } else {
                        document.addEventListener('touchmove', function (e) { }, false);
                    }
                },
                doDataUpdate: _.debounce(function (e) {
                    var self = this;
                    if (this.swipeStarted && this.animationComplete === true && this.detectSwipeHeight >= 60) {
                        this.animationComplete = false;
                        this.refreshBlock.animate({'height': "0px"},
                            {
                                duration: 300,
                                complete: function () {
                                    self.animationComplete = true;
                                    self.controller.refresh();
                                }
                            });
                    } else {
                        document.addEventListener('touchmove', function (e) { }, false);
                        this.refreshBlock.animate({'height': "0px"}, 300);
                    }
                }, 5)
            };
        };
        return swipeDownHelper();
    });