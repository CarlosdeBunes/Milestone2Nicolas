const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

/* JS INCLUIDO */
var texto = document.querySelectorAll("#services .service-item p");

function expandir(numero){
	switch (numero){
		case 1:
			texto[0].style.display = "block";
			break;
		case 2: 
			texto[1].style.display = "block";
			break;
		case 3:
			texto[2].style.display = "block";
			break;
		case 4: 
			texto[3].style.display = "block";
			break;
	}

}

function contraer(numero){

	switch(numero){
		case 1:
			texto[0].style.display = "none";
			break;
		case 2: 
			texto[1].style.display = "none";
			break;
		case 3:
			texto[2].style.display = "none";
			break;
		case 4: 
			texto[3].style.display = "none";
			break;
	}

}

let indice = 1;

muestraSlides(indice);

function avanzaSlide (n){
	muestraSlides(indice+=n);
}

function posicionSlide(n){
	muestraSlides(indice=n);
}

setInterval (function tiempo(){
	muestraSlides(indice+=1);
},4000);

function muestraSlides(n){
	let i;
	let slides = document.getElementsByClassName('miSlider');
	let barras = document.getElementsByClassName('barra');

	if ( n > slides.length ){
		indice = 1;
	}

	if ( n < 1 ){
		indice = slide.length();
	}

	for (i=0; i < slides.length; i++){
		slides[i].style.display = 'none';
	}

	for (i=0; i < slides.length; i++){
		barras.className = barras[i].className.replace(" active", "");
	}

	slides[indice-1].style.display = 'block';
	barras[indice-1].className += ' active';


}

