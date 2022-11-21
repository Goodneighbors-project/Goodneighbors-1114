let slideWrap = document.querySelector("#container");
let slideContainer = document.querySelector(".slider-container");
let slides = document.querySelectorAll(".slide");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let slideCount = slides.length;
let currrentIndex = 0;
timer = undefined;

for(let i = 0; i < slideCount; i++){
    slides[i].style.left = i * 100 + '%';
}

function goToSlide(idx){
    slideContainer.style.left = -100 * idx + '%';
    slideContainer.classList.add('animated');
    currrentIndex = idx;
}

prev.addEventListener('click', function(){
    if(currrentIndex == 0){
        goToSlide(slideCount - 1);
    }else{
        goToSlide(currrentIndex - 1);
    }
});

next.addEventListener('click', function(){
    if(currrentIndex == slideCount - 1){
        goToSlide(0);
    }else{
        goToSlide(currrentIndex + 1);
    }
});

function startAutoSlide(){
    timer = setInterval(function(){
        let nextIdx = (currrentIndex + 1) % slideCount;
    
        goToSlide(nextIdx);
    }, 4000);
}

startAutoSlide();

slideWrap.addEventListener('mouseenter', function(){
    clearInterval(timer);
});

slideWrap.addEventListener('mouseleave', function(){
    startAutoSlide();
});
