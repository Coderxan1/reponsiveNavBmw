let shownav = document.querySelector("#shownav");

let content_div = document.querySelector('.navbar');

shownav.onclick = () =>{
    content_div.classList.toggle('active');
}

