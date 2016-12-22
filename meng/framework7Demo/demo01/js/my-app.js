/**
 * Created by pengchangzhou on 16/12/22.
 */
var myApp = new Framework7();
var $$ = Framework7.$;
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true,
    animateNavBackIcon:true
});
//about page
$$(document).on('pageInit', function (e) {
    var page = e.detail.page;

    if (page === 'about') {
        myApp.alert("here is about page");
    }
});

$$(document).on('pageInit','.page[data-page="about"]',function (e) {
   myApp.alert('here is about Page');
});