let  imageSelector = 0;
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


export function selectImageRight(){

	imageSelector===slides.length-1 ? imageSelector = 0 : imageSelector ++;
}

export function selectImageLeft(){

    imageSelector === 0 ? imageSelector = slides.length-1 : imageSelector --;
}


export function chargerImage() {
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

export function changerAnimImageRight() {
	const parentElementAnim = document.querySelector('.animation-div')
	parentElementAnim.className = "animation-div reset-animimgR"
	const parentElement = document.querySelector('.banner-div');
	parentElement.className ="reset-currentimgR banner-div"
	void parentElementAnim.offsetWidth;
	parentElementAnim.innerHTML = parentElement.innerHTML
	parentElementAnim.className = "animation-animimgR animation-div"
	parentElement.className ="animation-currentimgR banner-div"
	
};


export function changerAnimImageLeft() {
	const parentElementAnim = document.querySelector('.animation-div')
	parentElementAnim.className = "animation-div reset-animimgL"
	const parentElement = document.querySelector('.banner-div');
	parentElement.className ="reset-currentimgL banner-div"
	void parentElementAnim.offsetWidth;
	parentElementAnim.innerHTML = parentElement.innerHTML
	parentElementAnim.className = "animation-animimgL animation-div"
	parentElement.className ="animation-currentimgL banner-div"
	
};

export function changerPoints() {
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

export function animateProduct() {
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

export function animateQuestion() {
	const ElementTitle = document.querySelector('.question-title');
	const ElementText = document.querySelector('.question-text')
	const ElementBtn = document.querySelector('.question-btn');
	const ElementRect = ElementTitle.getBoundingClientRect(); 
	if (ElementRect.top <= 884) {

		ElementTitle.classList.add('question-title-anim')
		ElementText.classList.add('question-text-anim')
		ElementBtn.classList.add('question-btn-anim')
	}
}

export function animateWhyus() {
	const ElementTitle = document.querySelector('.whyus-title');
	const ElementArticle = document.querySelectorAll('.whyus-article')
	const ElementRect = ElementTitle.getBoundingClientRect(); 
	if (ElementRect.top <= 800) {

		ElementTitle.classList.add('whyus-title-anim')
		ElementArticle.forEach(element => {
			element.classList.add('whyus-article-anim')
		});
		
	}
}

export function animateContact() {
	const ElementTitle = document.querySelector('.contact-title');
	const ElementDiv = document.querySelectorAll('.contact-div')
	const ElementImg = document.querySelector('.contact-img')

	const ElementRect = ElementTitle.getBoundingClientRect(); 
	
	if (ElementRect.top <= 900) {

		ElementTitle.classList.add('contact-title-anim')
		ElementDiv.forEach(element => {
			element.classList.add('contact-div-anim')
			
		});
		ElementImg.classList.add('contact-img-anim')

		
	}
}

