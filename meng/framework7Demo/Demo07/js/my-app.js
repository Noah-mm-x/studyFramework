/**
 * Created by pengchangzhou on 16/12/22.
 */
var myApp = new Framework7();

var $$ = Dom7;

var songs = ["A song", "B song", "C song", "D song"],
    authors = ["A", "B", "C", "D"],
    ptrContent = $$(".pull-to-refresh-content");
ptrContent.on("refresh", function () {
    setTimeout(function () {
        var picURL = "http://www.baidu.com?" + Math.floor(Math.random() * 100),
            song = songs[Math.floor(Math.random() * songs.length)],
            author = authors[Math.floor(Math.random() * authors.length)],
            itemHTML = "<li class='item-content'>" +
                "<div class='item-media'><img src='" + picURL + "' width='44'></div>" +
                    "<div class='item-inner'>" +
                      "<div class='item-title-row'>" +
                             "<div class='item-title'>" + song + "</div>" +
                      "</div>" +
                      "<div class='item-subtitle'>" + author + "</div>" +
                    "</div>" +
                "</li>";
        ptrContent.find("ul").prepend(itemHTML);
        myApp.pullToRefreshDone();
    }, 2000);

});
