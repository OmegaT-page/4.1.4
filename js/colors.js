$(document).ready(function(){
	
		
	$('.color1').click(function(){	
		$('body').addClass('color_one').removeClass('color_two color_three');
	} ); 
	
	$('.color2').click(function(){	
		$('body').addClass('color_two').removeClass('color_one color_three');
	} ); 

	$('.color3').click(function(){	
		$('body').addClass('color_three').removeClass('color_one color_two');
	} ); 	
	
	$('.icon').click (function(event){
		event.preventDefault();
		if( $ (this).hasClass('inOut')  ){
			$('.mp-color').stop().animate({left:'-220px'},500 );
		} else{
			$('.mp-color').stop().animate({left:'0px'},500 );
		} 
		$(this).toggleClass('inOut');
		return false;

	}  );

	
	
	
	
} );


