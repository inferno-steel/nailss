console.log("hello");

/* slider */

const slider = document.querySelectorAll(".slider")

console.log(slider[1]);

const sliderWrap = document.querySelector(".slider-wrap") 
const sliderImage = document.querySelectorAll(".slider_img")
const btnRight = document.querySelector(".button-right")
const btnLeft = document.querySelector(".button-left")
const sliderDot = document.querySelectorAll(".slider_dot")
let sliderCounter = 0
let sliderWidth;

window.addEventListener("resize", showSlide)

btnLeft.addEventListener("click", nextSlide)
btnRight.addEventListener("click", prevSlide)



function showSlide() {
    sliderWidth = document.querySelector(".slider").offsetWidth;
    console.log(sliderWidth);
    sliderWrap.style.width = sliderWidth * sliderImage.length + "px";
    sliderImage.forEach(item => item.style.width = sliderWidth + "px");
    console.log();

    rollSlider()

}
 showSlide()




function prevSlide() {
    sliderCounter++;

    if (sliderCounter >= sliderImage.length) {
        sliderCounter = 0;
    }
    console.log(sliderCounter);
    rollSlider()
    thisSlide(sliderCounter)
}

function nextSlide() {
    sliderCounter--;

    if (sliderCounter < 0) {
        sliderCounter = sliderImage.length -1;
    }
    console.log(sliderCounter); 
    rollSlider()
    thisSlide(sliderCounter)
}

console.log(sliderWidth);


function rollSlider() {
    sliderWrap.style.transform = `translateX(${-sliderCounter * sliderWidth}px)`;
}

function thisSlide(index) {
    sliderDot.forEach(item => item.classList.remove('active_dot'));
    sliderDot[index].classList.add('active_dot')
    
}

sliderDot.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCounter = index;
        rollSlider();
        thisSlide(sliderCounter);
    })
})


const titles = document.querySelectorAll(".accordion__title");
const contents = document.querySelectorAll(".accordion__content");

    titles.forEach(item =>  item.addEventListener('click', () => {
        const activeContent = document.querySelector('#' + item.dataset.tab);
        if (activeContent.classList.contains('active')) {
            activeContent.classList.remove('active');
            item.classList.remove('active');
            activeContent.style.maxHeight = 0;
        } else {
            contents.forEach(element => {
                element.classList.remove('active');
                element.style.maxHeight = 0;
            });

            titles.forEach(element => element.classList.remove('active'));
            
            item.classList.add('active');
            activeContent.classList.add('active');
            activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
        }
    }));