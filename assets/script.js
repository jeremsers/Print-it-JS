import { chargerImage, changerPoints, selectImageRight, selectImageLeft, changerAnimImageRight, changerAnimImageLeft, animateProduct, animateQuestion, animateWhyus, animateContact } from "./function.js";

const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");

chargerImage();
changerPoints();

arrow_right.addEventListener("click", function () {
	
	
	
	selectImageRight();
	changerAnimImageRight();
	chargerImage();
	changerPoints();
	
});

arrow_left.addEventListener("click", function () {

	
	
	selectImageLeft();
	changerAnimImageLeft();
	chargerImage();
	changerPoints();
	
});


window.addEventListener("scroll", function(){
	animateProduct();
	animateQuestion();
	animateWhyus();
	animateContact();
	


})




