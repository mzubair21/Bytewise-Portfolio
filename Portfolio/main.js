$(document).ready(function(){
   $('.navbar-menu a').on('click',function(){
       $(this).addClass('active').siblings().removeClass('active');
   });
    
    $(window).scroll(function(){
       if(scrollY > 20 ){
           $('.navbar').addClass('sticky');
       }else{
           $('.navbar').removeClass('sticky');
       } 
    });
    
    $('.menu-toggler').on('click',function(){
        $(this).toggleClass('nav-active');
        $('.navbar-menu').toggleClass('nav-active');     
    });
    
    
});