$(function(){
	
	var menus = ['desc', 'detail', 'guide', 'comment'];

	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop > 80){
			$('.sidebar').addClass('sidebar-fixed');
		}else{
			$('.sidebar').removeClass('sidebar-fixed');
		}

		for(var i = 0; i < menus.length; i++){				
			if(getTop(menus[i]) < 150){
				$('.menu-item a').removeClass('on');
				$('a[href="#' + menus[i] + '"]').addClass('on');
			}
		}

	})

	$('.menu').click(function(evt){
		$('.menu-item a').removeClass('on');
		var target = evt.srcElement || evt.target;
		$(target).addClass('on');
	})

	function getTop(ele){
		return document.getElementById(ele).getBoundingClientRect().top;
	}

})
