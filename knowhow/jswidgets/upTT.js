$(document).ready(function() {
	
	// Виджет кнопки вверх
	// Версия 1.1
	// http://dokxpi.github.io/knowhow/upTT/
	// Второй способ: http://kostyakhmelev.ru/texnicheskaya-chast/knopka-vverh-dlya-sayta.html 
	
	
	$('body').append('<div class="button-up" style="display:none; opacity:0.7; width:60px; height:100%; position:fixed; left:0px; top:0px; cursor:pointer; text-align:center; line-height:100px; color:rgb(172, 188, 206); font-weight:100;"><font size="2">&#9650; Наверх</font></div>');
		
	$ (window).scroll (function () {
		if ($ (this).scrollTop () > 700) {
			$ ('.button-up').fadeIn();
		} else {
			$ ('.button-up').fadeOut();
		}
	});
	
	$('.button-up').click(function(){
		$('body,html').animate({
            scrollTop: 0
        }, 1400);
        return false;
	});
	
	$('.button-up').hover(function() {
			$(this).animate({
				'opacity':'1',
			}).css({'background-color':'#e7ebf0','color':'#6a86a4'});
		}, function(){
			$(this).animate({
				'opacity':'0.7'
			}).css({'background':'none','color':'#d3dbe4'});;
	});
		
});