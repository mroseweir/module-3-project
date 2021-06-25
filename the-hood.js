let resArray = ['The Brass Tap', 'The Gin', 'Prosper Town Pub & Grub', "Palio's Pizza Cafe", 'Texas Roadhouse'];

const randomRes = resArray[Math.floor(Math.random() * resArray.length)];

function ranRes (event) {
    event.preventDefault()
    alert(randomRes)
}

let form = document.querySelector('#restaurantBtn');
form.addEventListener('click', ranRes)

console.log(resArray);
console.log(randomRes);
