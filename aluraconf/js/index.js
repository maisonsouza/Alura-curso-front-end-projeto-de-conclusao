function ativaScrollSuave(selector) {

    $(selector).click(function(event){
        // event.preventDefault();

        var target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
    });
}

ativaScrollSuave('a[href*=secao-sobre]');
ativaScrollSuave('a[href*=secao-palestrantes]');
ativaScrollSuave('a[href*=secao-formulario]');