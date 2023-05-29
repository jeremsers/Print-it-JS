const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");

let imageSelector = 0;
let animimageSelector = 0;
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

chargerImage();
changerPoints();

arrow_right.addEventListener("click", function () {
	
	animimageSelector = imageSelector
	imageSelector===slides.length-1 ? imageSelector = 0 : imageSelector ++;
	

	chargerImage();
	changerAnimImageRight();
	changerPoints();
	
});
arrow_left.addEventListener("click", function () {

	animimageSelector = imageSelector
	imageSelector === 0 ? imageSelector = slides.length-1 : imageSelector --;
	

	chargerImage();
	changerAnimImageLeft();
	changerPoints();
	
});


function chargerImage() {
	const parentElement = document.querySelector('.banner-div');
	parentElement.innerHTML = ""
	const currentImage = document.createElement("img");
	currentImage.className = "banner-img"
	const tagLine = document.createElement('p')
	currentImage.src = `./assets/images/slideshow/${slides[imageSelector].image}`;
	tagLine.innerHTML = slides[imageSelector].tagLine;
	parentElement.appendChild(currentImage)
	parentElement.appendChild(tagLine)
	
	
};


function changerAnimImageRight() {
	const parentElementAnim = document.querySelector('.animation-div')
	parentElementAnim.className = "animation-div reset-animimgR"
	const parentElement = document.querySelector('.banner-div');
	parentElement.className ="reset-currentimgR banner-div"
	void parentElementAnim.offsetWidth;
	parentElementAnim.innerHTML = ""
	const animImage = document.createElement("img");
	animImage.className = "banner-img"
	const animtagLine = document.createElement('p')
	animImage.src = `./assets/images/slideshow/${slides[animimageSelector].image}`;
	animtagLine.innerHTML = slides[animimageSelector].tagLine;
	parentElementAnim.appendChild(animImage)
	parentElementAnim.appendChild(animtagLine)
	parentElementAnim.className = "animation-animimgR animation-div"
	parentElement.className ="animation-currentimgR banner-div"
	
};

function changerAnimImageLeft() {
	const parentElementAnim = document.querySelector('.animation-div')
	parentElementAnim.className = "animation-div reset-animimgL"
	const parentElement = document.querySelector('.banner-div');
	parentElement.className ="reset-currentimgL banner-div"
	void parentElementAnim.offsetWidth;
	parentElementAnim.innerHTML = ""
	const animImage = document.createElement("img");
	animImage.className = "banner-img"
	const animtagLine = document.createElement('p')
	animImage.src = `./assets/images/slideshow/${slides[animimageSelector].image}`;
	animtagLine.innerHTML = slides[animimageSelector].tagLine;
	parentElementAnim.appendChild(animImage)
	parentElementAnim.appendChild(animtagLine)
	parentElementAnim.className = "animation-animimgL animation-div"
	parentElement.className ="animation-currentimgL banner-div"
	
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



/*************Animation Products */




window.addEventListener("scroll", function(){
	animateProduct();
	animateQuestion();


})




function animateProduct() {
	const productImg = document.querySelector('.products-img');
	const productTitle = document.querySelector('.products-title')
	const productText = document.querySelector('.products-text');
	const ElementRect = productImg.getBoundingClientRect(); 
	if (ElementRect.top <= 817) {

		productImg.classList.add('products-img-anim')
		productTitle.classList.add('products-title-anim')
		productText.classList.add('products-text-anim')
	}
}

function animateQuestion() {
	const ElementTitle = document.querySelector('.question-title');
	const ElementText = document.querySelector('.question-text')
	const ElementBtn = document.querySelector('.question-btn');
	const ElementRect = ElementTitle.getBoundingClientRect(); 
	console.log(ElementRect.top)
	if (ElementRect.top <= 884) {

		ElementTitle.classList.add('question-title-anim')
		ElementText.classList.add('question-text-anim')
		ElementBtn.classList.add('question-btn-anim')
	}
}