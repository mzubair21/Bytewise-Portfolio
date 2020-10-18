
var arr=document.querySelectorAll('.img');
var slide = document.querySelector('.team-slide');
var width=arr[0].clientWidth;
var counter=1;
slide.style.transform =  'translateX(' +(-width * counter ) + 'px)';

function prev(){
	addmargin();
    if(counter<1){return;}
    slide.style.transition="transform 0.5s ease-out";
    counter--;
    slide.style.transform= 'translateX(' +(-width * counter) + 'px)';
}
function next(){
	addmargin();
    if(counter>arr.length-2){return;}
    slide.style.transition="transform 0.5s ease-in-out";
    counter++;
    slide.style.transform= 'translateX(' +(-width * counter) + 'px)'; 
}
slide.addEventListener('transitionend',()=>{
    if(arr[counter].id === 'first'){
       slide.style.transition="none";
        counter=(arr.length)-2;
        slide.style.transform= 'translateX(' +(-width * counter) + 'px)';
    }else if(arr[counter].id ==='last'){
         slide.style.transition="none";
        counter=(arr.length)-counter;
        slide.style.transform= 'translateX(' +(-width * counter) + 'px)'; 
    }
	
	$(document).ready(function(){
	$('.intro').removeClass('center');
		if(counter==1){
	  introduction("Muhammad Usman","CEO of Bytewise");  
   }
   if(counter==2){
	  introduction("Muhammad Ahtisham","Android Developer");  
   }
		if(counter==3){
	  introduction("Hadi Butt","Front End Developer");  
   }
		if(counter==4){
	  introduction("Muhammad Abdullah Khan","Full Stack");  
   }
		if(counter==5){
	  introduction("Obaid Ahmed Khan","Graphics Designer");  
   }	
		if(counter==6){
	  introduction("Muhammad Zubair","Back End Developer");  
   }
	

});
});
function introduction(a,b){
	$('.intro h2').text(a);
	$('.intro h3').text(b);
}
function addmargin(){
	$('.intro').addClass('center');
	
}

function autonext(){
	setTimeout(autonext,3000);
	next();
}
autonext();
