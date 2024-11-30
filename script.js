document.querySelector(".fa-bars").addEventListener('click', ()=> {
    document.querySelector(".nav-items").classList.toggle("active");
    console.log("gggg")
})

let changeIcon = function(icon){
    icon.classList.toggle('fa-times');
}
function videoUrl(hmmmm){
    document.getElementById("slider").src = hmmmm;
}
