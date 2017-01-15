var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#navHeader').outerHeight();




/*---------------------------------------------*/
$(window).scroll(function(event){
    didScroll = true;

});



/*---------------------------------------------*/
setInterval(function() {
    if (didScroll == true) {
        hasScrolled();
        didScroll = false;

    }
}, 200);




/*---------------------------------------------*/
function hasScrolled() {
    var st = $(this).scrollTop();

    distanceFromTop = st;
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    if(st < lastScrollTop && st > navbarHeight){
      if(st >= 0){
        $('#navHeader').addClass('nav-up');
        console.log("add nav-up");
      }
    }else{
      if(st + $(window).height() < $(document).height()){
        console.log("remove nav-up");
        $('#navHeader').removeClass('nav-up');
      }
    }

    lastScrollTop = st;
}
