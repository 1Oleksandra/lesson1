
const openButton = document.getElementById('accountButton');
const closeButton = document.getElementById('popupClose');
const welcome = document.getElementById('welcome');
// event listeners
const handleClick = openButton.addEventListener('click', () => {
    console.log("click on open");
    welcome.classList.add('open')
})
closeButton.addEventListener('click', () => {
    console.log("click on close");
    welcome.classList.remove('open')
})


