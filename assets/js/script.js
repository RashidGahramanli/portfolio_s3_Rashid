const favBarsButtonu = document.querySelector(".fa-bars")
const closeButtonu = document.querySelector(".fa-xmark")
const overlayDivi = document.querySelector(".overlay")

favBarsButtonu.addEventListener("click",()=>{
    overlayDivi.style.width="100%"
} )
closeButtonu.addEventListener("click",()=>{
    overlayDivi.style.width="0"
})