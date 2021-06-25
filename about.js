console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert('Successful Submission!');
	
	// console.log('form submit');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

function mouseoverAlert(evt) {
	evt.preventDefault();
	alert('You are so Smart!')
}

let form2 = document.querySelector('#image')
form2.addEventListener('mouseover', mouseoverAlert)