$(document).ready(function() {
	
	// Виджет кнопки вверх (Test-Templates)
	// Версия 1.0
	
	$('body').append('<div class="button-up" style="display: none;opacity: 0.7;width: 80px;height:100%;position: fixed;left: 0px;top: 0px;cursor: pointer;text-align: center;line-height: 30px;color: #d3dbe4;font-weight: 100; font-size: 11pt;">Наверх</div>');
		
	$ (window).scroll (function () {
		if ($ (this).scrollTop () > 100) {
			$ ('.button-up').fadeIn();
		} else {
			$ ('.button-up').fadeOut();
		}
	});
	
	$('.button-up').click(function(){
		$('body,html').animate({
            scrollTop: 0
        }, 1000);
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
