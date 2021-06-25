// console.log('test')

function myFavoriteColor(evt) {
	evt.preventDefault();
	alert('Blue!');
}

function myFavoritePlace(evt) {
	evt.preventDefault();
	alert('The Beach!');
}

function myFavoriteRitual(evt) {
	evt.preventDefault();
	alert('Sunday morning motorcycle rides!');
}

let colorBtn = document.querySelector("#color");
let placeBtn = document.querySelector("#place");
let ritualBtn = document.querySelector("#ritual");

colorBtn.addEventListener('click', myFavoriteColor);
placeBtn.addEventListener('click', myFavoritePlace);
ritualBtn.addEventListener('click', myFavoriteRitual);