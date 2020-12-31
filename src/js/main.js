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
    var menu = $('#navbarNav');
    var searchbar = $('#buttonSea');
    var fieTex = $('#textFi');
    menu.removeClass('visible').addClass('invisible');
    searchbar.removeClass('invisible').addClass('visible');
    fieTex.removeClass('invisible').addClass('visible');
    $(function(){
        $('#buttonSea').click(function(e){
            $('#navbarNav').addClass('visible');
            $('#textFi').addClass('invisible');
        });
    });

    /*if($('#').click(function())){
        console.log('jhajaj');
        menu.addClass('visible');
    }else if($('#buttonSea').click()){
        searchbar.addClass('visible');
    }else if($('#textFi').click()){
        fieTex.addClass('visible');
    }*/
}

function fun(){
    var hasil = document.getElementById('buttonSea');
    var txtField = document.getElementById('isi');
    var conNav = document.getElementById('def');
    var nav = document.getElementById('nb');
    hasil.onclick = function(){
        txtField.setAttribute('class','visible');
        conNav.setAttribute('class','invisible');
    };
    nav.onclick = function(){
        txtField.setAttribute('class','invisible');
        conNav.setAttribute('class','visible');
    };
}