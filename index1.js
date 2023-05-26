let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slider");
  let slide_content = document.getElementsByClassName("slide-content");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i <slide_content.length; i++) {
    // slide_content[i].className = slide_content[i].className.replace(" active", "");
    slide_content[i].style.display = "none"; 
  }
  
  slides[slideIndex-1].style.display = "block";  
  slide_content[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2500); // Change image every 2 seconds
}

const videoCards =[...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener ("mouseover",() =>{
    let video =item.children[1];
    video.play();
  });

  item.addEventListener("mouseleave", () =>{
    let video =item.children[1];
    video.pause();
  });
});

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nextBtns = [...document.querySelectorAll (".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions= item.getBoundingClientRect();
  let containerWidth=containerDimensions.width;

  nextBtns[i].addEventListener('click',() => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener('click',() => {
    item.scrollLeft -= containerWidth + 200;
  });
  
});

// let login = document.getElementsByClassName(".login-link")
// login.addEventListener("click",()=>{
//   document.getElementBylink 
// })
function show(){  
 document.getElementById("form-box").className="ghh1";
 let form_box =document.querySelector("body");
 form_box.style.opacity="0.4";
document.getElementsByClassName("ghh1").style.opacity="1";
//  document.getElementsByClassName("caraousel-container")[0].style.opacity="0.4";
//  document.getElementsByClassName("video-card-container")[0].style.opacity="0.4";


 
}


