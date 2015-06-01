/**
 * Created by Ievgen on 22.01.2015.
 */
define(["jquery", "underscore"],
    function ($, _) {
       "use strict";
        var vkRequestHelper = function(){
            return {
                defaults: {
                    "defUrl": "http://192.168.1.2:8011/method/",
                    "getFriends": "friends.get",
                    "getFriendsOnline": "friends.getOnline",
                    "getAudio": "audio.get",
                    "audioSearch": "audio.search",
                    "saveAudio": "audio.save",
                    "deleteAudio": "audio.delete",
                    "editAudio": "audio.edit",
                    "countAudio": "audio.getCount",
                    "userInfo": "users.get",
                    "sendMessage": "messages.send"
                },
                getAudioUrl: function (ownerId, songsNum, accessToken) {
                    return this.defaults.defUrl + this.defaults.getAudio + "?" +
                        "owner_id=" + ownerId + "&count=" + songsNum +
                        "&access_token=" + accessToken;
                },
                sendAudio: function(ownerId, userId, songId, accessToken){
                  return this.defaults.defUrl + this.defaults.sendMessage + "?" +
                          "user_id=" + userId + "&attachment=" + "audio" + ownerId + "_" + songId+
                          "&access_token=" + accessToken;
                },
                getFriendsUrl: function (userId,friendsNumToReturn,accessToken) {
                    return this.defaults.defUrl + this.defaults.getFriends + "?" +
                        "user_id=" + userId +
                        "&order=hints" + "&count=" + friendsNumToReturn +
                        "&fields=" + "photo_50,city,country,online" +
                        "&access_token=" + accessToken;
                },
                getUserInfoUrl: function (userId,accessToken) {
                    return this.defaults.defUrl +
                        this.defaults.userInfo + "?" + "user_id=" +
                        userId + "&fields=photo_100,online,counters"+"&access_token="+accessToken;
                },
                searchAudios: function(keywords,accessToken){
                    return this.defaults.defUrl + this.defaults.audioSearch + "?" + "q=" + keywords +
                            "&auto_complete="+ 1 + "&sort="+ 2 + "&search_own="+ 0 +"&count="+ 50 +
                            "&access_token=" + accessToken;
                }
            };
        };
        return vkRequestHelper();
    });