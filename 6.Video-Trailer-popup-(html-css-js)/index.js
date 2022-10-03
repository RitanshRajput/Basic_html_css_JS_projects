const btnEl = document.querySelector(".btn") ;
const closeIconEl = document.querySelector(".close-icon") ;
const trailerContaienrEl = document.querySelector(".trailer-container") ;
const videoEl = document.querySelector("video") ;

btnEl.addEventListener("click", () =>{
    trailerContaienrEl.classList.remove("active") ;
}) ;

closeIconEl.addEventListener("click", () =>{
    trailerContaienrEl.classList.add("active") ;
    videoEl.pause() ;
    videoEl.currentTime = 0 ;
}) ;