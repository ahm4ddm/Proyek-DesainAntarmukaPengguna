$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        $('#navbar').removeClass('scrolled-down').addClass('scrolled-up');
    } else {
        $('#navbar').removeClass('scrolled-up').addClass('scrolled-down');
    }
    prevScrollpos = currentScrollPos;
}  

function focusSearch(){
    var menu = $('.menu');
    var searchbar = $('.search-bar');
    menu.removeClass('visible').addClass('invisible');
    searchbar.removeClass('invisible').addClass('visible');
}