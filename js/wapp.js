let currentPlace = document.querySelector('.current-location');
let path = document.querySelectorAll('.map path');

path.forEach((el)=>
    el.addEventListener('mouseover',()=>currentPlace.innerText = el.getAttribute('title'))
)