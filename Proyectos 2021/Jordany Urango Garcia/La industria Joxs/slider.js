const slider=document.querySelector("#slider");

let sliderSection=document.querySelectorAll(".slider_section");
let sliderSectionLast=sliderSection[sliderSection.length-1];
const btnLeft=document.querySelector("#btn-left");
const btnright=document.querySelector("#bnt-right");
slider.insertAdjacentElement('afterbegin', sliderSectionLast);
 function moverDerecha (){


 	let sliderSectionPrimero=document.querySelectorAll(".slider_section")[0];
 	slider.style.marginLeft="-200%";
 	slider.style.transition ="all 0.5s";
 	setTimeout(function(){

slider.style.transition ="none";
slider.insertAdjacentElement('beforeend',sliderSectionPrimero);
slider.style.marginLeft="-100%";
 	},500);
 }
 function moverIzquierda (){


 	let sliderSection=document.querySelectorAll(".slider_section");
let sliderSectionLast=sliderSection[sliderSection.length-1];
 	slider.style.marginLeft="0";
 	slider.style.transition ="all 0.5s";
 	setTimeout(function(){

slider.style.transition ="none";
slider.insertAdjacentElement('afterbegin', sliderSectionLast);
slider.style.marginLeft="-100%";
 	},500);
 }
 btnright.addEventListener('click', function(){

moverDerecha();

 });
 btnLeft.addEventListener('click', function(){

moverIzquierda();

 });

 setInterval(function(){

 	moverDerecha();
 },8000);


// boton leer mas

 let i=0;
 let boton=document.querySelector("#boton").addEventListener('click', function(){
 
 	if (!i) {

 		document.getElementById('leer-mas').style.display='inline';
 		document.getElementById('boton').innerHTML='Leer Menos';
 		i=1;
 	}
 	else{

 		document.getElementById('leer-mas').style.display='none';
 		document.getElementById('boton').innerHTML='Leer Mas';
 		i=0;
 	}
 })