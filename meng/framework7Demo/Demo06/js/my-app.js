/**
 * Created by pengchangzhou on 16/12/22.
 */
var myApp = new Framework7({
    swipePanel:'left'
});

var $$=Dom7;

$$(".open-left-panel").on("click",function (e) {
   myApp.openPanel("left");
});

$$(".open-right-panel").on("click",function (e) {
   myApp.openPanel("right");
});

$$(".close-panel").on("click",function (e) {
   myApp.closePanel();
});