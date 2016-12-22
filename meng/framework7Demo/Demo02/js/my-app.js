/**
 * Created by pengchangzhou on 16/12/22.
 */
var myApp=new Framework7();

var $$=Framework7.$;
var mainView=myApp.addView(".view-main");
$$(".hide-navbar").on("click",function () {
   mainView.hideNavbar();
});
$$(".show-navbar").on("click",function () {
   mainView.showNavbar();
});