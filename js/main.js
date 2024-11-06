console.info("Hello js");
document.getElementById("myHeading").innerHTML = "Abdulahi";
document.querySelector('nav ul li').setAttribute('class', 'currentPage');
// document.querySelector('nav ul li a').setAttribute('href', 'http://www.google.co.uk');

let colourButtons = document.querySelectorAll(".colPicker");
console.dir(colourButtons);

for (let i = 0; i < colourButtons.length; i++) {
    colourButtons[i].style.backgroundColor = "grey";
}

document.getElementById('myTestBtn').addEventListener('click', function() {
    console.info('hi');  
});

document.querySelector(".red").addEventListener("click", function() {
    document.body.setAttribute("class", "redBack");
});

document.querySelector(".green").addEventListener("click", function() {
    document.body.setAttribute("class", "greenBack");
});

document.querySelector(".blue").addEventListener("click", function(){
    document.body.setAttribute("class", "blueBack");
});

document.querySelector(".reset").addEventListener("click", function() {
    document.body.setAttribute("class", "reset");
});

let imageAr = [
    'images/view1.jpg',
    'images/view2.jpg',
    'images/view3.jpg',
    'images/view4.jpg',
    'images/view5.jpg',
    'images/view6.jpg'
];
let imageRotator = document.getElementById("myImages");
let imageCounter = 0;

function chngImage() {
    imageRotator.setAttribute("src", imageAr[imageCounter]);
    imageCounter = (imageCounter + 1) % imageAr.length;
    console.info(imageCounter);
}

setInterval(chngImage, 3000);  
