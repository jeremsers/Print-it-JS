const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");

let imageSelector = 0;
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

changerPoints();

arrow_right.addEventListener("click", function () {
	
	imageSelector===slides.length-1 ? imageSelector = 0 : imageSelector ++

	changerImage();
	changerPoints();
	
});
arrow_left.addEventListener("click", function () {

	imageSelector === 0 ? imageSelector = slides.length-1 : imageSelector --

	changerImage();
	changerPoints();
	
});

function changerImage() {
	const currentImage = document.querySelector(".banner-img");
	const tagLine = document.querySelector("#banner p");
	
	currentImage.src = `./assets/images/slideshow/${slides[imageSelector].image}`;
	tagLine.innerHTML = slides[imageSelector].tagLine;
	
};

function changerPoints() {
	const parentElement = document.querySelector(".dots");
	parentElement.innerHTML = "";
	for (let i = 0; i < slides.length; i++) {
		if (imageSelector === i){
			const sliderElement = document.createElement("span");
			sliderElement.className = "dot dot_selected";
			parentElement.appendChild(sliderElement);
			
		}else{
			const sliderElement = document.createElement("span");
			sliderElement.className = "dot";
			parentElement.appendChild(sliderElement);
			
		}
	}

};