const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");

let imageSelector = 0;
let animimageSelector = 1;
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
changerImage();

arrow_right.addEventListener("click", function () {
	
	imageSelector===slides.length-1 ? imageSelector = 0 : imageSelector ++;
	animimageSelector === slides.length-1 ? animimageSelector = 0 : animimageSelector ++;

	changerImage();
	changerPoints();
	
});
arrow_left.addEventListener("click", function () {

	imageSelector === 0 ? imageSelector = slides.length-1 : imageSelector --;
	animimageSelector === 0 ? animimageSelector = slides.length-1 : animimageSelector --;

	changerImage();
	changerPoints();
	
});

function changerImage() {
	const parentElementAnim = document.querySelector('.animation-div')
	parentElementAnim.className = "animation-div reset-img"
	const parentElement = document.querySelector('.banner-div');
	parentElement.className ="reset banner-div"
	void parentElementAnim.offsetWidth;
	parentElement.innerHTML = ""
	parentElementAnim.innerHTML = ""
	const currentImage = document.createElement("img");
	currentImage.className = "banner-img"
	const tagLine = document.createElement('p')
	currentImage.src = `./assets/images/slideshow/${slides[animimageSelector].image}`;
	tagLine.innerHTML = slides[animimageSelector].tagLine;
	const animImage = document.createElement("img");
	animImage.className = "banner-img"
	const animtagLine = document.createElement('p')
	animImage.src = `./assets/images/slideshow/${slides[imageSelector].image}`;
	animtagLine.innerHTML = slides[imageSelector].tagLine;
	parentElement.appendChild(currentImage)
	parentElement.appendChild(tagLine)
	parentElementAnim.appendChild(animImage)
	parentElementAnim.appendChild(animtagLine)
	parentElementAnim.className = "animation-img animation-div"
	parentElement.className ="animation-principal banner-div"
	
};

function changerPoints() {
	const parentElement = document.querySelector(".dots");
	parentElement.innerHTML = "";
	for (let i = 0; i < slides.length; i++) {
		if (animimageSelector === i){
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