$(document).ready(function() {
    $('#goPro-itemDos').click(function(){
        $('#contentAccesorios').slideUp();
        setTimeout(function(){$('#contentAccesorios2').slideDown();}, 500);
        $('#goPro-itemDos').addClass('goPro-itemUno');
        $('#goPro-itemDos').removeClass('goPro-itemDos');
        $('#goPro-itemUno').addClass('goPro-itemDos');
        $('#goPro-itemUno').removeClass('goPro-itemUno');
    });
    $('#goPro-itemUno').click(function(){
        $('#contentAccesorios2').slideUp();
        setTimeout(function(){$('#contentAccesorios').slideDown();}, 500);
        $('#goPro-itemDos').addClass('goPro-itemDos');
        $('#goPro-itemDos').removeClass('goPro-itemUno');
        $('#goPro-itemUno').addClass('goPro-itemUno');
        $('#goPro-itemUno').removeClass('goPro-itemDos');
    });
});


