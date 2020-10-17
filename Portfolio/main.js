
$(document).ready(function(){
/*active nav*/
   $('.navbar-menu a').on('click',function(){
       $(this).addClass('active').siblings().removeClass('active');
   });
    /*----------active-nav button---*/
	/* Scroll Effect*/
    $(window).scroll(function(){
        if(scrollY > 1250){
           $('.navbar').addClass('sticky')}
        else if(scrollY > 750){
           $('.navbar').removeClass('sticky');
       }
       else if(scrollY > 20){
           $('.navbar').addClass('sticky');
       }else{
           $('.navbar').removeClass('sticky');
       } 
        
        
    });
    /* active buttons nav*/
    $('.menu-toggler').on('click',function(){
        $(this).toggleClass('nav-active');
        $('.navbar-menu').toggleClass('nav-active');     
    });
	
	/*Flip P and line anim*/
    $('.service button').click(function(){
       var div =$(this).parent('div'); 
		div.find('.underline').toggleClass('anim');
	/*animation delay of img*/
		if(div.find('.ser-img').hasClass('display-none'))
		{
           div.find('.ser-img').css('transition-delay','0.5s');
			div.find('.front').css('height','44px');
			$(this).html("View More");
		}else{
			div.find('.ser-img').css('transition-delay','0s');
			div.find('.front').css('height','100%');
			$(this).html("View Less");
		}
        div.find('.ser-img').toggleClass('display-none');
		
		/*--------animdelay----*/
		var h1 =$(this).parent('div').find('h1');
		h1.toggleClass('margin');
		/*Expanded Text*/	
    });
	/* services hover zoom in effect*/
	$('.service').mouseover(function(){
		var img=$(this).find('.ser-img img');
		img.css('transition','0.5s ease');
		img.css('width','45%');
		img.css('height','100%');
    });
	
	$('.service').mouseout(function(){
	   var img=$(this).find('.ser-img img');
		img.css('width','40%');
		img.css('height','90%');
    });
    
});