$(window).scroll(function(){
    if($(window).scrollTop() > 35) {
        $('.navbar').addClass("shrink");
        $('.navbar-title').addClass("shrink");
        $('.navbar-logo').addClass("shrink");
    } else {
        $('.navbar').removeClass("shrink");
        $('.navbar-title').removeClass("shrink");
        $('.navbar-logo').removeClass("shrink");
    }
});
