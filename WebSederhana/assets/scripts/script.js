//animation menu open and close
const navBtn = document.querySelector('.navBtn');
const nav = document.querySelector('nav ul');
let btnOpen = false;
navBtn.addEventListener('click', () => {
    if (!btnOpen) {
        navBtn.classList.toggle('open');
        nav.classList.toggle('close');
        btnOpen = true;
    } else {
        navBtn.classList.remove('open');
        nav.classList.toggle('close');
        btnOpen = false;
    }
})


// auto rolling animation jumbotron
var counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);

//smooth scrolling
const scrollClick = (value) => {
    const scrollTo = document.getElementById(`scroll${value}`);
    scrollTo.scrollIntoView({ behavior: "smooth" })
}